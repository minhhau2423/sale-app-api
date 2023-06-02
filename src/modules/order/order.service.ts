import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Order as OrderEntity } from './order.entity';
import { User as UserEntity } from '../user/user.entity';
import { Product as ProductEntity } from '../product/product.entity';
import { Order } from 'src/common/dto/order.dto';
import { OrderInput } from 'src/common/dto/order.input.dto';
import { Status } from 'src/common/interfaces/status.enum';
import { UserService } from '../user/user.service';
import ProductService from '../product/product.service';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(OrderEntity)
        private ordersRepository: Repository<OrderEntity>,
        private readonly userService: UserService,
        private readonly productService: ProductService
    ) { }

    findAll(): Promise<Order[]> {
        return this.ordersRepository.find(
            {
                relations: ['user', 'products'],
            }

        );
    }
    
    findByUserId(userId: number): Promise<Order[]> {
        return this.ordersRepository.find(
            {
                where: {
                    user:{
                        id: userId
                    }
                },
                relations: ['user', 'products'],
            }

        );
    }

    async createOrder(orderInput: OrderInput): Promise<Order> {
        const user = await this.userService.findOne(orderInput.userId);
        const products = await this.productService.findMany(orderInput.productIds);
        const order = new Order();
        order.status = Status.processing;
        order.total = orderInput.total;
        order.user = user;
        order.products = products;
        const date = new Date();
        order.estimatedDeliveryDate = new Date(date.setDate(date.getDate() + 3));
        order.note = orderInput.note;
        return this.ordersRepository.save(order);
    }
}