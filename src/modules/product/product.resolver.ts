import { Resolver, Query, Args } from '@nestjs/graphql';
import { Product } from 'src/common/dto/product.dto';
import ProductService from './product.service';

@Resolver()
export class ProductResolver {
    constructor(
        private readonly ProductService: ProductService
    ) { }
    @Query(() => [Product])
    async getAllProducts(): Promise<Product[]> {
        return await this.ProductService.findAll();
    }

    @Query(() => Product || null)
    async getProductById(
        @Args("id")
        id: number
    ): Promise<Product | null> {
        return await this.ProductService.findOne(id);
    }
    
    @Query(()=>[Product])
    async getProductsByCategoryId (
        @Args("categoryId")
        catId: number
    ){
        return await this.ProductService.findByCategoryId(catId);
    }

    @Query(() => [Product])
    async getBestDeal(): Promise<Product[]> {
        return await this.ProductService.findBestDeal();
    }
    
    @Query(() => [Product])
    async searchByName(
        @Args("name")
        name: string
    ): Promise<Product[]> {
        return await this.ProductService.findByName(name);
    }
}   
