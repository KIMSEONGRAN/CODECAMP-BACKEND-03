import { Field, ObjectType } from '@nestjs/graphql';
import { Image } from 'src/apis/images/entities/image.entity';
import { Work } from 'src/apis/works/entities/work.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Webtoon {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  episode: string;


  // @OneToMany(() => Image, image => image.webtoonId)
  // @Field(() => Image)
  // image: Image;

  @ManyToOne(() => Work)
  @Field(() => Work)
  workId: Work;

  @DeleteDateColumn()
  deletedAt: Date;
}
