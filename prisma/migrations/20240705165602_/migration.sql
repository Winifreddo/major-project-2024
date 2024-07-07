/*
  Warnings:

  - You are about to drop the `addresses` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "addresses" DROP CONSTRAINT "addresses_profileId_fkey";

-- AlterTable
ALTER TABLE "profiles" ADD COLUMN     "houseNumber" TEXT,
ADD COLUMN     "postCode" TEXT,
ADD COLUMN     "streetName" TEXT,
ADD COLUMN     "town" TEXT;

-- DropTable
DROP TABLE "addresses";
