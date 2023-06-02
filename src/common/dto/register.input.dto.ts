import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class RegisterInput {
  @Field()
  phoneNumber: string;
  @Field()
  password: string;
}