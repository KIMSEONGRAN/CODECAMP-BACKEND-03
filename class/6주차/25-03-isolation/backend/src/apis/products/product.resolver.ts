import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductInput } from './dto/createProduct.input';
import { UpdateProductInput } from './dto/updateProduct.input';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';
@Resolver()
export class ProductResolver {
  constructor(private readonly ProductService: ProductService) {}

  // 상품 목록 여러개 보여주기
  @Query(() => [Product])
  fetchProducts() {
    return this.ProductService.findAll();
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
