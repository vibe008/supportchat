const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const cors = require('cors');
require('dotenv').config();

const app = express();
const server = http.createServer(app);

// Middleware
app.use(cors({
  // origin: ["*"],
  origin: [
    "http://localhost:3000",
    "http://localhost:5173",
    "https://staffmanagement-superadmin.vercel.app",
    "https://www.mysmartpg.com"
  ],
  credentials: true
}));
app.use(express.json());

// Import routes
const staffRoutes = require('./routes/staff.routes');
const chatRoutes = require('./routes/chat.routes');
const mediaRoutes =  require('./routes/media.routes');
const internalRoutes =  require('./routes/internal.routes');
// Import socket handler
const { initSocket } = require('./sockets/socket');

// Routes
app.use('/api/staff', staffRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/', mediaRoutes);
app.use('/api/internal/', internalRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Initialize Socket.io
const io = initSocket(server);

const PORT = process.env.PORT || 5001;
server.listen(PORT, () => {
  console.log(`✅ Chat Service running on ${PORT}`);
});