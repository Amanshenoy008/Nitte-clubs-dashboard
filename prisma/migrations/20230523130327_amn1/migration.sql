-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_aura" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "timendata" TEXT NOT NULL,
    "venue" TEXT NOT NULL,
    "eventdetail" TEXT NOT NULL
);
INSERT INTO "new_aura" ("eventdetail", "id", "timendata", "title", "venue") SELECT "eventdetail", "id", "timendata", "title", "venue" FROM "aura";
DROP TABLE "aura";
ALTER TABLE "new_aura" RENAME TO "aura";
CREATE TABLE "new_tallem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "timendata" TEXT NOT NULL,
    "venue" TEXT NOT NULL,
    "eventdetail" TEXT NOT NULL
);
INSERT INTO "new_tallem" ("eventdetail", "id", "timendata", "title", "venue") SELECT "eventdetail", "id", "timendata", "title", "venue" FROM "tallem";
DROP TABLE "tallem";
ALTER TABLE "new_tallem" RENAME TO "tallem";
CREATE TABLE "new_csi" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "timendata" TEXT NOT NULL,
    "venue" TEXT NOT NULL,
    "eventdetail" TEXT NOT NULL
);
INSERT INTO "new_csi" ("eventdetail", "id", "timendata", "title", "venue") SELECT "eventdetail", "id", "timendata", "title", "venue" FROM "csi";
DROP TABLE "csi";
ALTER TABLE "new_csi" RENAME TO "csi";
CREATE TABLE "new_authorcraft" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "timendata" TEXT NOT NULL,
    "venue" TEXT NOT NULL,
    "eventdetail" TEXT NOT NULL
);
INSERT INTO "new_authorcraft" ("eventdetail", "id", "timendata", "title", "venue") SELECT "eventdetail", "id", "timendata", "title", "venue" FROM "authorcraft";
DROP TABLE "authorcraft";
ALTER TABLE "new_authorcraft" RENAME TO "authorcraft";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
