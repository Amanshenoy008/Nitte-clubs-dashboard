/*
  Warnings:

  - A unique constraint covering the columns `[clubname]` on the table `events` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "events_clubname_key" ON "events"("clubname");
