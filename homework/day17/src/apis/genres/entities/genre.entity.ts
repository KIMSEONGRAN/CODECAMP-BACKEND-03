import { Work } from 'src/apis/works/entities/work.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Genre {
  @PrimaryGeneratedColumn('uuid')
  @Column(() => String)
  id: string;

  @Column(() => String)
  @Field(() => String)
  genre: string;

  @Field(() => [Work])
  @ManyToMany(() => Work, (works) => works.genres)
  works: Work[];
}
