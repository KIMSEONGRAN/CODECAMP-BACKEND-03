import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Writer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
