// const { Server } = require("socket.io");
// const jwt = require("jsonwebtoken");

// let io;
// const onlineUsers = new Map();      // userId -> { socketId, lastSeen }
// const onlineStaff = new Map();      // staffId -> { socketId, name, permissions, status, lastSeen }
// const activeChats = new Map();      // chatId -> { userId, staffId, createdAt, lastMessageAt }
// const userSessions = new Map();     // sessionId -> { userId, chatId }


// // console.log("✅ Online Users:");
// // onlineUsers.forEach((user, userId) => {
// //   console.log({ userId, socketId: user.socketId, lastSeen: user.lastSeen });
// // });

// // console.log("📋 Active Chats:");
// // activeChats.forEach((chat, chatId) => {
// //   console.log({
// //     chatId,
// //     userId: chat.userId,
// //     staffId: chat.staffId,
// //     lastMessageAt: chat.lastMessageAt,
// //     messageCount: chat.messages?.length || 0
// //   });
// // });
// // Export stores for API routes
// module.exports.stores = {
//   onlineUsers,
//   onlineStaff,
//   activeChats,
//   userSessions
// };

// function initSocket(server) {
//   io = new Server(server, {
//     cors: {
//       origin: "*",
//       methods: ["GET", "POST"],
//       credentials: true
//     },
//     connectionStateRecovery: {
//       maxDisconnectionDuration: 2 * 60 * 1000, // 2 minutes
//     }
//   });

//   // =========================
//   // 🔐 AUTH MIDDLEWARE
//   // =========================
//   io.use((socket, next) => {
//     try {
//       const token = socket.handshake.query?.token || socket.handshake.auth?.token;

//       if (!token) {
//         return next(new Error("No token provided"));
//       }

//       const decoded = jwt.verify(token, process.env.CHAT_SECRET);

//       // Store user info in socket
//       socket.userId = decoded.userId || decoded.id;
//       socket.userType = decoded.role === "SUPPORT" || decoded.role === "SUPERADMIN" ? "staff" : "user";
//       socket.userName = decoded.name || decoded.email || 'User';
//       socket.permissions = decoded.permissions || [];
//       socket.departmentId = decoded.departmentId;
//       socket.subDepartmentId = decoded.subDepartmentId;
//       socket.isSuperAdmin = decoded.isSuperAdmin || false;

//       // console.log(`✅ Auth successful for ${socket.userType}:`, {
//       //   id: socket.userId,
//       //   name: socket.userName,
//       //   permissions: socket.permissions
//       // });

//       next();
//     } catch (err) {
//       console.log("❌ JWT ERROR:", err.message);
//       next(new Error("Authentication error"));
//     }
//   });

//   // =========================
//   // 🔌 MAIN CONNECTION HANDLER
//   // =========================
//   io.on("connection", (socket) => {
//     // console.log("\n🔌 Socket Connected:", socket.id);
//     // console.log("📋 UserType:", socket.userType);
//     // console.log("🆔 UserId:", socket.userId);

//     // =========================
//     // 👨‍💼 STAFF CONNECTION
//     // =========================
//     if (socket.userType === "staff") {
//       // Check if staff has RESPOND_CHAT permission
//       const canRespond = socket.isSuperAdmin || socket.permissions.includes('RESPOND_CHAT');
      
//       onlineStaff.set(socket.userId, {
//         socketId: socket.id,
//         name: socket.userName,
//         permissions: socket.permissions,
//         departmentId: socket.departmentId,
//         subDepartmentId: socket.subDepartmentId,
//         isSuperAdmin: socket.isSuperAdmin,
//         canRespond,
//         status: 'ONLINE',
//         lastSeen: new Date().toISOString(),
//         connectedAt: new Date().toISOString()
//       });

//       // console.log("👨‍💼 STAFF CONNECTED:", {
//       //   id: socket.userId,
//       //   name: socket.userName,
//       //   socketId: socket.id,
//       //   canRespond,
//       //   isSuperAdmin: socket.isSuperAdmin
//       // });

//       // Send list of unassigned chats to staff
//       const unassignedChats = Array.from(activeChats.entries())
//         .filter(([_, chat]) => !chat.staffId)
//         .map(([chatId, chat]) => ({
//           chatId,
//           userId: chat.userId,
//           sessionId: chat.sessionId,
//           createdAt: chat.createdAt,
//           lastMessageAt: chat.lastMessageAt,
//           messageCount: chat.messages?.length || 0
//         }));

//       if (unassignedChats.length > 0) {
//         socket.emit("unassignedChats", unassignedChats);
//         // console.log(`📨 Sent ${unassignedChats.length} unassigned chats to staff`);
//       }

//       // Broadcast staff online status to relevant users
//       socket.broadcast.emit("staffOnline", {
//         staffId: socket.userId,
//         name: socket.userName,
//         canRespond
//       });
//     }

//     // =========================
//     // 👤 USER CONNECTION
//     // =========================
//     if (socket.userType === "user") {
//       onlineUsers.set(socket.userId, {
//         socketId: socket.id,
//         lastSeen: new Date().toISOString(),
//         connectedAt: new Date().toISOString()
//       });

//       // console.log("👤 USER CONNECTED:", {
//       //   id: socket.userId,
//       //   socketId: socket.id
//       // });

//       // Check if user already has an active session
//       let existingSession = null;
//       for (const [sessionId, session] of userSessions.entries()) {
//         if (session.userId === socket.userId) {
//           const chat = activeChats.get(session.chatId);
//           if (chat && !chat.staffId) {
//             existingSession = { sessionId, ...session };
//             break;
//           }
//         }
//       }

//       let sessionId, chatId;

//       if (existingSession) {
//         // Reuse existing session
//         sessionId = existingSession.sessionId;
//         chatId = existingSession.chatId;
//         // console.log("🔄 Reusing existing session:", { sessionId, chatId });
//       } else {
//         // Create new session for user
//         sessionId = `${socket.userId}_${Date.now()}`;
//         chatId = `chat_${sessionId}`;
        
//         activeChats.set(chatId, {
//           userId: socket.userId,
//           staffId: null,
//           sessionId: sessionId,
//           createdAt: new Date().toISOString(),
//           lastMessageAt: null,
//           messages: [],
//           status: 'WAITING' // WAITING, ASSIGNED, IN_PROGRESS, CLOSED
//         });

//         userSessions.set(sessionId, {
//           userId: socket.userId,
//           chatId: chatId,
//           createdAt: new Date().toISOString()
//         });

//         // console.log("🆕 Created new session:", { sessionId, chatId });
//       }

//       socket.sessionId = sessionId;
//       socket.chatId = chatId;

//       // Notify all online staff about new unassigned chat
//       const newChat = {
//         chatId,
//         userId: socket.userId,
//         sessionId,
//         createdAt: activeChats.get(chatId).createdAt
//       };

//       io.emit("unassignedChats", [newChat]);
//       // console.log("📢 Notified staff about new unassigned chat");
//     }

//     // =========================
//     // 📩 SEND MESSAGE
//     // =========================
//     socket.on("sendMessage", (data = {}) => {
//       // console.log("\n📩 MESSAGE RECEIVED:", data);

//       const { message, sessionId, chatId: incomingChatId } = data;

//       if (!message) {
//         // console.log("❌ Missing message");
//         return;
//       }

//       let targetChatId = incomingChatId || socket.chatId;
//       let targetSessionId = sessionId || socket.sessionId;
//       let userId = socket.userId;

//       // Find or create chat
//       if (!targetChatId && targetSessionId) {
//         const session = userSessions.get(targetSessionId);
//         if (session) {
//           targetChatId = session.chatId;
//           userId = session.userId;
//         }
//       }

//       if (!targetChatId) {
//         console.log("❌ No chat ID found");
//         return;
//       }

//       const chat = activeChats.get(targetChatId);
      
//       // Update chat's last message time
//       if (chat) {
//         chat.lastMessageAt = new Date().toISOString();
//         if (!chat.messages) chat.messages = [];
//         chat.messages.push({
//           id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
//           content: message,
//           sender: socket.userType,
//           senderId: socket.userId,
//           senderName: socket.userName,
//           timestamp: new Date().toISOString()
//         });
//         activeChats.set(targetChatId, chat);
//       }

//       // =========================
//       // USER SENDING MESSAGE
//       // =========================
//       if (socket.userType === "user") {
//         // Echo back to user for confirmation
//         // socket.emit("receiveMessage", {
//         //   chatId: targetChatId,
//         //   message,
//         //   sender: "user",
//         //   senderId: socket.userId,
//         //   timestamp: new Date().toISOString(),
//         //   temp: true
//         // });

//         // Send to assigned staff if exists
//         if (chat && chat.staffId) {
//           const staff = onlineStaff.get(chat.staffId);
//           if (staff && staff.socketId) {
//             io.to(staff.socketId).emit("receiveMessage", {
//               chatId: targetChatId,
//               sessionId: targetSessionId,
//               message,
//               sender: "user",
//               userId: socket.userId,
//               userName: socket.userName,
//               timestamp: new Date().toISOString()
//             });
//             // console.log(`📨 Message forwarded to staff ${chat.staffId}`);
//           }
//         } else {
//           // No staff assigned, notify all available staff
//           // console.log("⏳ No staff assigned, notifying available staff");
          
//           const availableStaff = Array.from(onlineStaff.entries())
//             .filter(([_, s]) => s.canRespond && s.status === 'ONLINE')
//             .map(([id, s]) => s.socketId);

//           availableStaff.forEach(staffSocketId => {
//             io.to(staffSocketId).emit("newUserMessage", {
//               chatId: targetChatId,
//               sessionId: targetSessionId,
//               message,
//               userId: socket.userId,
//               userName: socket.userName,
//               timestamp: new Date().toISOString()
//             });
//           });
//         }
//       }

//       // =========================
//       // STAFF SENDING MESSAGE
//       // =========================
//       if (socket.userType === "staff") {
//         if (!chat) {
//           console.log("❌ Chat not found");
//           return;
//         }

//         // Check if staff has permission to respond
//         const canRespond = socket.isSuperAdmin || socket.permissions.includes('RESPOND_CHAT');
//         if (!canRespond) {
//           // console.log("❌ Staff doesn't have RESPOND_CHAT permission");
//           socket.emit("error", { message: "You don't have permission to respond to chats" });
//           return;
//         }

//         // Assign chat to staff if not already assigned
//         if (!chat.staffId) {
//           chat.staffId = socket.userId;
//           chat.status = 'ASSIGNED';
//           activeChats.set(targetChatId, chat);
          
//           // console.log(`✅ Chat ${targetChatId} assigned to staff ${socket.userId}`);
//         }

//         // Send to user
//         if (chat.userId) {
//           const user = onlineUsers.get(chat.userId);
//           if (user && user.socketId) {
//             io.to(user.socketId).emit("receiveMessage", {
//               chatId: targetChatId,
//               message,
//               sender: "staff",
//               staffId: socket.userId,
//               staffName: socket.userName,
//               timestamp: new Date().toISOString()
//             });
//             // console.log(`📨 Message sent to user ${chat.userId}`);
//           } else {
//             // User offline, store message for later
//             // console.log("📝 User offline, message stored");
//             socket.emit("userOffline", { chatId: targetChatId, userId: chat.userId });
//           }
//         }

//         // Confirm to staff
//         socket.emit("receiveMessage", {
//           chatId: targetChatId,
//           message,
//           sender: "staff",
//           staffId: socket.userId,
//           timestamp: new Date().toISOString(),
//           temp: true
//         });
//       }
//     });

//     // =========================
//     // 📎 SEND MEDIA
//     // =========================
//     socket.on("sendMedia", (data = {}) => {
//       // console.log("📎 MEDIA RECEIVED:", data);

//       const { name, type, size, sessionId } = data;
//       const message = `📎 ${name} (${(size / 1024).toFixed(2)} KB)`;

//       // Reuse send message logic
//       socket.emit("sendMessage", {
//         message,
//         sessionId,
//         media: { name, type, size }
//       });
//     });

//     // =========================
//     // ✍️ TYPING INDICATORS
//     // =========================
//     socket.on("typing", () => {
//       if (socket.userType === "user" && socket.chatId) {
//         const chat = activeChats.get(socket.chatId);
//         if (chat && chat.staffId) {
//           const staff = onlineStaff.get(chat.staffId);
//           if (staff && staff.socketId) {
//             io.to(staff.socketId).emit("userTyping", {
//               chatId: socket.chatId,
//               userId: socket.userId,
//               userName: socket.userName
//             });
//           }
//         }
//       }

//       if (socket.userType === "staff") {
//         // Find all chats this staff is involved in
//         const staffChats = Array.from(activeChats.entries())
//           .filter(([_, chat]) => chat.staffId === socket.userId);

//         staffChats.forEach(([chatId, chat]) => {
//           if (chat.userId) {
//             const user = onlineUsers.get(chat.userId);
//             if (user && user.socketId) {
//               io.to(user.socketId).emit("staffTyping", {
//                 chatId,
//                 staffId: socket.userId,
//                 staffName: socket.userName
//               });
//             }
//           }
//         });
//       }
//     });

//     socket.on("stopTyping", () => {
//       if (socket.userType === "user" && socket.chatId) {
//         const chat = activeChats.get(socket.chatId);
//         if (chat && chat.staffId) {
//           const staff = onlineStaff.get(chat.staffId);
//           if (staff && staff.socketId) {
//             io.to(staff.socketId).emit("userStopTyping", {
//               chatId: socket.chatId
//             });
//           }
//         }
//       }

//       if (socket.userType === "staff") {
//         const staffChats = Array.from(activeChats.entries())
//           .filter(([_, chat]) => chat.staffId === socket.userId);

//         staffChats.forEach(([chatId, chat]) => {
//           if (chat.userId) {
//             const user = onlineUsers.get(chat.userId);
//             if (user && user.socketId) {
//               io.to(user.socketId).emit("staffStopTyping", {
//                 chatId
//               });
//             }
//           }
//         });
//       }
//     });

//     // =========================
//     // 🎯 ASSIGN CHAT TO STAFF
//     // =========================
//     socket.on("assignChat", (data = {}) => {
//       // console.log("\n🎯 ASSIGN CHAT:", data);

//       const { sessionId, chatId: incomingChatId } = data;

//       if (socket.userType !== "staff") {
//         // console.log("❌ Only staff can assign chats");
//         socket.emit("error", { message: "Only staff can assign chats" });
//         return;
//       }

//       // Check if staff has permission
//       const canAssign = socket.isSuperAdmin || socket.permissions.includes('RESPOND_CHAT');
//       if (!canAssign) {
//         // console.log("❌ Staff doesn't have permission to assign chats");
//         socket.emit("error", { message: "You don't have permission to assign chats" });
//         return;
//       }

//       let chatId = incomingChatId;

//       // Find chat by sessionId if provided
//       if (sessionId) {
//         const session = userSessions.get(sessionId);
//         if (session) {
//           chatId = session.chatId;
//         }
//       }

//       if (!chatId) {
//         console.log("❌ No chat to assign");
//         socket.emit("error", { message: "Chat not found" });
//         return;
//       }

//       const chat = activeChats.get(chatId);
//       if (!chat) {
//         console.log("❌ Chat not found:", chatId);
//         socket.emit("error", { message: "Chat not found" });
//         return;
//       }

//       // Assign chat to this staff
//       chat.staffId = socket.userId;
//       chat.status = 'ASSIGNED';
//       chat.assignedAt = new Date().toISOString();
//       activeChats.set(chatId, chat);

//       // console.log("✅ Chat assigned:", {
//       //   chatId,
//       //   staffId: socket.userId,
//       //   staffName: socket.userName,
//       //   userId: chat.userId
//       // });

//       // Notify user that staff has joined
//       if (chat.userId) {
//         const user = onlineUsers.get(chat.userId);
//         if (user && user.socketId) {
//           io.to(user.socketId).emit("staffAssigned", {
//             chatId,
//             staffId: socket.userId,
//             staffName: socket.userName,
//             message: `${socket.userName} has joined the chat`
//           });
//           // console.log(`📢 Notified user ${chat.userId} about staff assignment`);
//         }
//       }

//       // Confirm to staff
//       socket.emit("chatAssigned", {
//         chatId,
//         userId: chat.userId,
//         sessionId,
//         message: "Chat assigned successfully"
//       });

//       // Remove from unassigned list
//       io.emit("chatAssigned", { chatId, staffId: socket.userId });
//     });

//     // =========================
//     // 📜 GET CHAT HISTORY
//     // =========================
//     socket.on("getChatHistory", (data = {}) => {
//       const { chatId, sessionId } = data;

//       let targetChatId = chatId;

//       if (sessionId) {
//         const session = userSessions.get(sessionId);
//         if (session) {
//           targetChatId = session.chatId;
//         }
//       }

//       if (!targetChatId) {
//         socket.emit("error", { message: "Chat not found" });
//         return;
//       }

//       const chat = activeChats.get(targetChatId);
//       if (chat && chat.messages) {
//         socket.emit("chatHistory", {
//           chatId: targetChatId,
//           messages: chat.messages,
//           assignedStaff: chat.staffId ? {
//             staffId: chat.staffId,
//             name: onlineStaff.get(chat.staffId)?.name
//           } : null
//         });
//       } else {
//         socket.emit("chatHistory", { chatId: targetChatId, messages: [] });
//       }
//     });

//     // =========================
//     // 🔍 SEARCH STAFF
//     // =========================
//     socket.on("searchAvailableStaff", () => {
//       if (socket.userType !== "user") return;

//       const availableStaff = Array.from(onlineStaff.entries())
//         .filter(([_, staff]) => staff.canRespond && staff.status === 'ONLINE')
//         .map(([id, staff]) => ({
//           staffId: id,
//           name: staff.name,
//           departmentId: staff.departmentId,
//           subDepartmentId: staff.subDepartmentId
//         }));

//       socket.emit("availableStaff", availableStaff);
//     });

//     // =========================
//     // ❌ DISCONNECT HANDLER
//     // =========================
//     socket.on("disconnect", () => {
//       // console.log("\n❌ Socket Disconnected:", socket.id);
//       // console.log("👤 User:", { id: socket.userId, type: socket.userType });

//       if (socket.userType === "staff") {
//         const staff = onlineStaff.get(socket.userId);
//         if (staff) {
//           staff.status = 'OFFLINE';
//           staff.lastSeen = new Date().toISOString();
//           onlineStaff.set(socket.userId, staff);
          
//           // console.log("👨‍💼 STAFF DISCONNECTED:", {
//           //   id: socket.userId,
//           //   name: staff.name
//           // });

//           // Notify users that staff went offline
//           socket.broadcast.emit("staffOffline", {
//             staffId: socket.userId,
//             name: staff.name
//           });
//         }
//       }

//       if (socket.userType === "user") {
//         onlineUsers.delete(socket.userId);
//         // console.log("👤 USER DISCONNECTED:", socket.userId);
        
//         // Update chat status but don't delete
//         if (socket.chatId) {
//           const chat = activeChats.get(socket.chatId);
//           if (chat) {
//             chat.userLastSeen = new Date().toISOString();
//             activeChats.set(socket.chatId, chat);

//             // Notify staff if assigned
//             if (chat.staffId) {
//               const staff = onlineStaff.get(chat.staffId);
//               if (staff && staff.socketId) {
//                 io.to(staff.socketId).emit("userOffline", {
//                   chatId: socket.chatId,
//                   userId: socket.userId,
//                   lastSeen: new Date().toISOString()
//                 });
//               }
//             }
//           }
//         }
//       }
//     });

//     // =========================
//     // PING/PONG FOR CONNECTION HEALTH
//     // =========================
//     socket.on("ping", (callback) => {
//       if (typeof callback === "function") {
//         callback({ pong: Date.now() });
//       }
//     });
//   });

//   // =========================
//   // PERIODIC CLEANUP
//   // =========================
//   setInterval(() => {
//     const now = Date.now();
//     const timeout = 5 * 60 * 1000; // 5 minutes

//     // Clean up stale user connections
//     for (const [userId, user] of onlineUsers.entries()) {
//       const lastSeen = new Date(user.lastSeen).getTime();
//       if (now - lastSeen > timeout) {
//         onlineUsers.delete(userId);
//         // console.log("🧹 Cleaned up stale user:", userId);
//       }
//     }

//     // Update staff heartbeat
//     for (const [staffId, staff] of onlineStaff.entries()) {
//       staff.lastSeen = new Date().toISOString();
//       onlineStaff.set(staffId, staff);
//     }
//   }, 60000); // Every minute

//   return io;
// }

// module.exports = { initSocket };