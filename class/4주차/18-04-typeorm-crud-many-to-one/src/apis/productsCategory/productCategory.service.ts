import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductCategory } from './entities/productCategory.entity';

@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectRepository(ProductCategory)
    private readonly productCategoryRepository: Repository<ProductCategory>,
  ) {}
  async create({ name }) {
    const result = await this.productCategoryRepository.save({
      name, // 키와 밸류 이름이 같으면 한번만 쓸 수 있다.
    });
    console.log(result); // {name:"전자제품"}
    return result;
  }
}
