import { Injectable } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';
import 'dotenv/config';

@Injectable()
export class FileService {
  async upload({ files }) {
    // 여러개 할때
    const waitedFiles = await Promise.all(files);
    console.log(waitedFiles);

    // 구글 스토리지에(GCP) 파일 업로드하기
    // 여러개를 매개변수로 받긴했는데 그중 하나만 쓰고싶을때 인덱스로 접근
    // const myfile = files[0];

    const storage = new Storage({
      projectId: process.env.STORAGE_ID,
      keyFilename: process.env.STROAGE_JSON,
    }).bucket(process.env.STORAGE_BUCKET);

    // await new Promise((resolve, reject) => {
    //   // ↓ 이거는 오래걸리는 작업이다. 그래서 작업 도중에 return이 날라가 버릴 수 있다.
    //   //   해결을 어떻게 할 것인가? promise를 만들고 그 앞에 await 를 달아준다! 아래와 같이 바꿔라
    //        파일이 여러개일때는 Promise.all로 한번더 감싸야한다.
    //   myfile
    //     .createReadStream() // 파일 읽기.createReadStream.
    //     .pipe(storage.createWriteStream()) // 읽어들인 파일을 가지고 2차적으로 뭔갈 할때는 .pipe() .createWriteStream 이건 업로드한다는 뜻
    //     .on('finish', () => resolve('성공')) // 성공했을때 실행할 것
    //     .on('error', () => reject('실패')); // 실패했을때 실행할 것. 둘다 동일한 on이지만 상황에 따라 실행되고 안되고.
    // });

    const results = await Promise.all(
      // ↓[Promise, Promise] ↓ el는 파일한개한개
      waitedFiles.map((el) => {
        return new Promise((resolve, reject) => {
          el.createReadStream() // 파일 읽기.createReadStream.
            .pipe(storage.file(el.filename).createWriteStream()) // 읽어들인 파일을 가지고 2차적으로 뭔갈 할때는 .pipe() .createWriteStream 이건 업로드한다는 뜻. .file(el.filename) 이부분은 파일명 설정 부분
            .on('finish', () =>
              resolve(`${process.env.STROAGE_BUCKET}/${el.filename}`),
            ) // 성공했을때 실행할 것
            .on('error', () => reject('실패')); // 실패했을때 실행할
        });
      }),
    ); // await Promise.all([Promise, Promise])
    // output : const result = ["폴더명/파일명", "폴더명/파일명"]

    return results; // 🎠️ 여러개라서 배열로 감싼다. resolver의 설명부분과 동일.
  }
}
