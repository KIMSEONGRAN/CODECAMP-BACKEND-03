import puppeteer from 'puppeteer';
import mongoose from 'mongoose';
import { Stock } from './models/stock.model.js';

// 몽고DB 접속하기
// 몽고디비가 켜져있어야(도커 컴포즈가 실행중이여야함 꼭!!!!)
// 실행순서는 backend > crawler 순이다.
mongoose.connect("mongodb://localhost:27017/mydocker03")

async function startCrawling(){
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 720})
    await page.goto("https://finance.naver.com/item/sise.naver?code=005930")
    await page.waitForTimeout(1000)
    const framePage = await page.frames().find((el) => (el.url().includes("/item/sise_day.naver?code=005930")))


    for(let i = 3; i <= 7 ; i++){
        const date = await framePage.$eval(`body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(1) > span`, (el) => (el.textContent));
        const price = await framePage.$eval(`body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(2) > span`, (el) => (el.textContent));
        console.log(`날짜: ${date}, 종가:${price}`);

        const stock = new Stock({
            name: "삼성전자",
            date: date,
            price: Number(price.replace(",",""))
        })
        await stock.save() // 여기서 몽고디비에 데이터를 집어넣을 수 있다.
    }

    // 크롤링 후 브라우저 종료
    await browser.close();
}
startCrawling()