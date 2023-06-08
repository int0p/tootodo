/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Todo" (
    "uid" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Memo" (
    "uid" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,
    "isTodo" BOOLEAN NOT NULL DEFAULT false,
    "isAsk" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Memo_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "studyRecord" (
    "uid" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "todo_title" TEXT NOT NULL,
    "todo_id" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "studyMinutes" INTEGER NOT NULL,

    CONSTRAINT "studyRecord_pkey" PRIMARY KEY ("uid")
);
