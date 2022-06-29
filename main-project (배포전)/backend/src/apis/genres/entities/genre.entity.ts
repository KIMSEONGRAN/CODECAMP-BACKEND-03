import { Work } from 'src/apis/works/entities/work.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Genre {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Field(() => String)
  genres: string;

  @Field(() => [Work])
  @ManyToMany(() => Work, (works) => works.genres)
  works: Work[];
}
