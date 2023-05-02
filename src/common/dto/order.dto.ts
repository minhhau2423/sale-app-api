import { Field, ObjectType } from "@nestjs/graphql";
import { Status } from "src/common/interfaces/status.enum";
import { User } from "src/common/dto/user.dto";

@ObjectType()
export class Order {
    @Field()
    id: number;

    @Field(() => Status)
    status: Status;

    @Field({ nullable: true })
    estimatedDeliveryDate: Date;

    @Field({ nullable: true })
    DeliveryDate: Date;

    @Field({ nullable: true })
    shippingFee: number;

    @Field({ nullable: true })
    discount: number;

    @Field({ nullable: true })
    total: number;

    @Field({ nullable: true })
    createdAt: Date;

    //user n--1
    @Field(() => User)
    user: User;

    //product n--n

}