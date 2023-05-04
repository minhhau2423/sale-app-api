import { Resolver, Query, Args } from '@nestjs/graphql';
import CategoryService from './category.service';
import { Category } from 'src/common/dto/category.dto';

@Resolver()
export class CategoryResolver {
    constructor(
        private readonly CategoryService: CategoryService
    ) { }
    @Query(() => [Category])
    async getAllCategories(): Promise<Category[]> {
        return await this.CategoryService.findAll();
    }

    @Query(() => Category || null)
    async getCategoryById(
        @Args("id")
        id: number
    ): Promise<Category | null> {
        return await this.CategoryService.findOne(id);
    }
}   
