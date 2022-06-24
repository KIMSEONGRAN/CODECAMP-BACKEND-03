import { ElasticsearchService } from '@nestjs/elasticsearch';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductInput } from './dto/createProduct.input';
import { UpdateProductInput } from './dto/updateProduct.input';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';
@Resolver()
export class ProductResolver {
  constructor(
    private readonly ProductService: ProductService,
    private readonly elasticsearchService: ElasticsearchService,
  ) {}

  // 상품 목록 여러개 보여주기
  @Query(() => [Product])
  async fetchProducts(
    //                      빈 값도 허용할 때 씀.
    @Args({ name: 'search', nullable: true }) search: string,
  ) {
    // 엘라스틱서치에서 조회하기 연습!
    const result = await this.elasticsearchService.search({
      index: 'myproduct0333',
      query: {
        bool: {
          should: [{ prefix: { name: search } }],
        },
      },
    });

    console.log(JSON.stringify(result, null, ' '));
    // 엘라스틱 서치에서 조회 해보기 위해 임시로 주석!!
    // return this.ProductService.findAll();
  }

  // 상품 목록 한개 보여주기
  @Query(() => Product)
  fetchProduct(
    @Args('productId') productId: string, //
  ) {
    return this.ProductService.findOne({ productId });
  }

  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ) {
    // 엘라스틱서치에 등록하기 연습(연습이후에 삭제하기!)--------
    // this.elasticsearchService.create({
    //   id: 'myid',
    //   // index는 컬렉션이라고 생각할 수 있다. 책갈피 인덱스 개념X
    //   index: 'myproject03',
    //   document: {
    //     // name: '철수',
    //     // age: 13,
    //     // school: '다람쥐초등학교',
    //     ...createProductInput,
    //   },
    // });
    // 엘라스틱서치에 등록하기 끝--------------------------------
    // 엘라스틱서치에서 등록해보기위해 임시로 주석!
    return this.ProductService.create({ createProductInput });
  }

  @Mutation(() => Product)
  async updateProduct(
    @Args('productId') productId: string,
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ) {
    // 판매가 완료 되었는지 확인해보기
    await this.ProductService.checkSoldout({ productId });

    // 수정하기
    return await this.ProductService.update({ productId, updateProductInput });
  }

  ////////////////////////////////////////////////////////////
  // 0602-1번
  @Mutation(() => Boolean)
  deleteProduct(@Args('productId') productId: string) {
    return this.ProductService.delete({ productId });
  }
}
