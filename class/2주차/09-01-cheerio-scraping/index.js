import axios from "axios";
import cheerio from "cheerio";

// 블로그 작성 기능
async function createBoardAPI(mydata){

    // 1. 입력된 컨텐츠에서 http로 시작하는 글자 있는지 찾기
    const myurl = mydata.contents.split(" ").filter((el) => (el.includes("http")))[0] // https://daum.net

    // 2. 만약 있다면 찾은 주소로 axios.get 요청해서 html코드 받아오기 => 스크래핑 과정

    const result = await axios.get(myurl)
    // console.log(result.data);

    // 3. 스크래핑 결과에서 OG(Open Graph)코드 골라내서 변수에 저장하기
    const $ = cheerio.load(result.data);
    // .each(함수)는 치어리오의 기능이다. JS의 문법X. 반복문의 일종이라더라.
    // .each()는 여러개일때 각각에 대하여 반복해서 함수를 실행시킨다.
    $("meta").each((index, el) => {
        if ($(el).attr("property")){
            const key = $(el).attr("property").split(":")[1];
            const value = $(el).attr("content")
            console.log(key, value);
        }
    })
    // $("meta").each((index, el) 같은 경우에서 index같이 안쓰는 친구는 (_, el) 로 바꿔주는게 관례!
}

const frontendData = {
    title: "안녕하세요~~~",
    contents: "여기 정말 좋은거 같아요! 한번 꼭 놀러오세요!! 여기가 어디냐면 https://daum.net 이에요!!!"
}

createBoardAPI(frontendData);