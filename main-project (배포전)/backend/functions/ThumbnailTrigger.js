import { Storage } from '@google-cloud/storage';
import sharp from 'sharp';

exports.ThumbnailTrigger = async (event, context) => {
  if (event.name.includes('thumb/')) return;

  const option = [
    [320, 's'],
    [640, 'm'],
    [1280, 'l'],
  ];

  const name = event.name;

  const storage = new Storage().bucket(event.bucket);

  await Promise.all(
    option.map(([size, dir]) => {
      return new Promise((resolve, reject) => {
        storage
          .file(name) // 올렸던 파일 탐색
          .createReadStream() // 파일 읽기
          .pipe(sharp().resize({ width: size })) // 읽어들인 파일 리사이즈
          .pipe(storage.file(`thumb/${dir}/${name}`).createWriteStream()) // 그 파일을 경로에 맞게 업로드
          .on('finish', () => resolve()) // 성공시
          .on('error', () => reject()); // 실패시
      });
    }),
  );
};
