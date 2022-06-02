import puppeteer from "puppeteer";

async function startCrawling() {
  // await 하는 이유는 각각의 실행이 오래걸리기때문에 꼭 기다렸다 다음을 진행해야하기 때문이다. 크롤링은 시간이 걸리는 작업이다!
  // puppeteer.launch({옵션}) : 퍼펫티어 시작하기
  // headless: true 하면 브라우저를 실행시킬때 눈에 보여줄건지 말건지 설정하게된다.
  // true하면 눈에 안보임. false하면 눈에 보임. 성능은 눈에 보이는게 더 느림.
  const browser = await puppeteer.launch({ headless: false });

  // 새 페이지 열기
  const page = await browser.newPage();

  // 페이지 열때 사이즈 조절하기
  await page.setViewport({ width: 1280, height: 720 });

  // 페이지 이동 .goto
  await page.goto("https://www.goodchoice.kr/product/search/2");

  // 페이지 이동하고 html 등이 다 그려지고 1초정도 기다리기 위해 쓰는 문장
  await page.waitForTimeout(1000);

  // 페이지에서 선택자 골라내기
  // $eval = 평가하다라는 뜻. 골라내기 위해서 씀.
  // span태그를 el이라는 이름으로 가져오고, 그 안에서 데이터만 가져온다.
  const stage = await page.$eval(
    "#poduct_list_area > li:nth-child(2) > a > div > div.name > div > span",
    (el) => el.textContent
  );
  const location = await page.$eval(
    "#poduct_list_area > li:nth-child(2) > a > div > div.name > p:nth-child(4)",
    (el) => el.textContent
  );
  const price = await page.$eval(
    "#poduct_list_area > li:nth-child(2) > a > div > div.price > p > b",
    (el) => el.textContent
  );

  console.log(stage);
  console.log(location.trim());
  console.log(price);
}
startCrawling();
