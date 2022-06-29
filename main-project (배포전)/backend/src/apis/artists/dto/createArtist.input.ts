import { OmitType, InputType } from '@nestjs/graphql';
import { Artist } from '../entities/artist.entity';

// 받을때만 entity column
@InputType()
export class CreateArtistInput extends OmitType(Artist, ['id'], InputType) {}
