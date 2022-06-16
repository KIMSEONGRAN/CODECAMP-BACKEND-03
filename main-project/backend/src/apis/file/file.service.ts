import { Injectable } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';
import 'dotenv/config';


@Injectable()
export class FileService {
  async upload({ files }) {
    const waitedFiles = await Promise.all(files);

    const storage = new Storage({
      projectId: process.env.STORAGE_ID,
      keyFilename: process.env.STROAGE_JSON,
    }).bucket(process.env.STORAGE_BUCKET);

    const results = await Promise.all(
      waitedFiles.map((el) => {
        return new Promise((resolve, reject) => {
          el.createReadStream()
            .pipe(storage.file(el.filename).createWriteStream())
            .on('finish', () => resolve(`${process.env.STROAGE_BUCKET}/${el.filename}`))
            .on('error', () => reject('실패'));
        });
      }),
    );
    return results;
  }
}
