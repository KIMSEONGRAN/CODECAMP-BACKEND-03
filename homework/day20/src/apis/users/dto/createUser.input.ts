import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  pwd: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;
}
