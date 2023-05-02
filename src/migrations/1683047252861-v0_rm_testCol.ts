import { MigrationInterface, QueryRunner } from "typeorm";

export class V0RmTestCol1683047252861 implements MigrationInterface {
    name = 'V0RmTestCol1683047252861'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`testCol\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`testCol\` tinyint NOT NULL DEFAULT 1`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`testCol\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`testCol\` tinyint NOT NULL DEFAULT '1'`);
    }

}
