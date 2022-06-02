import puppeteer from "puppeteer";
import { Starbucks } from "./models/starbucksSchema.js";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/Mini-Project1");

async function startCrawling() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.starbucks.co.kr/menu/drink_list.do");
  await page.waitForTimeout(1000);

  for (let i = 1; i <= 30; i++) {
    const name = await page.$eval(
      `#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(6) > ul > li:nth-child(${i}) > dl > dd`,
      (el) => el.textContent
    );
    const img2 = await page.$eval(
      `#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(6) > ul > li:nth-child(${i}) > dl > dt > a > img`,
      (el) => el.src
    );

    let menu = new Starbucks({
      name,
      img: img2,
    });
    await menu.save();
    console.log(`이름: ${name}, 이미지: ${img2}`);
  }
  await browser.close();
}
startCrawling();
