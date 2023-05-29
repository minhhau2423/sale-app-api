import { MigrationInterface, QueryRunner } from "typeorm";

export class V0UpdateOrder1685376246699 implements MigrationInterface {
    name = 'V0UpdateOrder1685376246699'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`order_products_product\` (\`orderId\` int NOT NULL, \`productId\` int NOT NULL, INDEX \`IDX_1f9ea0b0e59e0d98ade4f2d5e9\` (\`orderId\`), INDEX \`IDX_d6c66c08b9c7e84a1b657797df\` (\`productId\`), PRIMARY KEY (\`orderId\`, \`productId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`order_products_product\` ADD CONSTRAINT \`FK_1f9ea0b0e59e0d98ade4f2d5e99\` FOREIGN KEY (\`orderId\`) REFERENCES \`order\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`order_products_product\` ADD CONSTRAINT \`FK_d6c66c08b9c7e84a1b657797dff\` FOREIGN KEY (\`productId\`) REFERENCES \`product\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order_products_product\` DROP FOREIGN KEY \`FK_d6c66c08b9c7e84a1b657797dff\``);
        await queryRunner.query(`ALTER TABLE \`order_products_product\` DROP FOREIGN KEY \`FK_1f9ea0b0e59e0d98ade4f2d5e99\``);
        await queryRunner.query(`DROP INDEX \`IDX_d6c66c08b9c7e84a1b657797df\` ON \`order_products_product\``);
        await queryRunner.query(`DROP INDEX \`IDX_1f9ea0b0e59e0d98ade4f2d5e9\` ON \`order_products_product\``);
        await queryRunner.query(`DROP TABLE \`order_products_product\``);
    }

}
