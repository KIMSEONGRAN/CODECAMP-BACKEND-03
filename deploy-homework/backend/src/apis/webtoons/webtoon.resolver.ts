import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateWebtoonInput } from './dto/createWebtoon.input';
import { UpdateWebtoonInput } from './dto/updateWebtoon.input';
import { Webtoon } from './entities/webtoon.entity';
import { WebtoonService } from './webtoon.service';
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { FileService } from '../file/file.service';

@Resolver()
export class WebtoonResolver {
  constructor(
    private readonly webtoonService: WebtoonService,
    private readonly fileService: FileService, //
  ) {}

  @Query(() => [Webtoon])
  fetchWebtoon() {
    return this.webtoonService.findAll();
  }

  @Query(() => [Webtoon])
  fetchWebtoonWithDeleted() {
    return this.webtoonService.findAllWithDeleted();
  }

  // ======================== Mutation ============================ //
  @Mutation(() => Webtoon)
  createWebtoon(@Args('WebtoonInput') createwebtoonInput: CreateWebtoonInput) {
    return this.webtoonService.create({ createwebtoonInput });
  }

  @Mutation(() => Webtoon)
  async updateWebtoon(
    @Args('updateWebtoon') updateWebtoonInput: UpdateWebtoonInput,
  ) {
    return await this.webtoonService.update({ updateWebtoonInput });
  }

  @Mutation(() => Boolean)
  deleteWebtoon(@Args('workId') workId: string) {
    return this.webtoonService.delete({ workId });
  }

  @Mutation(() => Boolean)
  restoreWebtoon(@Args('workId') workId: string) {
    return this.webtoonService.restoreWebtoon({ workId });
  }

  @Mutation(() => [String])
  uploadImg(
    @Args({ name: 'files', type: () => [GraphQLUpload] }) files: FileUpload[],
  ) {
    return this.fileService.upload({ files });
  }
}
