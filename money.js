const puppeteer = require('puppeteer');



const solo = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('')
}