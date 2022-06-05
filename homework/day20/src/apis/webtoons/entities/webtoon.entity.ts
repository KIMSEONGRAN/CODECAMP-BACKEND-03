import { Image } from 'src/apis/images/entities/image.entity';
import { Work } from 'src/apis/works/entities/work.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Webtoon {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  episode: string;

  @JoinColumn()
  @OneToOne(() => Image)
  image: Image;

  @ManyToOne(() => Work)
  work: Work;
}
