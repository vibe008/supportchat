-- AlterTable
ALTER TABLE "ChatSession" ADD COLUMN     "userCode" TEXT,
ADD COLUMN     "userType" TEXT DEFAULT 'user';
