import {MigrationInterface, QueryRunner} from "typeorm";

export class BasicAuthenticationImplementation1586557455478 implements MigrationInterface {
    name = 'BasicAuthenticationImplementation1586557455478'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `role` (`ID_Role` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`ID_Role`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `user` (`ID_User` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `code` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `organizationId` int NULL, `roleId` int NULL, PRIMARY KEY (`ID_User`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `organization` (`ID_Organization` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`ID_Organization`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_dfda472c0af7812401e592b6a61` FOREIGN KEY (`organizationId`) REFERENCES `organization`(`ID_Organization`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_c28e52f758e7bbc53828db92194` FOREIGN KEY (`roleId`) REFERENCES `role`(`ID_Role`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_c28e52f758e7bbc53828db92194`", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_dfda472c0af7812401e592b6a61`", undefined);
        await queryRunner.query("DROP TABLE `organization`", undefined);
        await queryRunner.query("DROP TABLE `user`", undefined);
        await queryRunner.query("DROP TABLE `role`", undefined);
    }

}
