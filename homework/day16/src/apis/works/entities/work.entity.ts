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
export class Work {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  contents: string;

  @Column()
  isComplete: boolean;

  @ManyToOne(() => Artist)
  artist: Artist;

  @ManyToOne(() => Writer)
  writer: Writer;

  @JoinTable()
  @ManyToMany(() => Genre, (genres) => genres.works)
  genres: Genre[];

  @JoinTable()
  @ManyToMany(() => Day, (days) => days.works)
  days: Day[];
}
