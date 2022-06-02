import { ProductCategory } from 'src/apis/productsCategory/entities/productCategory.entity';
import { ProductSaleslocation } from 'src/apis/productsSaleslocation/entities/productSaleslocation.entity';
import { productTag } from 'src/apis/productTags/entities/productTag.entity';
import { User } from 'src/apis/users/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column() // Column({})안에 SQL에 들어갈때 쓸 SQL타입을 설정한다. 안쓰면 default로 자동으로 들어감
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  isSoldOut: boolean;

  @JoinColumn() // 연결이 핵심이 되는 컬럼이라는 뜻.
  @OneToOne(() => ProductSaleslocation) // OneToOne : 1대1관계. 뭐랑 연결할지 연결 클래스 연결해준다.
  productSaleslocation: ProductSaleslocation; // FK컬럼 부분. Type이 ProductSaleslocation다.

  // ↓ 얘네들은 조인컬럼 필요X Many를 쓰게되면 자동으로 암묵적으로 JoinColumn이 생성되기에 안쓴다.
  // ManyToOne이 있어야지 OneToMany를 쓸 수 있다. ManyToOne 없이쓰면 에러남. 왜냐면 DB에는 OneToMany가 없기 때문이다.
  @ManyToOne(() => ProductCategory) // FK생성
  productCategory: ProductCategory;

  @ManyToOne(() => User)
  user: User;

  @JoinTable() // 중간테이블 자동 생성하는 부분. 다대다 관계에서 한쪽에만 쓰면된다!!!
  @ManyToMany(() => productTag, (productTags) => productTags.products) // 다대다. 다대다 하면 자동으로 중간 테이블 생성됨
  //                              ↑이게 뭐냐면 반대의 입장에서 productTag를 찾기 위해서 쓴다.
  //                               이부분은 tagEntity에서 export class 부분을 말한다.
  //                               다대다 관계에서는 이 사항이 매우 중요하다.
  productTags: productTag[]; // ManyToMany, OneToMany 인 상황에서는 받아올게 많으므로 []표시를 한다!
}
