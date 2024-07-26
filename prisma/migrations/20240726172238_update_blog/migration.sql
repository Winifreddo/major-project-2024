/*
  Warnings:

  - You are about to drop the column `imageUrl4` on the `blogs` table. All the data in the column will be lost.
  - Added the required column `intro` to the `blogs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "blogs" DROP COLUMN "imageUrl4",
ADD COLUMN     "content3" TEXT,
ADD COLUMN     "intro" TEXT NOT NULL;
