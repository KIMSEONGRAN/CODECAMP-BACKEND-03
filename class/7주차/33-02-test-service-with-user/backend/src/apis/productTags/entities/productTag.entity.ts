import { Field, ObjectType } from '@nestjs/graphql';
import { Product } from 'src/apis/products/entities/product.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class productTag {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @ManyToMany(() => Product, (products) => products.productTags) // 다대다 연결. 어떤것이랑 다대다 연결할 것인가
  //                              ↑이게 뭐냐면 반대의 입장에서 products를 찾기 위해서 쓴다.
  //                               이부분은 Entity에서 export class 부분을 말한다.
  //                               다대다 관계에서는 이 사항이 매우 중요하다.
  @Field(() => [Product])
  products: Product[];
}
