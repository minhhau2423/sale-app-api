import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { Order } from 'src/common/dto/order.dto';
import { OrderInput } from 'src/common/dto/order.input.dto';
import { Product } from 'src/common/dto/product.dto';

@Resolver(() => Order)
export class OrderResolver {
    constructor(private readonly orderService: OrderService) { }
    @Query(() => [Order])
    async getAllOrders(): Promise<Order[]> {
        return await this.orderService.findAll();
    }
    @Query(() => [Order])
    async getOrdersByUserId(
        @Args('userId')
        userId: number
    ): Promise<Order[]> {
        return await this.orderService.findByUserId(userId);
    }
    // @ResolveField(() => [Product])
    // async products(@Parent() order: Order): Promise<Product[]> {
    //   // Filter products based on the join table value
    //   return order.products.filter((product) => product.id !== null);
    // }
    @Mutation(() => Order)
    async addOrder(
        @Args('orderInput')
        orderInput: OrderInput
    ): Promise<Order> {
        const order = await this.orderService.createOrder(orderInput);
        return order;
    }
}
