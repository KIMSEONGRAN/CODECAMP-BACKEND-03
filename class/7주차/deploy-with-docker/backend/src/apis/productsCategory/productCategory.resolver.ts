import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ProductCategory } from './entities/productCategory.entity';
import { ProductCategoryService } from './productCategory.service';
@Resolver()
export class ProductCategoryResolver {
  constructor(
    private readonly ProductCategoryService: ProductCategoryService,
  ) {}

  @Mutation(() => ProductCategory)
  createProductCategory(
    @Args('name') name: string, //
  ) {
    return this.ProductCategoryService.create({ name });
  }
}
