import { Field, Int, InputType } from '@nestjs/graphql';

// 클라이언트 친구
// 계층간 이동시 사용되는 오브젝트라는 뜻
// 엘레베이터 개념. 클라이언트에서 dto를 거쳐서 데이터를 전해야함.
// dto entity가 제일 먼저 코드 짜야하는 부분!
@InputType() // 인풋타입을 선언해야 객체 안에 여러개가 들어간다
export class CreateStarbucksInput {
  @Field(() => String)
  name: string;

  @Field(() => Int)
  price: number;

  @Field(() => Int)
  kcal: number;

  @Field(() => Int)
  saturatedFat: number;

  @Field(() => Int)
  protein: number;

  @Field(() => Int)
  sodium: number;

  @Field(() => Int)
  sugars: number;

  @Field(() => Int)
  caffeine: number;
}
