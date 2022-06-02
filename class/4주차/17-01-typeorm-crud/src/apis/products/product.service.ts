import {
  HttpException,
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne({ productId }) {
    return await this.productRepository.findOne({ where: { id: productId } });
  }

  async create({ createProductInput }) {
    const result = await this.productRepository.save({
      // 스프레드 연산자를 통해 원하는걸 꺼내오는 방식
      ...createProductInput,

      // 하나하나 직접 나열하는 방식
      // name: createProductInput.name,
      // description: createProductInput.description,
      // price: createProductInput.price,
    });
    return result;
  }

  async update({ productId, updateProductInput }) {
    // 1. 가격만 바꿨는데 가격외에 다른 부분도 조회하고 싶을때는
    const myproduct = await this.productRepository.findOne({
      where: { id: productId },
    });

    // 객체에서는 동일한 이름의 키가 있으면 제일 밑에 있는 것 값으로 출력한다. 먼저꺼를 덮어쓰는셈.
    // 그렇기에 myproduct를 먼저쓰고 updateProductInput으로 하여금 덮어쓰게 한 셈이다.
    const newProduct = {
      ...myproduct, // 2. 기존 값도 스프레드로 해줘야함. 필요없으면 빼셈
      id: productId,
      ...updateProductInput, // name, price는 스프레드 연산자를 통해 꺼내올거다
    };

    return await this.productRepository.save(newProduct); // 가격 데이터만 내뱉을 수 있음.
  }

  async checkSoldout({ productId }) {
    const product = await this.productRepository.findOne({
      where: { id: productId },
    });

    if (product.isSoldOut)
      throw new UnprocessableEntityException('이미 판매 완료된 상품입니다.');

    // if (product.isSoldOut) {
    //   // FE에 에러 던지기. 예외처리
    //   throw new HttpException(
    //     '이미 판매 완료된 상품입니다.',
    //     HttpStatus.UNPROCESSABLE_ENTITY,
    //   );
    // }
  }
}
