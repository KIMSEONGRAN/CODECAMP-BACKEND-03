import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSaleslocation } from '../productsSaleslocation/entities/productSaleslocation.entity';
import { productTag } from '../productTags/entities/productTag.entity';
import { Product } from './entities/product.entity';
import { ProductSubscriber } from './entities/product.subscriber';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, ProductSaleslocation, productTag]),
  ],
  providers: [
    ProductResolver, //
    ProductService,
    ProductSubscriber,
  ],
})
export class ProductModule {}
