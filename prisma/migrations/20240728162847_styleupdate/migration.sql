/*
  Warnings:

  - You are about to drop the column `orderId` on the `style_inspo` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "style_inspo" DROP CONSTRAINT "style_inspo_orderId_fkey";

-- AlterTable
ALTER TABLE "style_inspo" DROP COLUMN "orderId";

-- CreateTable
CREATE TABLE "_OrderItemToStyleInspo" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_OrderItemToStyleInspo_AB_unique" ON "_OrderItemToStyleInspo"("A", "B");

-- CreateIndex
CREATE INDEX "_OrderItemToStyleInspo_B_index" ON "_OrderItemToStyleInspo"("B");

-- AddForeignKey
ALTER TABLE "_OrderItemToStyleInspo" ADD CONSTRAINT "_OrderItemToStyleInspo_A_fkey" FOREIGN KEY ("A") REFERENCES "order_items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrderItemToStyleInspo" ADD CONSTRAINT "_OrderItemToStyleInspo_B_fkey" FOREIGN KEY ("B") REFERENCES "style_inspo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
