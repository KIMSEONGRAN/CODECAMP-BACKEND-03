import puppeteer from 'puppeteer';

async function startCrawling(){
    // await 하는 이유는 각각의 실행이 오래걸리기때문에 꼭 기다렸다 다음을 진행해야하기 때문이다. 크롤링은 시간이 걸리는 작업이다!
    // puppeteer.launch({옵션}) : 퍼펫티어 시작하기
    // headless: true 하면 브라우저를 실행시킬때 눈에 보여줄건지 말건지 설정하게된다.
    // true하면 눈에 안보임. false하면 눈에 보임. 성능은 눈에 보이는게 더 느림.
    const browser = await puppeteer.launch({ headless: false })

    // 새 페이지 열기
    const page = await browser.newPage()

    // 페이지 열때 사이즈 조절하기
    await page.setViewport({ width: 1280, height: 720})

    // 페이지 이동 .goto
    // goto가 많으면 서버에 무리를 준다. 많이 걸어야하면 waitForTimeout를 쓰는게 좋다! 쉬엄쉬엄해야지 안그러면 트래픽이 과해져서 해당 페이지에 대한 공격이라 인식될 수 있다. 그럼 IP 막힐 수 있음.
    await page.goto("https://finance.naver.com/item/sise.naver?code=005930")

    // 페이지 이동하고 html 등이 다 그려지고 1초정도 기다리기 위해 쓰는 문장. 쉬엄쉬엄
    // 너무 균일하게 1초씩 딜레이되면 이또한 IP 막히는 요인이 될 수 있다. 랜덤으로 타임을 처리 할 수 있는게 좋다.
    await page.waitForTimeout(1000)

    // el는 프레임 태그들을 의미한다. 태그 갯수만큼 함수가 실행된다.
    const framePage = await page.frames().find((el) => (el.url().includes("/item/sise_day.naver?code=005930")))


    for(let i = 3; i <= 7 ; i++){
         // $eval과 $$eval의 차이는 전자는 선택자 하나만 골라오는거고, 후자는 복수의 선택자를 가져오는거다.
        const date = await framePage.$eval(`body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(1) > span`, (el) => (el.textContent));
        const price = await framePage.$eval(`body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(2) > span`, (el) => (el.textContent));
        console.log(`날짜: ${date}, 종가:${price}`);
    }

    // 크롤링 후 브라우저 종료
    await browser.close();
}
startCrawling()