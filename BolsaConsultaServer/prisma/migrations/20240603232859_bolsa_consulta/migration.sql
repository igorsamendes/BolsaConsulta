-- CreateTable
CREATE TABLE `log_consulta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data_hora` DATETIME(3) NOT NULL,
    `ip` VARCHAR(191) NOT NULL,
    `ano` VARCHAR(191) NOT NULL,
    `mes` VARCHAR(191) NOT NULL,
    `municipio` VARCHAR(191) NOT NULL,
    `valor` INTEGER NOT NULL,
    `qtd_beneficiados` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
