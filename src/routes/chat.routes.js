const express = require('express');
const router = express.Router();

// In-memory store for chats
const activeChats = new Map(); // chatId -> { userId, staffId, createdAt }
const unassignedChats = new Map(); // chatId -> { userId, sessionId, createdAt }

// Get unassigned chats
router.get('/unassigned', (req, res) => {
  try {
    const unassigned = Array.from(unassignedChats.entries())
      .map(([chatId, chat]) => ({
        chatId,
        userId: chat.userId,
        sessionId: chat.sessionId,
        createdAt: chat.createdAt,
        status: 'UNASSIGNED'
      }));

    res.json(unassigned);
  } catch (error) {
    console.error('Get unassigned chats error:', error);
    res.status(500).json({ error: 'Failed to get unassigned chats' });
  }
});

// Get online staff
router.get('/staff/online', (req, res) => {
  try {
    // This would be populated from your socket.io connections
    // For now, return empty array
    res.json([]);
  } catch (error) {
    console.error('Get online staff error:', error);
    res.status(500).json({ error: 'Failed to get online staff' });
  }
});


module.exports = router;