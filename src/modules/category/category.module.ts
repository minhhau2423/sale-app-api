import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './category.entity';
import CategoryService from './category.service';
import { CategoryResolver } from './category.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  providers:[CategoryService, CategoryResolver],
  exports: [TypeOrmModule, CategoryService, CategoryResolver]
})
export class CategoryModule { }