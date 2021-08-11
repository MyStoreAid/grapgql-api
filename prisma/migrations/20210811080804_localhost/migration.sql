/*
  Warnings:

  - Added the required column `last_modified` to the `Brand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `server_created_at` to the `Brand` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Brand" ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "last_modified" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "server_created_at" DOUBLE PRECISION NOT NULL;

-- CreateTable
CREATE TABLE "Business_Categories" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Internal_Business_Categories" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Manufacturers" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "server_created_at" DOUBLE PRECISION NOT NULL,
    "last_modified" DOUBLE PRECISION NOT NULL,
    "isTemporary" BOOLEAN NOT NULL DEFAULT false,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Measurement_Units" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "server_created_at" DOUBLE PRECISION NOT NULL,
    "last_modified" DOUBLE PRECISION NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product_Categories" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "parentId" UUID NOT NULL,
    "created_at" DOUBLE PRECISION NOT NULL,
    "updated_at" DOUBLE PRECISION NOT NULL,
    "server_created_at" DOUBLE PRECISION NOT NULL,
    "last_modified" DOUBLE PRECISION NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "measurementUnitId" UUID,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product_Categories" ADD FOREIGN KEY ("measurementUnitId") REFERENCES "Measurement_Units"("id") ON DELETE SET NULL ON UPDATE CASCADE;
