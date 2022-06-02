console.log('안녕하세요');

// function getToken(){
//     const result = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
//     console.log(result);
// }

// getToken();


function getToken(count) {
    const result = String(Math.floor(Math.random() * 10 ** count)).padStart(count, '0');
    
      console.log(result); // 만들어진 토큰 출력
    
      return result;
  }
  
  getToken(4);
  getToken(6);
  getToken(8);


  