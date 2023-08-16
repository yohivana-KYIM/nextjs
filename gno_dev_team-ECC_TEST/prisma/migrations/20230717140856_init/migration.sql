-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `firstname` VARCHAR(191) NULL,
    `lastname` VARCHAR(191) NULL,
    `type` ENUM('faithful', 'prayer_group', 'parish', 'diocese', 'Seat', 'admin') NULL,
    `avatar` VARCHAR(191) NULL,
    `password` VARCHAR(255) NULL,
    `validated` BOOLEAN NULL DEFAULT false,
    `blocked` BOOLEAN NULL DEFAULT true,
    `parish_official` BOOLEAN NULL DEFAULT false,
    `hide_email` BOOLEAN NULL DEFAULT false,
    `hide_phone` BOOLEAN NULL DEFAULT false,
    `website` VARCHAR(191) NULL,
    `facebook_url` VARCHAR(191) NULL,
    `twitter_url` VARCHAR(191) NULL,
    `zoneId` INTEGER NULL,
    `continentId` INTEGER NULL,
    `countryId` INTEGER NULL,
    `cityId` INTEGER NULL,
    `departmentId` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_zoneId_key`(`zoneId`),
    UNIQUE INDEX `User_continentId_key`(`continentId`),
    UNIQUE INDEX `User_countryId_key`(`countryId`),
    UNIQUE INDEX `User_cityId_key`(`cityId`),
    UNIQUE INDEX `User_departmentId_key`(`departmentId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserFaithful` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `birthday` DATE NOT NULL,
    `sex` ENUM('male', 'female') NOT NULL,
    `diploma_certification` VARCHAR(191) NOT NULL,
    `speaking_language` VARCHAR(191) NOT NULL,
    `phone_number` BIGINT UNSIGNED NOT NULL,
    `other_activities` LONGTEXT NOT NULL,
    `search_partner` LONGTEXT NOT NULL,
    `can_give_lesson` ENUM('Beginner', 'Confirmed', 'Expert') NOT NULL,
    `userId` INTEGER NOT NULL,
    `gradeId` INTEGER NOT NULL,
    `FunctionId` INTEGER NOT NULL,
    `ministryId` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `UserFaithful_userId_key`(`userId`),
    UNIQUE INDEX `UserFaithful_gradeId_key`(`gradeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Zone` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_fr` VARCHAR(255) NOT NULL,
    `name_en` VARCHAR(255) NOT NULL,
    `name_es` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Zone_name_fr_key`(`name_fr`),
    UNIQUE INDEX `Zone_name_en_key`(`name_en`),
    UNIQUE INDEX `Zone_name_es_key`(`name_es`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Continent` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_fr` VARCHAR(255) NOT NULL,
    `name_en` VARCHAR(255) NOT NULL,
    `name_es` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Continent_name_fr_key`(`name_fr`),
    UNIQUE INDEX `Continent_name_en_key`(`name_en`),
    UNIQUE INDEX `Continent_name_es_key`(`name_es`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Country` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_fr` VARCHAR(255) NOT NULL,
    `name_en` VARCHAR(255) NOT NULL,
    `name_es` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `continentId` INTEGER NOT NULL,

    UNIQUE INDEX `Country_name_fr_key`(`name_fr`),
    UNIQUE INDEX `Country_name_en_key`(`name_en`),
    UNIQUE INDEX `Country_name_es_key`(`name_es`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `City` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_fr` VARCHAR(255) NOT NULL,
    `name_en` VARCHAR(255) NOT NULL,
    `name_es` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `countryId` INTEGER NOT NULL,

    UNIQUE INDEX `City_name_fr_key`(`name_fr`),
    UNIQUE INDEX `City_name_en_key`(`name_en`),
    UNIQUE INDEX `City_name_es_key`(`name_es`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Department` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_fr` VARCHAR(255) NOT NULL,
    `name_en` VARCHAR(255) NOT NULL,
    `name_es` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Department_name_fr_key`(`name_fr`),
    UNIQUE INDEX `Department_name_en_key`(`name_en`),
    UNIQUE INDEX `Department_name_es_key`(`name_es`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GrandeEcc` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_fr` VARCHAR(255) NOT NULL,
    `name_en` VARCHAR(255) NOT NULL,
    `name_es` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `GrandeEcc_name_fr_key`(`name_fr`),
    UNIQUE INDEX `GrandeEcc_name_en_key`(`name_en`),
    UNIQUE INDEX `GrandeEcc_name_es_key`(`name_es`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FunctionEcc` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_fr` VARCHAR(255) NOT NULL,
    `name_en` VARCHAR(255) NOT NULL,
    `name_es` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `FunctionEcc_name_fr_key`(`name_fr`),
    UNIQUE INDEX `FunctionEcc_name_en_key`(`name_en`),
    UNIQUE INDEX `FunctionEcc_name_es_key`(`name_es`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ministry` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_fr` VARCHAR(255) NOT NULL,
    `name_en` VARCHAR(255) NOT NULL,
    `name_es` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Ministry_name_fr_key`(`name_fr`),
    UNIQUE INDEX `Ministry_name_en_key`(`name_en`),
    UNIQUE INDEX `Ministry_name_es_key`(`name_es`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Instrument` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_fr` VARCHAR(255) NOT NULL,
    `name_en` VARCHAR(255) NOT NULL,
    `name_es` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Instrument_name_fr_key`(`name_fr`),
    UNIQUE INDEX `Instrument_name_en_key`(`name_en`),
    UNIQUE INDEX `Instrument_name_es_key`(`name_es`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DimensionEcc` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `value` BIGINT UNSIGNED NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Announcement` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `content` VARCHAR(191) NOT NULL,
    `authorId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_zoneId_fkey` FOREIGN KEY (`zoneId`) REFERENCES `Zone`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_continentId_fkey` FOREIGN KEY (`continentId`) REFERENCES `Continent`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_countryId_fkey` FOREIGN KEY (`countryId`) REFERENCES `Country`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_cityId_fkey` FOREIGN KEY (`cityId`) REFERENCES `City`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `Department`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserFaithful` ADD CONSTRAINT `UserFaithful_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserFaithful` ADD CONSTRAINT `UserFaithful_gradeId_fkey` FOREIGN KEY (`gradeId`) REFERENCES `GrandeEcc`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserFaithful` ADD CONSTRAINT `UserFaithful_FunctionId_fkey` FOREIGN KEY (`FunctionId`) REFERENCES `FunctionEcc`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserFaithful` ADD CONSTRAINT `UserFaithful_ministryId_fkey` FOREIGN KEY (`ministryId`) REFERENCES `Ministry`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Country` ADD CONSTRAINT `Country_continentId_fkey` FOREIGN KEY (`continentId`) REFERENCES `Continent`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `City` ADD CONSTRAINT `City_countryId_fkey` FOREIGN KEY (`countryId`) REFERENCES `Country`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Announcement` ADD CONSTRAINT `Announcement_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
