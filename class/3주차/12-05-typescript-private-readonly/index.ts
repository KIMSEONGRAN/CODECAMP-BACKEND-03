function zzz(aaaaaa) {
  console.log("==============");
  console.log(aaaaaa);
  console.log("==============");
}

// 데코레이터가 뭐냐면 나중에 실행될때 데코레이터 아랫줄이 함수 실행시 인자로 들어가게 된다.
@zzz
class AppController {}
