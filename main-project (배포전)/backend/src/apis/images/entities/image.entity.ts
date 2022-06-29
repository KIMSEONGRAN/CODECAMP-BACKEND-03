import { Field, ObjectType } from '@nestjs/graphql';
import { Webtoon } from 'src/apis/webtoons/entities/webtoon.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Image {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  contents_URL: string;

  @ManyToOne(() => Webtoon)
  @Field(() => String)
  webtoonId: string;

  @DeleteDateColumn()
  deletedAt: Date;
}
