/*
  Warnings:

  - Added the required column `last_modified` to the `Brand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `server_created_at` to the `Brand` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Brand" ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "last_modified" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "server_created_at" DOUBLE PRECISION NOT NULL;
