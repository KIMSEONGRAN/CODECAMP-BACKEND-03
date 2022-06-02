import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// 데이터베이스랑 연관이 깊음
// 데이터를 주고 받을때 서로를 거침.
// 형태를 명시해줌.
@Entity()
@ObjectType()
export class Menu {
  // 데이터 베이스 저장 어떻게 할건지
  @PrimaryGeneratedColumn()
  // 필드 = 타입명시
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => Int)
  price: number;

  @Column()
  @Field(() => Int)
  kcal: number;

  @Column()
  @Field(() => Int)
  saturatedFat: number;

  @Column()
  @Field(() => Int)
  protein: number;

  @Column()
  @Field(() => Int)
  sodium: number;

  @Column()
  @Field(() => Int)
  sugars: number;

  @Column()
  @Field(() => Int)
  caffeine: number;
}
