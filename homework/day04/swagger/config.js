export const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API 명세서 만들기',
        version: '1.0.0',
      },
    },
    apis: ['./swagger/*.swagger.js'], // files containing annotations as above
    // index 기준으로 경로를 작성해야한다.
  };