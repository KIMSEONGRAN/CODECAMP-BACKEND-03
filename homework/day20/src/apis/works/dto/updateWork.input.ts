import { InputType, PartialType } from '@nestjs/graphql';
import { CreateWorkInput } from './createWork.input';

@InputType()
export class UpdateWorkInput extends PartialType(CreateWorkInput) {}
