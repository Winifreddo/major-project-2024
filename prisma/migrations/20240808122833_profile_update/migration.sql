/*
  Warnings:

  - You are about to drop the column `profileId` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the `wishlist_items` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wishlists` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "wishlist_items" DROP CONSTRAINT "wishlist_items_wishlistId_fkey";

-- DropForeignKey
ALTER TABLE "wishlists" DROP CONSTRAINT "wishlists_profileId_fkey";

-- DropIndex
DROP INDEX "profiles_profileId_key";

-- AlterTable
ALTER TABLE "profiles" DROP COLUMN "profileId";

-- DropTable
DROP TABLE "wishlist_items";

-- DropTable
DROP TABLE "wishlists";
