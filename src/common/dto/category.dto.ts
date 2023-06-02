import { Field, ObjectType } from "@nestjs/graphql";
import { Product } from "./product.dto";

@ObjectType()
export class Category {
    @Field()
    id: number;

    @Field({ nullable: true })
    name: string;

    @Field({ nullable: true })
    imageUri: string;

    @Field({ nullable: true })
    createdAt: Date;

    //products 1--n
    @Field(() => [Product], { nullable: true })
    products: Product[];

}