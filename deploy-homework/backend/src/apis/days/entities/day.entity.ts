import { Work } from 'src/apis/works/entities/work.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Day {
  @PrimaryGeneratedColumn('uuid')
  @Column(() => String)
  @Field(() => String)
  id: string;

  @Column(() => Date)
  @Field(() => Date)
  day: Date;

  @ManyToMany(() => Work, (works) => works.days)
  @Field(() => [Work])
  works: Work[];
}
