const express = require("express");
const router = express.Router();
const prisma = require("../config/db");

router.post("/chat/attach-ticket", async (req, res) => {
  const { chatSessionId, ticketId } = req.body;

  await prisma.chatSession.update({
    where: { id: chatSessionId },
    data: {
      ticketId,
      status: "TICKET_CREATED",
    },
  });

  res.json({ success: true });
});

router.post("/chat/update-status", async (req, res) => {
  const { chatSessionId, ticketStatus } = req.body;

  let chatStatus = "OPEN";

  if (ticketStatus === "ASSIGNED") chatStatus = "IN_PROGRESS";
  if (ticketStatus === "CLOSED") chatStatus = "CLOSED";

  await prisma.chatSession.update({
    where: { id: chatSessionId },
    data: { status: chatStatus },
  });

  res.json({ success: true });
});

router.get("/chat/:id", async (req, res) => {
  const session = await prisma.chatSession.findUnique({
    where: { id: req.params.id },
    include: {
      messages: true,
    //   user: true
    }
  });

  if (!session) {
    return res.status(404).json({ message: "Chat not found" });
  }

  res.json(session);
});

module.exports = router;