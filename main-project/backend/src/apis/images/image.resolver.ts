import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Image } from './entities/image.entity';
import { ImageService } from './image.service';

@Resolver()
export class ImageResolver {
  constructor(private readonly imageService: ImageService) {}

  @Mutation(() => Image)
  async createImage(
    @Args('contents_URL') url: string,
    @Args('webtoonId') webtoon: string,
  ) {
    return this.imageService.create({ url, webtoon });
  }

  @Mutation(() => Image)
  async updateImage(
    @Args('webtoonId') webtoon: string,
    @Args('contents_URL') url: string,
  ) {
    return await this.imageService.update({
      url,
      webtoon,
    });
  }
}
