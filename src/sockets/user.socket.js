const prisma = require("../config/db");

async function handleUser(socket, io) {
    const userId = socket.user.id;
    const userName = socket.user.userName || null;
    const userEmail = socket.user.userEmail || null;
    const userCode = socket.user.code || null; // Add this
    const userType = socket.user.type || "user"; // Add this

    socket.join(`user_${userId}`);

    socket.on("sendMessage", async (data) => {
        const { message, messageType = "TEXT" } = data;

        let session = await prisma.chatSession.findFirst({
            where: {
                userId,
                status: { in: ["OPEN", "ASSIGNED"] }
            }
        });

        // Create session if not exists
        if (!session) {
            session = await prisma.chatSession.create({
                data: {
                    userId,
                    userName,
                    userEmail,
                    userCode, // Add this
                    userType, // Add this
                    status: "OPEN"
                }
            });
        }

        // Track if this is a new assignment for unread count calculation
        let isNewAssignment = false;
        let assignedStaffId = session.agentId;

        // Assign if not assigned
        if (!session.agentId) {
            // Get ONLINE staff
            const onlineStaff = await prisma.staffPresence.findMany({
                where: { status: "ONLINE" }
            });
            console.log("onlineStaff", onlineStaff)
            if (onlineStaff.length > 0) {
                // Get active chat count per staff
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
                            activeChats
                        };
                    })
                );

                // Sort by least chats
                staffLoad.sort((a, b) => a.activeChats - b.activeChats);
                const selectedStaff = staffLoad[0];
                assignedStaffId = selectedStaff.staffId;

                // Assign session
                session = await prisma.chatSession.update({
                    where: { id: session.id },
                    data: {
                        agentId: assignedStaffId,
                        status: "ASSIGNED",
                        assignedAt: new Date()
                    }
                });

                isNewAssignment = true;

                // Update user info if needed (including code and type)
                if (session.userName !== userName ||
                    session.userEmail !== userEmail ||
                    session.userCode !== userCode ||
                    session.userType !== userType) {
                    session = await prisma.chatSession.update({
                        where: { id: session.id },
                        data: {
                            userName,
                            userEmail,
                            userCode,
                            userType
                        }
                    });
                }

                console.log("🔥 Chat Assigned to:", assignedStaffId);
            } else {
                console.log("❌ No staff online");
            }
        } else {
            // Even if already assigned, update user info if changed
            if (session.userName !== userName ||
                session.userEmail !== userEmail ||
                session.userCode !== userCode ||
                session.userType !== userType) {
                session = await prisma.chatSession.update({
                    where: { id: session.id },
                    data: {
                        userName,
                        userEmail,
                        userCode,
                        userType
                    }
                });
            }
        }

        socket.join(`session_${session.id}`);

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

        // Update session's updatedAt
        await prisma.chatSession.update({
            where: { id: session.id },
            data: { updatedAt: new Date() }
        });

        // Send message to staff in session
        socket.to(`session_${session.id}`).emit("receiveMessage", newMessage);

        // If session has an assigned staff, handle unread count
        if (assignedStaffId) {
            // If this is a new assignment, send the full session details
            if (isNewAssignment) {
                io.to(`staff_${assignedStaffId}`).emit("newChatAssigned", {
                    ...session,
                    unreadCount: 1, // This first message counts as unread
                    lastMessage: message,
                    lastMessageType: messageType,
                    userCode: userCode, // Add this
                    userType: userType // Add this
                });
            }
            // Otherwise, just update unread count for existing session
            else {
                // Calculate total unread messages for this session
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

                // Send real-time unread count update to staff with user info
                io.to(`staff_${assignedStaffId}`).emit("unreadCountUpdated", {
                    chatId: session.id,
                    unreadCount,
                    lastMessage: message,
                    lastMessageType: messageType,
                    lastMessageTime: newMessage.createdAt,
                    userName: userName, // Add this
                    userCode: userCode, // Add this
                    userType: userType // Add this
                });
            }
        }
    });

    // Handle user typing indicators
    socket.on("userTyping", async ({ chatId, isTyping }) => {
        try {
            // Validate chatId
            if (!chatId) {
                console.log("⚠️ userTyping: No chatId provided");
                return;
            }

            const session = await prisma.chatSession.findUnique({
                where: {
                    id: chatId
                },
                select: {
                    agentId: true
                }
            });

            if (session?.agentId) {
                socket.to(`staff_${session.agentId}`).emit("userTyping", {
                    chatId,
                    userId,
                    isTyping
                });
            } else {
                console.log("⚠️ userTyping: No agent assigned to session", { chatId });
            }
        } catch (error) {
            console.error("❌ Error in userTyping handler:", error);
            // Don't emit error to user for typing events (non-critical)
        }
    });

    // Load user chat history
    socket.on("loadUserChatHistory", async () => {
        try {
            // Find the user's active session
            const session = await prisma.chatSession.findFirst({
                where: {
                    userId,
                    status: { in: ["OPEN", "ASSIGNED"] }
                }
            });

            if (session) {
                // Get all messages for this session
                const messages = await prisma.message.findMany({
                    where: {
                        chatSessionId: session.id
                    },
                    orderBy: {
                        createdAt: "asc"
                    }
                });

                // Join the session room
                socket.join(`session_${session.id}`);

                // Send history to user with user info
                socket.emit("userChatHistory", {
                    sessionId: session.id,
                    messages: messages,
                    status: session.status,
                    agentId: session.agentId,
                    userCode: session.userCode, // Add this
                    userType: session.userType // Add this
                });

                console.log(`📜 Sent chat history to user ${userId} (${userType}: ${userCode})`);
            } else {
                // No active session
                socket.emit("userChatHistory", {
                    sessionId: null,
                    messages: [],
                    status: null,
                    agentId: null,
                    userCode: null,
                    userType: null
                });
            }
        } catch (err) {
            console.error("loadUserChatHistory error:", err);
            socket.emit("error", { message: "Failed to load chat history" });
        }
    });

    // User ends chat
    socket.on("userEndChat", async () => {
        try {
            // Find user's active session
            const session = await prisma.chatSession.findFirst({
                where: {
                    userId,
                    status: { in: ["OPEN", "ASSIGNED"] }
                }
            });

            if (session) {
                // Update chat session status
                const updatedSession = await prisma.chatSession.update({
                    where: { id: session.id },
                    data: {
                        status: "CLOSED",
                        updatedAt: new Date()
                    }
                });

                console.log(`🔚 User ended chat: ${session.id} (${userType}: ${userCode})`);

                // Notify user that chat ended
                socket.emit("chatEnded", {
                    chatId: session.id,
                    endedBy: "user",
                    message: "You have ended this chat"
                });

                // Notify staff that chat ended with user info
                if (session.agentId) {
                    io.to(`staff_${session.agentId}`).emit("chatEnded", {
                        chatId: session.id,
                        endedBy: "user",
                        message: `User ${userName} (${userType}) has ended the chat`,
                        userCode: userCode,
                        userType: userType
                    });

                    // Remove from staff's active chats
                    io.to(`staff_${session.agentId}`).emit("chatRemoved", {
                        chatId: session.id,
                        userCode: userCode,
                        userType: userType
                    });
                }

                // Leave the session room
                socket.leave(`session_${session.id}`);
            }
        } catch (err) {
            console.error("userEndChat error:", err);
            socket.emit("error", { message: "Failed to end chat" });
        }
    });

    // Handle user disconnect
    socket.on("disconnect", async () => {
        console.log(`🔴 User disconnected: ${userId} (${userType}: ${userCode})`);
        // You could update user presence here if needed
    });
}

module.exports = { handleUser };