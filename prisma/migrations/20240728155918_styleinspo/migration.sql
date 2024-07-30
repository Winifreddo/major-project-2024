-- CreateTable
CREATE TABLE "style_inspo" (
    "id" SERIAL NOT NULL,
    "orderId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "imageUrl2" TEXT NOT NULL,

    CONSTRAINT "style_inspo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "style_inspo" ADD CONSTRAINT "style_inspo_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "order_items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
