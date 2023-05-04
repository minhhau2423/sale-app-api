import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product as ProductEntity } from "./product.entity";
import { Like, MoreThan, Repository } from "typeorm";
import { Product } from "src/common/dto/product.dto";

@Injectable()
export default class ProductService {
    constructor(
        @InjectRepository(ProductEntity)
        private productsRepository: Repository<ProductEntity>,
    ) { }
    findAll(): Promise<Product[]> {
        return this.productsRepository.find();
    }
    findOne(id: number): Promise<Product | null> {
        return this.productsRepository.findOne({
            where: {
                id: id,
            },
            relations: ['category'],
        });
    }
    findByCategoryId(categoryId: number): Promise<Product[]> {
        return this.productsRepository.find({
            where: {
                category: { id: categoryId },
            },
            relations: ['category'],
        });
    }
    findBestDeal(): Promise<Product[]> {
        return this.productsRepository.find({
            where: {
                discount: MoreThan(50)        
            },
            order: {
                discount: 'DESC'
            },
            take: 10,
            relations: ['category'],
        });
    }

    findByName(name: string): Promise<Product[]> {
        return this.productsRepository.find({
            where: {
                name: Like(`%${name}%`)
            },
            relations: ['category'],
        });
    }
}
