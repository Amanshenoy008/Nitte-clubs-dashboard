-- CreateTable
CREATE TABLE "authorcraft" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "timendata" DATETIME NOT NULL,
    "venue" TEXT NOT NULL,
    "eventdetail" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "aura" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "timendata" DATETIME NOT NULL,
    "venue" TEXT NOT NULL,
    "eventdetail" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "tallem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "timendata" DATETIME NOT NULL,
    "venue" TEXT NOT NULL,
    "eventdetail" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "csi" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "timendata" DATETIME NOT NULL,
    "venue" TEXT NOT NULL,
    "eventdetail" TEXT NOT NULL
);
