/*
  Warnings:

  - You are about to drop the `tallem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "tallem";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "talleem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "timendata" TEXT NOT NULL,
    "venue" TEXT NOT NULL,
    "eventdetail" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "saca" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "timendata" TEXT NOT NULL,
    "venue" TEXT NOT NULL,
    "eventdetail" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "greymatter" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "timendata" TEXT NOT NULL,
    "venue" TEXT NOT NULL,
    "eventdetail" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "rachana" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "timendata" TEXT NOT NULL,
    "venue" TEXT NOT NULL,
    "eventdetail" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "hackerearthclub" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "timendata" TEXT NOT NULL,
    "venue" TEXT NOT NULL,
    "eventdetail" TEXT NOT NULL
);
