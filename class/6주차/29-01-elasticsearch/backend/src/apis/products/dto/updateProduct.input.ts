import { InputType, OmitType, PartialType, PickType } from '@nestjs/graphql';
import { CreateProductInput } from './createProduct.input';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {}
// PickType(CreateProductInput, ['name', 'price']); // 얘는 선택하겠다
// OmitType(CreateProductInput, ['description']); // 얘는 빼겠다.
