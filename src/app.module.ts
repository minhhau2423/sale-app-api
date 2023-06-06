import { Get, Module, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo/dist';
import { join } from 'path';
import AppDataSource from '../typeOrm.config';
import { UserModule } from './modules/user/user.module';
import { CategoryModule } from './modules/category/category.module';
import { ProductModule } from './modules/product/product.module';
import { OrdertModule } from './modules/order/order.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      sortSchema: true,
      // installSubscriptionHandlers: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: _ => 
      AppDataSource.options
    }),
    //Import Module ...
    UserModule,
    CategoryModule,
    ProductModule,
    OrdertModule,
  ],
  controllers: [AppController],
})
export class AppModule { }
