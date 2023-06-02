import { MigrationInterface, QueryRunner } from "typeorm";

export class V0UpdateOrderRl1685557557042 implements MigrationInterface {
    name = 'V0UpdateOrderRl1685557557042'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order_products_product\` DROP FOREIGN KEY \`FK_d6c66c08b9c7e84a1b657797dff\``);
        await queryRunner.query(`ALTER TABLE \`order_products_product\` ADD CONSTRAINT \`FK_d6c66c08b9c7e84a1b657797dff\` FOREIGN KEY (\`productId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order_products_product\` DROP FOREIGN KEY \`FK_d6c66c08b9c7e84a1b657797dff\``);
        await queryRunner.query(`ALTER TABLE \`order_products_product\` ADD CONSTRAINT \`FK_d6c66c08b9c7e84a1b657797dff\` FOREIGN KEY (\`productId\`) REFERENCES \`product\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
