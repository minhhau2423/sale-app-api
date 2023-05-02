import { MigrationInterface, QueryRunner } from "typeorm";

export class V0ChangeNullable1683048664329 implements MigrationInterface {
    name = 'V0ChangeNullable1683048664329'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`testCol\``);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`phoneNumber\` \`phoneNumber\` varchar(15) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`phoneNumber\` \`phoneNumber\` varchar(15) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`phoneNumber\` \`phoneNumber\` varchar(15) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`phoneNumber\` \`phoneNumber\` varchar(15) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`testCol\` tinyint NOT NULL DEFAULT '1'`);
    }

}
