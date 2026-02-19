/*
  Warnings:

  - You are about to drop the `Progress` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `creatorId` on the `Lesson` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Progress_userId_lessonId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Progress";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Lesson" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "fileUrl" TEXT NOT NULL,
    "fileType" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "learningPathId" INTEGER NOT NULL,
    CONSTRAINT "Lesson_learningPathId_fkey" FOREIGN KEY ("learningPathId") REFERENCES "LearningPath" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Lesson" ("createdAt", "description", "fileType", "fileUrl", "id", "learningPathId", "order", "published", "title", "updatedAt") SELECT "createdAt", "description", "fileType", "fileUrl", "id", "learningPathId", "order", "published", "title", "updatedAt" FROM "Lesson";
DROP TABLE "Lesson";
ALTER TABLE "new_Lesson" RENAME TO "Lesson";
CREATE UNIQUE INDEX "Lesson_learningPathId_order_key" ON "Lesson"("learningPathId", "order");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
