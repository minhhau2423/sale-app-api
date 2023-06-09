import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UserInput {
  @Field()
  phoneNumber: string;
  @Field()
  password: string;
}