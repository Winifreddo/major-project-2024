/*
  Warnings:

  - You are about to drop the column `created_at` on the `carts` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `carts` table. All the data in the column will be lost.
  - You are about to drop the column `profileId` on the `carts` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `carts` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `wishlistId` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "carts" DROP CONSTRAINT "carts_productId_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_wishlistId_fkey";

-- DropIndex
DROP INDEX "carts_productId_key";

-- AlterTable
ALTER TABLE "carts" DROP COLUMN "created_at",
DROP COLUMN "productId",
DROP COLUMN "profileId",
DROP COLUMN "updated_at";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "productId",
DROP COLUMN "quantity",
DROP COLUMN "updated_at",
DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "profiles" DROP COLUMN "address",
DROP COLUMN "wishlistId";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "updated_at";

-- CreateTable
CREATE TABLE "wishlist_items" (
    "id" SERIAL NOT NULL,
    "wishlistId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "wishlist_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_items" (
    "id" SERIAL NOT NULL,
    "orderId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "order_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "addresses" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "houseNumber" TEXT NOT NULL,
    "streetName" TEXT NOT NULL,
    "postCode" TEXT NOT NULL,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cart_items" (
    "id" SERIAL NOT NULL,
    "cartId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "cart_items_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "wishlist_items_wishlistId_key" ON "wishlist_items"("wishlistId");

-- CreateIndex
CREATE UNIQUE INDEX "addresses_profileId_key" ON "addresses"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "cart_items_cartId_key" ON "cart_items"("cartId");

-- AddForeignKey
ALTER TABLE "wishlist_items" ADD CONSTRAINT "wishlist_items_wishlistId_fkey" FOREIGN KEY ("wishlistId") REFERENCES "wishlists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart_items" ADD CONSTRAINT "cart_items_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "carts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
