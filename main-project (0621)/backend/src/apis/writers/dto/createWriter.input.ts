import { OmitType, InputType } from '@nestjs/graphql';
import { Writer } from '../entities/writer.entity';

// 받을때만 entity column
@InputType()
export class CreateWriterInput extends OmitType(Writer, ['id'], InputType) {}
