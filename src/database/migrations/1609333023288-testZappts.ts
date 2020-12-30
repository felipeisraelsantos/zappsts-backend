import {MigrationInterface, QueryRunner} from "typeorm";

export class testZappts1609333023288 implements MigrationInterface {
    name = 'testZappts1609333023288'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `letters` DROP FOREIGN KEY `fk_letters_users`");
        await queryRunner.query("DROP INDEX `fk_letters_users_idx` ON `letters`");
        await queryRunner.query("ALTER TABLE `letters` CHANGE `id` `id` int NOT NULL AUTO_INCREMENT");
        await queryRunner.query("ALTER TABLE `letters` CHANGE `content` `content` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `letters` CHANGE `sender` `sender` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `letters` CHANGE `receiver` `receiver` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `name`");
        await queryRunner.query("ALTER TABLE `users` ADD `name` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `last_name`");
        await queryRunner.query("ALTER TABLE `users` ADD `last_name` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `users` CHANGE `age` `age` int NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` CHANGE `age` `age` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `last_name`");
        await queryRunner.query("ALTER TABLE `users` ADD `last_name` varchar(45) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `name`");
        await queryRunner.query("ALTER TABLE `users` ADD `name` varchar(45) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `letters` CHANGE `receiver` `receiver` varchar(255) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `letters` CHANGE `sender` `sender` varchar(255) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `letters` CHANGE `content` `content` varchar(255) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `letters` CHANGE `id` `id` int UNSIGNED NOT NULL AUTO_INCREMENT");
        await queryRunner.query("CREATE INDEX `fk_letters_users_idx` ON `letters` (`users_id`)");
        await queryRunner.query("ALTER TABLE `letters` ADD CONSTRAINT `fk_letters_users` FOREIGN KEY (`users_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
