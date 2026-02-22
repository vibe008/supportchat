const express = require('express');
const router = express.Router();
const prisma = require('../config/db');
const staffController = require("../controllers/staff.controller");

// Sync staff from main backend
router.post("/sync", staffController.syncStaff);

// Get staff status
router.get('/:staffId/status', async (req, res) => {
  try {
    const { staffId } = req.params;

    const presence = await prisma.staffPresence.findUnique({
      where: { staffId }
    });

    if (!presence) {
      return res.json({
        staffId,
        status: 'OFFLINE',
        lastSeen: null
      });
    }

    return res.json({
      staffId,
      status: presence.status,
      lastSeen: presence.lastSeen,
      socketId: presence.socketId
    });

  } catch (error) {
    console.error('Get staff status error:', error);
    return res.status(500).json({ error: 'Failed to get staff status' });
  }
});

// Get all online staff
router.get('/online', async (req, res) => {
  try {
    const onlineStaff = await prisma.staffPresence.findMany({
      where: {
        status: "ONLINE"
      },
    });

    // console.log("onlineStaff", onlineStaff);
    res.json(onlineStaff);
  } catch (error) {
    console.error('Get online staff error:', error);
    res.status(500).json({ error: 'Failed to get online staff' });
  }
});

// Staff logout - FIXED VERSION
router.post('/logout', async (req, res) => {
  try {
    // 🔐 Verify internal API key
    const authHeader = req.headers.authorization;
    
    // Fix: Check if authHeader exists and matches the Bearer token format
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Unauthorized - Missing or invalid authorization header' });
    }

    const token = authHeader.replace('Bearer ', '');
    
    // Fix: Compare the token with INTERNAL_API_KEY
    if (token !== process.env.INTERNAL_API_KEY) {
      return res.status(401).json({ error: 'Unauthorized - Invalid API key' });
    }

    const { staffId } = req.body;

    if (!staffId) {
      return res.status(400).json({ error: 'staffId is required' });
    }

    // Fix: Use Prisma instead of in-memory staffPresence
    const presence = await prisma.staffPresence.findUnique({
      where: { staffId }
    });

    if (!presence) {
      return res.json({
        success: true,
        message: 'Staff already offline'
      });
    }

    // 🔥 Update presence in database
    await prisma.staffPresence.update({
      where: { staffId },
      data: {
        status: 'OFFLINE',
        lastSeen: new Date(),
        socketId: null
      }
    });

    // 🔌 Disconnect socket if exists and io is available
    if (presence.socketId && global.io && global.io.sockets.sockets.get(presence.socketId)) {
      global.io.sockets.sockets.get(presence.socketId).disconnect(true);
    }

    // console.log(`✅ Staff ${staffId} set to OFFLINE`);

    res.json({
      success: true,
      message: 'Staff logged out from chat'
    });

  } catch (error) {
    console.error('Staff logout error:', error);
    res.status(500).json({ error: 'Failed to logout staff' });
  }
});

// Get assigned chats (mock for now)
router.get('/:staffId/assigned-chats', (req, res) => {
  try {
    const { staffId } = req.params;
    // This would come from your chat sessions store
    res.json([]);
  } catch (error) {
    console.error('Get assigned chats error:', error);
    res.status(500).json({ error: 'Failed to get assigned chats' });
  }
});

module.exports = router;