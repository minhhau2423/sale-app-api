import { MigrationInterface, QueryRunner } from "typeorm";

export class V0Test1683046063426 implements MigrationInterface {
    name = 'V0Test1683046063426'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`category\` ADD \`istest\` tinyint NOT NULL DEFAULT 1`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`istest\``);
    }

}
