const prisma = require("../config/db");

async function handleUser(socket, io) {
    const userId = socket.user.id;
    const userName = socket.user.userName || null;
    const userEmail = socket.user.userEmail || null;
    const userCode = socket.user.code || "guest";
    const userType = socket.user.type || "smart";
    const isGuest = socket.user.isGuest || false;

    console.log(`👤 User connected: ${userName} (${userType}, Guest: ${isGuest}, Code: ${userCode})`);

    // Join user's personal room
    socket.join(`user_${userId}`);

    // Store session info on socket
    let currentSessionId = null;

    // Check for existing active session on connect
    const checkExistingSession = async () => {
        try {
            const session = await prisma.chatSession.findFirst({
                where: {
                    userId,
                    status: { in: ["OPEN", "ASSIGNED"] }
                }
            });

            if (session) {
                currentSessionId = session.id;
                socket.join(`session_${session.id}`);
                console.log(`✅ User rejoined existing session room: session_${session.id}`);

                // IMPORTANT: Get messages and emit them
                const messages = await prisma.message.findMany({
                    where: {
                        chatSessionId: session.id
                    },
                    orderBy: {
                        createdAt: "asc"
                    }
                });

                socket.emit("userChatHistory", {
                    sessionId: session.id,
                    messages: messages,
                    status: session.status,
                    agentId: session.agentId,
                    userCode: session.userCode,
                    userType: session.userType,
                    isGuest: session.isGuest
                });

                // If session has an agent, notify user
                if (session.agentId) {
                    const staffPresence = await prisma.staffPresence.findUnique({
                        where: { staffId: session.agentId }
                    });

                    socket.emit("chatAssigned", {
                        id: session.id,
                        agentId: session.agentId,
                        agentName: staffPresence?.name || "Support Agent",
                        status: "ASSIGNED"
                    });

                    console.log(`📢 Emitted chatAssigned to registered user ${userId} with agent ${staffPresence?.name}`);
                }
            } else {
                console.log(`No active session found for user ${userId}`);
            }
        } catch (error) {
            console.error("Error checking existing session:", error);
        }
    };

    // Run on connect
    await checkExistingSession();

    socket.on("sendMessage", async (data) => {
        const { message, messageType = "TEXT" } = data;

        console.log(`📨 Received sendMessage event from client:`, { message, messageType, userId });

        try {
            // Find or create active session
            let session = await prisma.chatSession.findFirst({
                where: {
                    userId,
                    status: { in: ["OPEN", "ASSIGNED"] }
                }
            });

            console.log(`Found existing session:`, session ? session.id : 'None');

            // Create session if not exists
            if (!session) {
                console.log(`📝 Creating new session for ${userName} (${userType})`);

                try {
                    session = await prisma.chatSession.create({
                        data: {
                            userId,
                            status: "OPEN"
                        }
                    });
                    console.log(`✅ Minimal session created: ${session.id}`);

                    // Update with user info
                    try {
                        const updatedSession = await prisma.chatSession.update({
                            where: { id: session.id },
                            data: {
                                userName,
                                userEmail,
                                userCode,
                                userType,
                                isGuest
                            }
                        });
                        session = updatedSession;
                        console.log(`✅ Session updated with user info: ${session.id}`);
                    } catch (updateError) {
                        console.error("❌ Failed to update session with user info:", updateError);
                    }
                } catch (createError) {
                    console.error("❌ Failed to create session:", createError);
                    socket.emit("error", { message: "Failed to create chat session" });
                    return;
                }
            }

            // CRITICAL: Ensure user is in the session room
            socket.join(`session_${session.id}`);
            currentSessionId = session.id;
            console.log(`✅ User joined session room: session_${session.id}`);

            // Track if this is a new assignment
            let isNewAssignment = false;
            let assignedStaffId = session.agentId;
            let assignedStaffName = "Support Agent";

            // Assign if not assigned
            if (!session.agentId) {
                console.log(`🔍 Looking for online staff to assign...`);

                const onlineStaff = await prisma.staffPresence.findMany({
                    where: { status: "ONLINE" }
                });

                console.log(`Found ${onlineStaff.length} online staff`);

                if (onlineStaff.length > 0) {
                    const staffLoad = await Promise.all(
                        onlineStaff.map(async (staff) => {
                            const activeChats = await prisma.chatSession.count({
                                where: {
                                    agentId: staff.staffId,
                                    status: { in: ["OPEN", "ASSIGNED"] }
                                }
                            });
                            return {
                                staffId: staff.staffId,
                                presenceId: staff.id,
                                activeChats,
                                staffName: staff.name
                            };
                        })
                    );

                    staffLoad.sort((a, b) => a.activeChats - b.activeChats);
                    const selectedStaff = staffLoad[0];
                    assignedStaffId = selectedStaff.staffId;
                    assignedStaffName = selectedStaff.staffName || "Support Agent";

                    console.log(`✅ Assigning chat to staff: ${assignedStaffId} (${assignedStaffName})`);

                    session = await prisma.chatSession.update({
                        where: { id: session.id },
                        data: {
                            agentId: assignedStaffId,
                            status: "ASSIGNED",
                            assignedAt: new Date()
                        }
                    });

                    isNewAssignment = true;

                    // Make sure staff joins the session room
                    io.to(`staff_${assignedStaffId}`).socketsJoin(`session_${session.id}`);

                    // IMPORTANT: Emit to the user that chat has been assigned
                    socket.emit("chatAssigned", {
                        id: session.id,
                        agentId: assignedStaffId,
                        agentName: assignedStaffName,
                        status: "ASSIGNED"
                    });

                    console.log(`📢 Emitted chatAssigned to user ${userId} with agent ${assignedStaffName}`);
                } else {
                    console.log("❌ No staff online for assignment");
                }
            } else {
                console.log(`Session already assigned to staff: ${session.agentId}`);

                // Get staff name
                const staffPresence = await prisma.staffPresence.findUnique({
                    where: { staffId: session.agentId }
                });
                assignedStaffName = staffPresence?.name || "Support Agent";

                // Emit chatAssigned if not already emitted
                socket.emit("chatAssigned", {
                    id: session.id,
                    agentId: session.agentId,
                    agentName: assignedStaffName,
                    status: "ASSIGNED"
                });
            }

            // Save message
            const newMessage = await prisma.message.create({
                data: {
                    chatSessionId: session.id,
                    senderId: userId,
                    senderType: "USER",
                    message,
                    type: messageType,
                    status: "SENT"
                }
            });

            console.log(`✅ Message saved to session: ${session.id}`);

            // Update session's updatedAt
            await prisma.chatSession.update({
                where: { id: session.id },
                data: { updatedAt: new Date() }
            });

            // Send message to staff in session - use io.to for broadcasting
            io.to(`session_${session.id}`).emit("receiveMessage", newMessage);
            console.log(`✅ Message broadcast to all in session_${session.id}`);

            // If session has an assigned staff, handle notifications
            if (assignedStaffId) {
                if (isNewAssignment) {
                    const unreadCount = await prisma.message.count({
                        where: {
                            chatSessionId: session.id,
                            senderType: "USER"
                        }
                    });

                    io.to(`staff_${assignedStaffId}`).emit("newChatAssigned", {
                        id: session.id,
                        userId: userId,
                        userName: userName,
                        userEmail: userEmail,
                        userCode: userCode,
                        userType: userType,
                        isGuest: isGuest,
                        status: session.status,
                        assignedAt: session.assignedAt,
                        lastMessage: message,
                        lastMessageType: messageType,
                        lastMessageTime: newMessage.createdAt,
                        unreadCount
                    });
                } else {
                    const lastStaffMessage = await prisma.message.findFirst({
                        where: {
                            chatSessionId: session.id,
                            senderType: "STAFF",
                            senderId: assignedStaffId
                        },
                        orderBy: {
                            createdAt: 'desc'
                        }
                    });

                    const unreadCount = await prisma.message.count({
                        where: {
                            chatSessionId: session.id,
                            senderType: "USER",
                            createdAt: {
                                gt: lastStaffMessage?.createdAt || new Date(0)
                            }
                        }
                    });

                    io.to(`staff_${assignedStaffId}`).emit("unreadCountUpdated", {
                        chatId: session.id,
                        unreadCount,
                        lastMessage: message,
                        lastMessageType: messageType,
                        lastMessageTime: newMessage.createdAt,
                        userName: userName,
                        userCode: userCode,
                        userType: userType,
                        isGuest: isGuest
                    });
                }
            }

        } catch (error) {
            console.error("❌ Error in sendMessage:", error);
            socket.emit("error", { message: "Failed to send message" });
        }
    });

    socket.on("loadUserChatHistory", async () => {
        try {
            console.log(`Loading chat history for user ${userId}`);

            const session = await prisma.chatSession.findFirst({
                where: {
                    userId,
                    status: { in: ["OPEN", "ASSIGNED"] }
                }
            });

            if (session) {
                console.log(`Found active session: ${session.id}`);

                const messages = await prisma.message.findMany({
                    where: {
                        chatSessionId: session.id
                    },
                    orderBy: {
                        createdAt: "asc"
                    }
                });

                console.log(`Found ${messages.length} messages`);

                // CRITICAL: Make sure user joins the session room when loading history
                socket.join(`session_${session.id}`);
                currentSessionId = session.id;
                console.log(`✅ User joined session room from history: session_${session.id}`);

                socket.emit("userChatHistory", {
                    sessionId: session.id,
                    messages: messages,
                    status: session.status,
                    agentId: session.agentId,
                    userCode: session.userCode,
                    userType: session.userType,
                    isGuest: session.isGuest
                });

                // If session has an agent, notify user
                if (session.agentId) {
                    const staffPresence = await prisma.staffPresence.findUnique({
                        where: { staffId: session.agentId }
                    });

                    socket.emit("chatAssigned", {
                        id: session.id,
                        agentId: session.agentId,
                        agentName: staffPresence?.name || "Support Agent",
                        status: "ASSIGNED"
                    });

                    console.log(`📢 Emitted chatAssigned to user ${userId} from history load`);
                }
            } else {
                console.log(`No active session found for user ${userId}`);
                socket.emit("userChatHistory", {
                    sessionId: null,
                    messages: [],
                    status: null,
                    agentId: null
                });
            }
        } catch (err) {
            console.error("loadUserChatHistory error:", err);
        }
    });


    socket.on("userEndChat", async () => {
        try {
            console.log(`🔚 User ${userId} ending chat`);

            // Find active session
            const session = await prisma.chatSession.findFirst({
                where: {
                    userId,
                    status: { in: ["OPEN", "ASSIGNED"] }
                }
            });

            if (session) {
                // Update chat session status to CLOSED
                await prisma.chatSession.update({
                    where: { id: session.id },
                    data: { status: "CLOSED" }
                });

                // Notify user that chat ended
                socket.emit("chatEnded", {
                    chatId: session.id,
                    endedBy: "user",
                    message: "You have ended this chat"
                });

                // Notify staff if assigned
                if (session.agentId) {
                    io.to(`staff_${session.agentId}`).emit("chatEnded", {
                        chatId: session.id,
                        endedBy: "user",
                        message: "User has ended the chat"
                    });

                    // Remove staff from session room (optional, but good)
                    io.to(`staff_${session.agentId}`).socketsLeave(`session_${session.id}`);
                }

                // Leave session room
                socket.leave(`session_${session.id}`);
                currentSessionId = null;
            }
        } catch (error) {
            console.error("❌ Error in userEndChat:", error);
            socket.emit("error", { message: "Failed to end chat" });
        }
    });
    // Handle reconnection - check for existing session
    socket.on("rejoin", async () => {
        await checkExistingSession();
    });

    socket.on("disconnect", () => {
        console.log(`🔴 User disconnected: ${userName} (${userType}, Guest: ${isGuest})`);
    });
}

module.exports = { handleUser };