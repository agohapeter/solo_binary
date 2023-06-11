const puppeteer = require('puppeteer');

const email = 'agohapeter55680@gmail.com';
const emailPassWord = 'eM#55680KA"';


const solohitech = async () => {

  const browser = await puppeteer.launch({ headless: false, timeout: 120000, });
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(700000);
  await page.setViewport({ width: 1100, height: 600 });
  //  await page.goto('https://binaryanalyser.com/')
  await page.goto('https://oauth.deriv.com/oauth2/authorize?app_id=22168&l=EN&signup_device=desktop&date_first_contact=2023-03-31');

  //await page.waitForNavigation({ waitUntil: 'networkidle2' });


  // const solohitech = () => {
  //   console.log('solohitechnology001')
  // }

  // await page.waitForSelector('#movetoderiv > div > div.carousel_section > div.carousel_section__mobile > div:nth-child(1) > a > button > div', { timeout: 200000 });
  // await page.click('#movetoderiv > div > div.carousel_section > div.carousel_section__mobile > div:nth-child(1) > a > button > div');

  // await page.waitForNavigation({ waitUntil: 'networkidle2' });
  // setTimeout(solohitech, 7000)
  // await page.goto('https://oauth.deriv.com/oauth2/authorize?app_id=16929&l=en&brand=deriv&date_first_contact=2023-03-30&signup_device=desktop&utm_source=https://www.binary.com/&platform=')



  const selector = '#txtEmail';
  await page.waitForSelector(selector);
  await page.focus(selector);
  await page.keyboard.type(email, { delay: 200 })

  //password: #txtPass

  const passwordSelector = '#txtPass';
  await page.waitForSelector(passwordSelector)
  await page.focus(passwordSelector);
  await page.keyboard.type(emailPassWord, { delay: 200})

  // login: #frmLogin > div:nth-child(3) > button

  await page.waitForSelector('#frmLogin > div:nth-child(3) > button');
  await page.click('#frmLogin > div:nth-child(3) > button');

  await page.waitForNavigation({ waitUntil: 'networkidle0' })
  await page.goto('https://smarttrader.deriv.com/en/trading?currency=USD&market=synthetics&underlying=R_100&formname=matchdiff&duration_amount=1&duration_units=t&amount=10&amount_type=stake&expiry_type=duration&prediction=0');



  //console.log(solomoney.length)
  // const em = 20000

  // const getcash = solomoney + em
  // console.log(getcash)

  // const sololen = solomoney.slice(-4)
  // console.log(sololen)
  await page.waitForNavigation({ waitUntil: 'networkidle2' })
  const puppeteer1 = require('puppeteer')
  const browser1 = await puppeteer1.launch({ headless: false, timeout: 40000 });
  const page1 = await browser1.newPage();
  await page.setViewport({ width: 1100, height: 600 })
  await page.setDefaultNavigationTimeout(700000);
  await page1.goto('https://binarybot.live/ldp/', {  timeout: 120000, })




setTimeout(() => {
  
  
  setInterval(async () => {



 //console.log(solomoney);

    const array = [];
    await page1.waitForSelector('#digits');
    const solotech = await page1.evaluate(() => {
      const value = document.querySelector('#digits').textContent;
      return value.toString();
    });

    console.log(solotech);
    array.push(solotech);
    console.log(array);

    const solo = array.map(str => str.replace(/\D/g, '')).join('');
    console.log(solo);
    const lastSixDigits = solo.slice(-6);
    console.log(lastSixDigits);

    const lastSixDigitsString = `${lastSixDigits}`;
    const [a, b, c, d, e, f] = lastSixDigitsString;

    console.log(a, b, c, d, e, f);

    const six = a === b && b === c && c == d &&  d === e && e === f;
    const five = b === c && c == d &&  d === e && e === f;
    const four = c == d &&  d === e && e === f;
    const three = d === e && e === f;
    const two =  e === f;

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

    const prediction = three;

    ///////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////


    if ( prediction ) {
      try {

//////////////////////////////////////////////////////
        // await page.waitForSelector('#prediction')
            // await page.select('#prediction', str);
        const band = f
        // console.log('the last prediction number is ' + str);
        const solohitech = band
        const spanElement = await page.$('#prediction_row > div.big-col > div > div > span')
        await page.evaluate((element, value) => {
          element.textContent = value;
        }, spanElement, solohitech)
        
        
        // const getPrediction = await page.evaluate(() => {
        //   const predictionvalue = document.querySelector('#prediction');
        //   predictionvalue.value = f;
        //   return predictionvalue
        // });

        // console.log(getPrediction)

        //#purchase_button_bottom
        
        // await page.setJavaScriptEnabled(false); // Disable JavaScript
        await page.waitForSelector('#purchase_button_bottom')
        await page.evaluate(() => {
          const button = document.querySelector('#purchase_button_bottom');
          button.click();
        });


        // await page.setJavaScriptEnabled(true); // Re-enable JavaScript

        await page.$('#close_confirmation_container', { visible: true, timeout: 300000 });
        await page.click('#close_confirmation_container');

        //await page.evaluate(() => location.reload(true));
        //await page.reload();
      } catch (e) {
        console.log(e);
      }
    }
    
    
    
    

  }, 0.200);



}, 4000);
  // if (e === f) {

  //   try {



  // } catch (e) {
  //   console.log(e)
  //}
  //}



  // setInterval(async () => {

  //try {
  // console.log(solotech)
  // const cleanedString = solotech.replace(/\s+/g, '');
  // console.log( 'this is clean staring ' + cleanedString);

  // Array.push(cleanedString);
  // console.log( 'this is array ' + Array);

  // const allSixArrayNumbers = Array[0].slice(-6);
  // console.log('this is last six ' + allSixArrayNumbers)

  // const string = await page.evaluate((num) => num.toString(), allSixArrayNumbers)
  // const [a, b, c, d, e, f] = string;

  // console.log( 'this is last three ' + d, e, f);
  // if (e === f) {



  // const soloVal = await page.evaluate(() => {
  //     const predictionVal = document.querySelector('#predition').textContent;
  //     predictionVal.value = str ;
  //     return predictionVal.value ;
  // });

  // console.log(soloVal);

  // await page.waitForNavigation()



  // }

  // } catch (e) {
  //     console.log(e)
  // }




  // }, 0.500);






}


solohitech()









