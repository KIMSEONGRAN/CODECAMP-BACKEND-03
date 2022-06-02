import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductSaleslocation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  address: string;

  @Column()
  adressDetail: string;

  @Column({ type: 'decimal' }) // 소숫점 타입
  lat: number;

  @Column()
  lng: number;

  @Column()
  meetingTime: Date;
}
