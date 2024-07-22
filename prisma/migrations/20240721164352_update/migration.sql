/*
  Warnings:

  - You are about to drop the column `quantity` on the `cart_items` table. All the data in the column will be lost.
  - Added the required column `size` to the `cart_items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cart_items" DROP COLUMN "quantity",
ADD COLUMN     "size" TEXT NOT NULL;
