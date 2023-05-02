import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo/dist';
import { join } from 'path';
import { User } from './models/user/entities/user.entity';
import { Category } from './models/category/entities/category.entity';
import { Product } from './models/product/entities/product.entity';
import { UserResolver } from './models/user/user.resolver';
import { Order } from './models/order/entities/order.entity';
import { UserModule } from './models/user/user.module';
import { CategoryModule } from './models/category/category.module';
import { ProductModule } from './models/product/product.module';
import { OrdertModule } from './models/order/order.module';
import AppDataSource from 'typeOrm.config';

// @Module({
//   imports: [],
//   controllers: [AppController],
//   providers: [AppService],
// })
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      sortSchema: true,
      // installSubscriptionHandlers: true,
    }),
    // TypeOrmModule.forRootAsync(AppDataSource.options),
    TypeOrmModule.forRootAsync({
      useFactory: _ => (
        
        {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'admin',
        database: 'sale-app-dev',
        entities: [__dirname + "/**/*.entity{.ts,.js}"],
        migrations: ["dist/src/migrations/*{.ts,.js}"],
        synchronize: false,
        // autoLoadEntities: true,
        logging: true,
        logger: "file",
        // migrations: ['src/migrations/**/*.ts'],
        migrationsRun: true,
      }
      )
    }),
    //Module...
    UserModule,
    CategoryModule,
    ProductModule,
    OrdertModule,
  ],
  controllers: [],
  providers: [UserResolver]
})
export class AppModule { }
