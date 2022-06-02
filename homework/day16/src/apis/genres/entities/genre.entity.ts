import { Work } from 'src/apis/works/entities/work.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Genre {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  genre: string;

  @ManyToMany(() => Work, (works) => works.genres)
  works: Work[];
}
