-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "dscription" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
