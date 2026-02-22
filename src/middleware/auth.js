const jwt = require("jsonwebtoken");

// For Socket.IO authentication
exports.verifySocket = (socket, next) => {
  // console.log("verify socket",socket)
  try {
    const token = socket.handshake.auth?.token;

    if (!token) {
      return next(new Error("No token provided"));
    }

    const decoded = jwt.verify(token, process.env.CHAT_SECRET);
      console.log("decoded",decoded)
    // 🔥 Detect token type automatically
    if (decoded.userId) {
      // Chat User
      socket.user = {
        id: decoded.userId,
        type: decoded.type || "user",
        role: "USER",
        userName:decoded?.name,
        userEmail:decoded?.email,
        code : decoded?.code
      };
    } else if (decoded.id) {
      // Staff/Admin
      socket.user = {
        id: decoded.id,
        type: "staff",
        role: decoded.role || "STAFF",
        permissions: decoded.permissions || []
      };
    } else {
      return next(new Error("Invalid token structure"));
    }

    next();
  } catch (err) {
    // console.log("Socket auth error:", err.message);
    next(new Error("Authentication error"));
  }
};

// For HTTP API authentication
exports.authenticateStaff = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.CHAT_SECRET);
    
    req.staff = {
      id: decoded.id,
      name: decoded.name,
      email: decoded.email,
      isSuperAdmin: decoded.isSuperAdmin || false,
      permissions: decoded.permissions || []
    };

    next();
  } catch (error) {
    console.error('Auth error:', error);
    res.status(401).json({ error: 'Invalid token' });
  }
};

exports.authenticateInternal = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token || token !== process.env.INTERNAL_API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  next();
};