import { Field, ObjectType } from "@nestjs/graphql";
import { Order } from "src/common/dto/order.dto";


@ObjectType()
export class User {
    @Field()
    id: number;

    @Field({nullable: true})
    name: string;

    @Field()
    phoneNumber: string;

    @Field()
    password: string;

    @Field({nullable: true })
    address: string;

    @Field({ nullable: true })
    point: number;

    @Field({nullable: true })
    avatarUrl: string;

    @Field({nullable: true })
    createdAt: Date;

    //order 1--n
    @Field(() => [Order],{ nullable: true})
    orders: Order[];

}