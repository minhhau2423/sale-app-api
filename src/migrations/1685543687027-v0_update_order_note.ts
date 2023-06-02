import { MigrationInterface, QueryRunner } from "typeorm";

export class V0UpdateOrderNote1685543687027 implements MigrationInterface {
    name = 'V0UpdateOrderNote1685543687027'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`note\` varchar(500) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`note\``);
    }

}
