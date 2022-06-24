import { InputType, PartialType } from '@nestjs/graphql';
import { CreateWebtoonInput } from './createWebtoon.input';

@InputType()
export class UpdateWebtoonInput extends PartialType(CreateWebtoonInput) {}
