/*
  Warnings:

  - The primary key for the `users_branches` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `id` on table `users_branches` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "users_branches" DROP CONSTRAINT "users_branches_pkey",
ALTER COLUMN "id" SET NOT NULL,
ADD PRIMARY KEY ("id");
