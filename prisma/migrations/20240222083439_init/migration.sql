/*
  Warnings:

  - Changed the type of `registrationDate` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userType` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "USERTYPE" AS ENUM ('ADMIN', 'SELLER', 'BUYER');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "registrationDate",
ADD COLUMN     "registrationDate" TIMESTAMP(3) NOT NULL,
DROP COLUMN "userType",
ADD COLUMN     "userType" "USERTYPE" NOT NULL;
