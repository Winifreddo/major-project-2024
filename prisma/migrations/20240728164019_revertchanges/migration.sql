/*
  Warnings:

  - You are about to drop the `_OrderItemToStyleInspo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `style_inspo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_OrderItemToStyleInspo" DROP CONSTRAINT "_OrderItemToStyleInspo_A_fkey";

-- DropForeignKey
ALTER TABLE "_OrderItemToStyleInspo" DROP CONSTRAINT "_OrderItemToStyleInspo_B_fkey";

-- DropTable
DROP TABLE "_OrderItemToStyleInspo";

-- DropTable
DROP TABLE "style_inspo";
