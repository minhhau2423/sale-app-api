import { MigrationInterface, QueryRunner } from "typeorm";

export class V0RmTest1683046189938 implements MigrationInterface {
    name = 'V0RmTest1683046189938'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`istest\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`category\` ADD \`istest\` tinyint NOT NULL DEFAULT '1'`);
    }

}
