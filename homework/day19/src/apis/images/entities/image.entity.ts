import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Image {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  eThumbnailId: string;

  @Column()
  contents: string;

  @Column()
  mThumbnailId: string;
}
