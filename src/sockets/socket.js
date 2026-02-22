const { Server } = require("socket.io");
const { handleStaff } = require("./staff.socket");
const { handleUser } = require("./user.socket");
const { verifySocket } = require("../middleware/auth");

let io;

function initSocket(server) {
  io = new Server(server, {
    cors: { origin: "*" }
  });

  io.use(verifySocket);

  io.on("connection", (socket) => {
    console.log("🟢 Connected:", socket.user);

    if (socket.user.type === "smart") {
      handleUser(socket, io);
    }

    if (socket.user.type === "staff") {
      handleStaff(socket, io);
    }

    socket.on("disconnect", () => {
      console.log("🔴 Disconnected:", socket.id);
    });
  });
}

module.exports = { initSocket };