import {MigrationInterface, QueryRunner} from "typeorm";

export class AddEvent1586563263456 implements MigrationInterface {
    name = 'AddEvent1586563263456'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `event` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `population` varchar(255) NOT NULL, `dateInit` datetime NOT NULL, `dateEnd` datetime NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `event_users_user` (`eventId` int NOT NULL, `userIDUser` int NOT NULL, INDEX `IDX_ddfe947d856e921a02d7ab2369` (`eventId`), INDEX `IDX_07c976b15e25d0a8008f78f38f` (`userIDUser`), PRIMARY KEY (`eventId`, `userIDUser`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `event_users_user` ADD CONSTRAINT `FK_ddfe947d856e921a02d7ab2369e` FOREIGN KEY (`eventId`) REFERENCES `event`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `event_users_user` ADD CONSTRAINT `FK_07c976b15e25d0a8008f78f38f6` FOREIGN KEY (`userIDUser`) REFERENCES `user`(`ID_User`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `event_users_user` DROP FOREIGN KEY `FK_07c976b15e25d0a8008f78f38f6`", undefined);
        await queryRunner.query("ALTER TABLE `event_users_user` DROP FOREIGN KEY `FK_ddfe947d856e921a02d7ab2369e`", undefined);
        await queryRunner.query("DROP INDEX `IDX_07c976b15e25d0a8008f78f38f` ON `event_users_user`", undefined);
        await queryRunner.query("DROP INDEX `IDX_ddfe947d856e921a02d7ab2369` ON `event_users_user`", undefined);
        await queryRunner.query("DROP TABLE `event_users_user`", undefined);
        await queryRunner.query("DROP TABLE `event`", undefined);
    }

}
