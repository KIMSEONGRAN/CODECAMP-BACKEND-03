import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  pwd: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  email: string;

  @Column({ default: false })
  @Field(() => String, { defaultValue: null })
  phoneNum: string;

  @DeleteDateColumn()
  deletedAt: Date;

  @Column({ default: 0 })
  @Field(() => Int)
  pay: number;

  // @Column()
  // // @Field(() => String)
  // paiedDate: Date;

  // @Column({ default: false })
  // @Field(() => Boolean, { defaultValue: false })
  // isPaied: boolean;

  // @Column()
  // // @Field(() => String)
  // payType: string;
}
