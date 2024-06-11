/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `product_images` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[productId]` on the table `product_images` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "product_images" DROP COLUMN "imageUrl";

-- CreateTable
CREATE TABLE "product_image_links" (
    "id" SERIAL NOT NULL,
    "productImagesId" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "product_image_links_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_image_links_productImagesId_key" ON "product_image_links"("productImagesId");

-- CreateIndex
CREATE UNIQUE INDEX "product_images_productId_key" ON "product_images"("productId");

-- AddForeignKey
ALTER TABLE "product_image_links" ADD CONSTRAINT "product_image_links_productImagesId_fkey" FOREIGN KEY ("productImagesId") REFERENCES "product_images"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
