/*
  Warnings:

  - You are about to drop the `product_image_links` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product_images` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `productImageOne` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productImageTwo` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "product_image_links" DROP CONSTRAINT "product_image_links_productImagesId_fkey";

-- DropForeignKey
ALTER TABLE "product_images" DROP CONSTRAINT "product_images_productId_fkey";

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "productImageOne" TEXT NOT NULL,
ADD COLUMN     "productImageThree" TEXT,
ADD COLUMN     "productImageTwo" TEXT NOT NULL;

-- DropTable
DROP TABLE "product_image_links";

-- DropTable
DROP TABLE "product_images";
