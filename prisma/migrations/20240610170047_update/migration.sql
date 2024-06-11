/*
  Warnings:

  - You are about to drop the column `authorId` on the `products` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[productId]` on the table `carts` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[profileId]` on the table `orders` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cartId]` on the table `products` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cartId]` on the table `profiles` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "authorId",
ADD COLUMN     "cartId" INTEGER;

-- AlterTable
ALTER TABLE "profiles" ADD COLUMN     "cartId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "carts_productId_key" ON "carts"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "orders_profileId_key" ON "orders"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "products_cartId_key" ON "products"("cartId");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_cartId_key" ON "profiles"("cartId");

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "carts"("id") ON DELETE SET NULL ON UPDATE CASCADE;
