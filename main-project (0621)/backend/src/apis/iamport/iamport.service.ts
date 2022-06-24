import axios from 'axios';

export class IamportService {
  // 인증 토큰 발급 받기 =================================================================
  async getToken() {
    const tokenReq = await axios({
      url: 'https://api.iamport.kr/users/getToken',
      method: 'post', // POST method
      headers: { 'Content-Type': 'application/json' }, // "Content-Type": "application/json"
      data: {
        imp_key: process.env.IMPORT_REST_API_KEY, // REST API키
        imp_secret: process.env.IMPORT_REST_API_SECRET, // REST API Secret
      },
    });
    return tokenReq.data.response.access_token;
  }
}
