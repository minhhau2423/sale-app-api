import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category as CategoryEntity } from "./category.entity";
import { Repository } from "typeorm";
import { Category } from "src/common/dto/category.dto";


@Injectable()
export default class CategoryService {
    constructor(
        @InjectRepository(CategoryEntity)
        private categoriesRepository: Repository<CategoryEntity>,
    ) { }
    findAll(): Promise<Category[]> {
        return this.categoriesRepository.find();
    }
    findOne(id: number): Promise<Category | null> {
        return this.categoriesRepository.findOneBy({ id });
      }
}
