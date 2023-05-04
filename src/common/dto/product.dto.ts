import { Field, ObjectType } from "@nestjs/graphql";
import { Category } from "./category.dto";

@ObjectType()
export class Product {
    @Field()
    id: number;

    @Field({ nullable: true })
    name: string;

    @Field({ nullable: true })
    amount: number;

    @Field({ nullable: true })
    unit: string;

    @Field({ nullable: true })
    grossPrice: number;

    @Field({ nullable: true })
    netPrice: number;

    @Field({ nullable: true })
    discount: number;

    @Field({ nullable: true })
    description: string;

    @Field({ nullable: true })
    imageUri: string;

    @Field()
    isActive: boolean;

    //category n--1
    @Field(() => Category, { nullable: true })
    category: Category

}