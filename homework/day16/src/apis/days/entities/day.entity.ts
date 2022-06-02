import { Work } from 'src/apis/works/entities/work.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Day {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  day: Date;

  @ManyToMany(() => Work, (works) => works.days)
  works: Work[];
}
