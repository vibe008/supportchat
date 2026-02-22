const prisma = require("../config/db");

// Existing getHistory
exports.getHistory = async (req, res) => {
  try {
    const { sessionId } = req.params;

    const messages = await prisma.message.findMany({
      where: { chatSessionId: sessionId },
      orderBy: { createdAt: "asc" }
    });

    res.json(messages);
  } catch (err) {
    console.error('Get history error:', err);
    res.status(500).json({ message: "Error fetching history" });
  }
};

// Get unassigned chats for staff
exports.getUnassignedChats = async (req, res) => {
  try {
    const unassignedChats = await prisma.chatSession.findMany({
      where: {
        status: 'OPEN',
        agentId: null
      },
      include: {
        messages: {
          orderBy: { createdAt: 'desc' },
          take: 1
        }
      },
      orderBy: { createdAt: 'asc' }
    });

    res.json(unassignedChats);
  } catch (err) {
    console.error('Get unassigned chats error:', err);
    res.status(500).json({ message: "Error fetching unassigned chats" });
  }
};

// Get online staff
exports.getOnlineStaff = async (req, res) => {
  try {
    const onlineStaff = await prisma.staffPresence.findMany({
      where: {
        status: { in: ['ONLINE', 'AWAY', 'BUSY'] }
      },
      select: {
        staffId: true,
        name: true,
        email: true,
        status: true,
        lastSeen: true,
        isSuperAdmin: true,
        permissions: true
      }
    });

    res.json(onlineStaff);
  } catch (err) {
    console.error('Get online staff error:', err);
    res.status(500).json({ message: "Error fetching online staff" });
  }
};