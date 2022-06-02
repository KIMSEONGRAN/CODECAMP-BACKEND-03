import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Writer {
  @PrimaryGeneratedColumn('uuid')
  @Column(() => String)
  @Field(() => String)
  id: string;

  @Column(() => String)
  @Field(() => String)
  name: string;
}
