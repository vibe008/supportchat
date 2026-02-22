const prisma = require("../config/db");

async function assignChat(io, sessionId) {

  const staffList = await prisma.staffPresence.findMany({
    where: {
      status: "ONLINE",
      permissions: { has: "RESPOND_CHAT" }
    }
  });

  if (!staffList.length) {
    await prisma.chatQueue.create({
      data: { chatSessionId: sessionId }
    });
    return;
  }

  const staff = staffList[0];

  await prisma.chatSession.update({
    where: { id: sessionId },
    data: {
      agentId: staff.staffId,
      status: "ASSIGNED",
      assignedAt: new Date()
    }
  });

  if (staff.socketId) {
    io.to(staff.socketId).emit("new_chat_assigned", { sessionId });
  }
}

module.exports = { assignChat };