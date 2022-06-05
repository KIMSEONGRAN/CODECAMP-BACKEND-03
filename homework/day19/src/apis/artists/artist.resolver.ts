import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Artist } from './entities/artist.entity';
import { ArtistService } from './artist.service';

@Resolver()
export class ArtistResolver {
  constructor(private readonly ArtistService: ArtistService) {}

  @Mutation(() => Artist)
  createWriter(
    @Args('name') name: string, //
  ) {
    return this.ArtistService.create({ name });
  }
}
