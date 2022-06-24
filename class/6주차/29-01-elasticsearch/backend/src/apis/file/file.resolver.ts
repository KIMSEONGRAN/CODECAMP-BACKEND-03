import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { FileService } from './file.service';
import { FileUpload, GraphQLUpload } from 'graphql-upload';

@Resolver()
export class FileResolver {
  constructor(
    private readonly fileService: FileService, //
  ) {}

  @Mutation(() => [String])
  uploadFile(
    // @Args 파일을 받기
    // 그래프큐엘의 업로드 타입은 따로 있기에 명시해줘야한다. 안그럼 사용못함.
    // 🎠️ 동시에 여러개 업로드 하려면 []로 감싸야함. 여러개 아니면 [] 빼셈.
    // 🎠️ ()안에꺼는 그래프큐엘용, ()밖에는 타입스크립트용. 그래서 []사용법 다름. 감싸고 안감싸고 차이가 있음.
    @Args({ name: 'files', type: () => [GraphQLUpload] }) files: FileUpload[],
  ) {
    return this.fileService.upload({ files });
  }
}
