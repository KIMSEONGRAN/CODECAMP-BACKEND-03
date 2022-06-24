import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateWebtoonInput {
  @Field(() => String)
  episode: string;

  @Field(() => String)
  workId: string;

  @Field(() => [String])
  url: string[];
}
