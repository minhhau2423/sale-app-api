import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import { UserService } from '../user/user.service';
import ProductService from '../product/product.service';
import { UserModule } from '../user/user.module';
import { ProductModule } from '../product/product.module';
import { Product } from '../product/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Product]), UserModule, ProductModule],
  providers:[OrderService, OrderResolver],
  exports: [TypeOrmModule, OrderService, OrderResolver]
})
export class OrdertModule { }