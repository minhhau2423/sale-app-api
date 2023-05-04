import { MigrationInterface, QueryRunner } from "typeorm";

export class V0ChangeUrl2uri1683216193248 implements MigrationInterface {
    name = 'V0ChangeUrl2uri1683216193248'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`avatarUrl\` \`avatarUri\` varchar(500) NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` CHANGE \`imageUrl\` \`imageUri\` varchar(500) NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`imageUrl\` \`imageUri\` varchar(500) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`imageUri\` \`imageUrl\` varchar(500) NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` CHANGE \`imageUri\` \`imageUrl\` varchar(500) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`avatarUri\` \`avatarUrl\` varchar(500) NULL`);
    }

}
