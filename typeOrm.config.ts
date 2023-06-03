import { DataSource } from "typeorm";
// import { ConfigService } from "@nestjs/config";
// import { config } from "dotenv";
// import { TypeOrmModuleOptions } from "@nestjs/typeorm";

// config();
// const configService = new ConfigService();
const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'admin',
    database: 'sale-app-dev',
    // host: 'sql12.freemysqlhosting.net', 
    // port: 3306,
    // username: 'sql12623480',
    // password: 'HFqtnhs1dj',',
    // database: 'sql12623480',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: false,
    migrationsRun: true,
    logging: true,
    logger: "file",
    migrations: [__dirname + "/src/migrations/*{.ts,.js}"],
});

export default AppDataSource;
