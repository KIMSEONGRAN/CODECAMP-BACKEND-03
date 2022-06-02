import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Artist } from 'src/apis/artists/entities/artist.entity';
import { Day } from 'src/apis/days/entities/day.entity';
import { Genre } from 'src/apis/genres/entities/genre.entity';
import { Writer } from 'src/apis/writers/entities/writer.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Work {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  title: string;

  @Column()
  @Field(() => String)
  content: string;

  @Column({ default: false })
  @Field(() => Boolean, { defaultValue: false })
  isComplete: boolean;

  @ManyToOne(() => Artist)
  // @Field(() => Artist)
  artist: Artist;

  @ManyToOne(() => Writer)
  // @Field(() => Writer)
  writer: Writer;

  @JoinTable()
  // @Field(() => [Genre])
  @ManyToMany(() => Genre, (genres) => genres.works)
  genres: Genre[];

  @JoinTable()
  // @Field(() => [Day])
  @ManyToMany(() => Day, (days) => days.works)
  days: Day[];
}
