/*
  Warnings:

  - You are about to drop the `csi` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "csi";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "kalanjali" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "timendata" TEXT NOT NULL,
    "venue" TEXT NOT NULL,
    "eventdetail" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ecolution" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "timendata" TEXT NOT NULL,
    "venue" TEXT NOT NULL,
    "eventdetail" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "clickzclub" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "timendata" TEXT NOT NULL,
    "venue" TEXT NOT NULL,
    "eventdetail" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "stereoclub" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "timendata" TEXT NOT NULL,
    "venue" TEXT NOT NULL,
    "eventdetail" TEXT NOT NULL
);
