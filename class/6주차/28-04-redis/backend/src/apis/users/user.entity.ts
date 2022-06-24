import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, In, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  email: string;

  @Column()
  // 주석처리 이유는 비밀번호 노출 금지때문에!!
  // @Field(() => String)
  password: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => Int)
  age: number;

  @Column({default: 0})
  @Field(() => Int)
  point: number;
}
