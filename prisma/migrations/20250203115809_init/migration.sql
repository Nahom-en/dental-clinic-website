/*
  Warnings:

  - Added the required column `date` to the `Books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstname` to the `Books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastname` to the `Books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `message` to the `Books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phonenumber` to the `Books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `books` ADD COLUMN `date` DATETIME(3) NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `firstname` VARCHAR(191) NOT NULL,
    ADD COLUMN `lastname` VARCHAR(191) NOT NULL,
    ADD COLUMN `message` VARCHAR(191) NOT NULL,
    ADD COLUMN `phonenumber` VARCHAR(191) NOT NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT;
