import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class OrderInput {
  @Field()
  userId: number;
  @Field(() => [Int])
  productIds: number[];
  @Field()
  total: number;
  @Field()
  note: string;
}