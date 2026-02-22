const prisma = require("../config/db");

async function handleStaff(socket, io) {
  const staffId = socket.user.id;

  // Join personal room
  socket.join(`staff_${staffId}`);

  // Fetch assigned sessions
  const mySessions = await prisma.chatSession.findMany({
    where: {
      agentId: staffId,
      status: "ASSIGNED"
    },
    orderBy: {
      updatedAt: 'desc'
    }
  });

  // For each session, get last message, unread count, and user details
  const sessionsWithDetails = await Promise.all(
    mySessions.map(async (session) => {
      // Get the last message for this session
      const lastMessage = await prisma.message.findFirst({
        where: {
          chatSessionId: session.id
        },
        orderBy: {
          createdAt: 'desc'
        }
      });

      // Get the last time staff sent a message in this session
      const lastStaffMessage = await prisma.message.findFirst({
        where: {
          chatSessionId: session.id,
          senderType: "STAFF",
          senderId: staffId
        },
        orderBy: {
          createdAt: 'desc'
        }
      });

      // Count unread messages (user messages after staff's last message)
      const unreadCount = await prisma.message.count({
        where: {
          chatSessionId: session.id,
          senderType: "USER",
          createdAt: {
            gt: lastStaffMessage?.createdAt || new Date(0)
          }
        }
      });

      return {
        id: session.id,
        userId: session.userId,
        userName: session.userName || `User ${session.userId.slice(-4)}`,
        userEmail: session.userEmail,
        userCode: session.userCode || null, // Add this
        userType: session.userType || "user", // Add this
        status: session.status,
        assignedAt: session.assignedAt,
        lastMessage: lastMessage?.message || null,
        lastMessageType: lastMessage?.type || null,
        lastMessageTime: lastMessage?.createdAt || null,
        unreadCount: unreadCount,
        online: false
      };
    })
  );

  // Join session rooms
  mySessions.forEach(session => {
    socket.join(`session_${session.id}`);
  });

  socket.emit("myActiveChats", sessionsWithDetails);

  /* ======================
     STAFF SEND MESSAGE
  ====================== */
  socket.on("staffSendMessage", async (data) => {
    const { chatId, message, type = "TEXT" } = data;
          console.log("user send message",message)
    const newMessage = await prisma.message.create({
      data: {
        chatSessionId: chatId,
        senderId: staffId,
        senderType: "STAFF",
        message: message,
        type: type,
        status: "SENT"
      }
    });

    // Update session's updatedAt
    await prisma.chatSession.update({
      where: { id: chatId },
      data: { updatedAt: new Date() }
    });

    // Emit to all in session (including other staff if any)
    io.to(`session_${chatId}`).emit("receiveMessage", newMessage);
  });

  /* ======================
     LOAD MESSAGES (with user details)
  ====================== */
  socket.on("loadMessages", async ({ chatId }) => {
    try {
      const messages = await prisma.message.findMany({
        where: { chatSessionId: chatId },
        orderBy: { createdAt: "asc" }
      });

      // Get session details with user info
      const session = await prisma.chatSession.findUnique({
        where: { id: chatId },
        select: {
          id: true,
          userId: true,
          userName: true,
          userEmail: true,
          userCode: true,
          userType: true,
          status: true,
          assignedAt: true
        }
      });

      // When staff loads messages, we consider them as read
      await prisma.chatSession.update({
        where: { id: chatId },
        data: { updatedAt: new Date() }
      });

      // Send messages with session info including user details
      socket.emit("chatHistory", {
        messages,
        sessionInfo: {
          ...session,
          userCode: session?.userCode || null,
          userType: session?.userType || "user"
        }
      });

      // Update unread count
      socket.emit("unreadCountUpdated", {
        chatId,
        unreadCount: 0
      });
    } catch (err) {
      console.error("loadMessages error:", err);
    }
  });

  /* ======================
     MARK SESSION AS READ
  ====================== */
  socket.on("markAsRead", async ({ chatId }) => {
    try {
      await prisma.chatSession.update({
        where: { id: chatId },
        data: { updatedAt: new Date() }
      });

      socket.emit("unreadCountUpdated", {
        chatId,
        unreadCount: 0
      });
    } catch (err) {
      console.error("markAsRead error:", err);
    }
  });

  /* ======================
     STAFF END CHAT
  ====================== */
  socket.on("staffEndChat", async ({ chatId }) => {
    try {
      // Get session details before updating
      const session = await prisma.chatSession.findUnique({
        where: { id: chatId },
        select: {
          userCode: true,
          userType: true,
          userName: true
        }
      });

      // Update chat session status
      const updatedSession = await prisma.chatSession.update({
        where: { id: chatId },
        data: {
          status: "CLOSED",
          updatedAt: new Date()
        }
      });

      // console.log(`🔚 Staff ended chat: ${chatId} for user ${session?.userName} (${session?.userType}: ${session?.userCode})`);

      // Notify staff that chat ended
      socket.emit("chatEnded", {
        chatId,
        endedBy: "staff",
        message: "Chat has been ended by support agent",
        userCode: session?.userCode,
        userType: session?.userType
      });

      // Notify user that chat ended
      io.to(`session_${chatId}`).emit("chatEnded", {
        chatId,
        endedBy: "staff",
        message: "Support agent has ended this chat"
      });

      // Leave the session room
      socket.leave(`session_${chatId}`);

      // Remove from active chats list for all staff with user info
      io.to(`staff_${staffId}`).emit("chatRemoved", {
        chatId,
        userCode: session?.userCode,
        userType: session?.userType
      });

    } catch (err) {
      console.error("staffEndChat error:", err);
      socket.emit("error", { message: "Failed to end chat" });
    }
  });

  /* ======================
     GET USER DETAILS (optional helper)
  ====================== */
  socket.on("getUserDetails", async ({ chatId }) => {
    try {
      const session = await prisma.chatSession.findUnique({
        where: { id: chatId },
        select: {
          userCode: true,
          userType: true,
          userName: true,
          userEmail: true
        }
      });

      socket.emit("userDetails", {
        chatId,
        userCode: session?.userCode,
        userType: session?.userType,
        userName: session?.userName,
        userEmail: session?.userEmail
      });
    } catch (err) {
      console.error("getUserDetails error:", err);
    }
  });
}

module.exports = { handleStaff };