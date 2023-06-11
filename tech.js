const puppeteer = require('puppeteer')

const email = "solohitechnology02@gmail.com";
const emailPassWord = "Solohitech09";

const solohitech = async () => {
    const browser = await puppeteer.launch({ headless: false, timeout: 120000 });
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(700000);
    await page.setViewport({ width: 1100, height: 600 });
    //  await page.goto('https://binaryanalyser.com/')
    await page.goto(
        "https://oauth.deriv.com/oauth2/authorize?app_id=16929&l=en&brand=deriv&date_first_contact=2023-03-30&signup_device=desktop&utm_source=https://www.binary.com/&platform="
    );

    //await page.waitForNavigation({ waitUntil: 'networkidle2' });

    // const solohitech = () => {
    //   console.log('solohitechnology001')
    // }

    // await page.waitForSelector('#movetoderiv > div > div.carousel_section > div.carousel_section__mobile > div:nth-child(1) > a > button > div', { timeout: 200000 });
    // await page.click('#movetoderiv > div > div.carousel_section > div.carousel_section__mobile > div:nth-child(1) > a > button > div');

    // await page.waitForNavigation({ waitUntil: 'networkidle2' });
    // setTimeout(solohitech, 7000)
    // await page.goto('https://oauth.deriv.com/oauth2/authorize?app_id=16929&l=en&brand=deriv&date_first_contact=2023-03-30&signup_device=desktop&utm_source=https://www.binary.com/&platform=')

    const selector = "#txtEmail";
    await page.waitForSelector(selector);
    await page.focus(selector);
    await page.keyboard.type(email, { delay: 200 });

    //password: #txtPass

    const passwordSelector = "#txtPass";
    await page.waitForSelector(passwordSelector);
    await page.focus(passwordSelector);
    await page.keyboard.type(emailPassWord, { delay: 200 });

    // login: #frmLogin > div:nth-child(3) > button

    await page.waitForSelector("#frmLogin > div:nth-child(3) > button");
    await page.click("#frmLogin > div:nth-child(3) > button");

    await page.waitForNavigation({ waitUntil: "networkidle0" });
    await page.goto(
        " https://smarttrader.deriv.com/en/trading?currency=USD&market=synthetics&underlying=R_100&formname=staysinout&duration_amount=2&duration_units=m&amount=10&amount_type=stake&expiry_type=duration&barrier_high=+10.13&barrier_low=-10.09 "
    );

    //await page.waitForNavigation({ waitUntil: "networkidle2" });
 try {
     setInterval(async () => {
         await page.waitForSelector('#purchase_button_top')
         await page.evaluate(() => {
             const button = document.querySelector("#purchase_button_top");
             button.click();
   
         });
   
         await page.waitForSelector("#close_confirmation_container", {
             visible: true,
             timeout: 300000,
         });
         await page.click("#close_confirmation_container")
     }, 150000);

 } catch (e) {
  console.log(e)
 }


    //   const puppeteer1 = require("puppeteer");
    //   const browser1 = await puppeteer1.launch({ headless: false, timeout: 40000 });
    //   const page1 = await browser1.newPage();
    //   await page.setDefaultNavigationTimeout(700000);
    //   await page1.goto("https://binarybot.live/ldp/");

    //   setInterval(async () => {
    // const array = [];
    // await page1.waitForSelector("#digits");
    // const solotech = await page1.evaluate(() => {
    //   const value = document.querySelector("#digits").textContent;
    //   return value.toString();
    // });

    // console.log(solotech);
    // array.push(solotech);
    // console.log(array);

    // const solo = array.map((str) => str.replace(/\D/g, "")).join("");
    // console.log(solo);
    // const lastSixDigits = solo.slice(-6);
    // console.log(lastSixDigits);

    // const lastSixDigitsString = `${lastSixDigits}`;
    // const [a, b, c, d, e, f] = lastSixDigitsString;

    // console.log(a, b, c, d, e, f);

    // const last = f;
    // const Slast = e
    // const Tlast = d



    // if ( last === '0' && Slast === '1' && Tlast === '2' || last === '1' && Slast === '2' && Tlast === '0' || last === '2' && Slast === '0' && Tlast === '1' ) {
    //   try {
    // const str = f;
    // const solo = str
    // const spanElement = await page.$("#prediction_row > div.big-col > div > div > span");

    // // Set the new value using page.evaluate()
    // await page.evaluate((element, value) => {
    //   element.textContent = value;
    // }, spanElement, solo);



    // await page.setJavaScriptEnabled(false); // Disable JavaScript
    // await page$('#purchase_button_top')
    // await page.evaluate(() => {
    //   const button = document.querySelector("#purchase_button_top");
    //   button.click();
    // });

    // await page.setJavaScriptEnabled(true); // Re-enable JavaScript

    // await page.waitForSelector("#close_confirmation_container", {
    //   visible: true,
    //   timeout: 300000,
    // });
    // await page.click("#close_confirmation_container");

    //await page.evaluate(() => location.reload(true));
    //await page.reload();
    //   } catch (e) {
    //     console.log(e);
    //   }
    // }








    //   }, 500);








};

solohitech();
