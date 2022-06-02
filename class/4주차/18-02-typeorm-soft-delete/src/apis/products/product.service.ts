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
    // 정상적일때 try, 에러일때 catch 실행됨.
    // finally는 성공이든 실패이든 실행됨.
    // exception-filter
    // try {} catch {} finally {}
    const product = await this.productRepository.findOne({
      where: { id: productId /* , isDeleted: false */ },
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

  //////////////////////////////////////////////////////
  // 0602 - 2번
  async delete({ productId }) {
    // 1. 실제 삭제
    // const result = await this.productRepository.delete({ id: productId });
    // return result.affected ? true : false;

    // 0602 - 4번
    // 2. 소프트 삭제(직접 구현) - isDeleted
    //                                    조건           ,     변경값
    // this.productRepository.update({ id: productId }, { isDeleted: true });

    // 3. 소프트 삭제(직접 구현) - deletedAt
    // this.productRepository.update({ id: productId }, { deletedAt: new Date() });
    // }

    // 4. 소프트 삭제(typeOrm 제공) - softRemove : id로만 지울 수 있음.
    // this.productRepository.softRemove({id: productId});

    // 5. 소프트 삭제(typeOrm 제공) - softDelete : id든 뭐든 다른 조건도 가능.
    const result = await this.productRepository.softDelete({ id: productId });
    return result.affected ? true : false;
  }
}
