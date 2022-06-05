import { Field, InputType } from '@nestjs/graphql';
import { CreateArtistInput } from 'src/apis/artists/dto/createArtist.input';
import { CreateWriterInput } from 'src/apis/writers/dto/createWriter.input';
import { Column } from 'typeorm';

@InputType()
export class CreateWorkInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  content: string;

  @Field(() => CreateArtistInput)
  artist: CreateArtistInput;

  @Field(() => CreateWriterInput)
  writer: CreateWriterInput;
}
