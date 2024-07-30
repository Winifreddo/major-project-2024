-- CreateTable
CREATE TABLE "style_inspo" (
    "id" SERIAL NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "imageUrl2" TEXT NOT NULL,
    "orderItemId" INTEGER NOT NULL,

    CONSTRAINT "style_inspo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "style_inspo_orderItemId_key" ON "style_inspo"("orderItemId");

-- AddForeignKey
ALTER TABLE "style_inspo" ADD CONSTRAINT "style_inspo_orderItemId_fkey" FOREIGN KEY ("orderItemId") REFERENCES "order_items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
