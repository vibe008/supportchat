-- AlterTable
ALTER TABLE "ChatSession" ADD COLUMN     "assignedAt" TIMESTAMP(3),
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'SENT';

-- CreateTable
CREATE TABLE "StaffPresence" (
    "id" TEXT NOT NULL,
    "staffId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "socketId" TEXT,
    "status" TEXT NOT NULL DEFAULT 'OFFLINE',
    "lastSeen" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "permissions" TEXT[],
    "isSuperAdmin" BOOLEAN NOT NULL DEFAULT false,
    "departmentId" TEXT,
    "subDepartmentId" TEXT,

    CONSTRAINT "StaffPresence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatQueue" (
    "id" TEXT NOT NULL,
    "chatSessionId" TEXT NOT NULL,
    "priority" INTEGER NOT NULL DEFAULT 0,
    "assignedTo" TEXT,
    "status" TEXT NOT NULL DEFAULT 'WAITING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ChatQueue_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StaffPresence_staffId_key" ON "StaffPresence"("staffId");

-- CreateIndex
CREATE INDEX "StaffPresence_status_idx" ON "StaffPresence"("status");

-- CreateIndex
CREATE INDEX "StaffPresence_staffId_idx" ON "StaffPresence"("staffId");

-- CreateIndex
CREATE UNIQUE INDEX "ChatQueue_chatSessionId_key" ON "ChatQueue"("chatSessionId");

-- AddForeignKey
ALTER TABLE "ChatQueue" ADD CONSTRAINT "ChatQueue_chatSessionId_fkey" FOREIGN KEY ("chatSessionId") REFERENCES "ChatSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
