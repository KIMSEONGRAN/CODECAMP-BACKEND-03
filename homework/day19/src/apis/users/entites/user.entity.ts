import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  pwd: string;

  @Column()
  email: string;

  @Column()
  phoneNum: string;

  @Column()
  paiedDate: Date;

  @Column()
  isPaied: boolean;

  @Column()
  payType: string;
}
