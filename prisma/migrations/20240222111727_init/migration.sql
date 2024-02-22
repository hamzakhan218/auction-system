-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_auctionId_fkey";

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "auctionId" DROP NOT NULL,
ALTER COLUMN "auctionId" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_auctionId_fkey" FOREIGN KEY ("auctionId") REFERENCES "Auction"("id") ON DELETE SET NULL ON UPDATE CASCADE;
