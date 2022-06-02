import axios from "axios";
import cheerio from "cheerio";

// 블로그 작성 기능
export async function createBoardAPI(mydata) {
  const myurl = mydata;

  const obj2 = {};
  // 2. 만약 있다면 찾은 주소로 axios.get 요청해서 html코드 받아오기 => 스크래핑 과정

  const result = await axios.get(myurl); // 링크의 내용

  // 3. 스크래핑 결과에서 OG(Open Graph)코드 골라내서 변수에 저장하기
  const $ = cheerio.load(result.data);
  // .each(함수)는 치어리오의 기능이다. JS의 문법X. 반복문의 일종이라더라.
  // .each()는 여러개일때 각각에 대하여 반복해서 함수를 실행시킨다.
  $("meta").each((_, el) => {
    if ($(el).attr("property")) {
      const key = $(el).attr("property").split(":")[1];
      const value = $(el).attr("content");

      if (key === "title" || key === "description" || key === "image") {
        obj2[key] = value;
      }
    }
  });
  return obj2;
}
