const puppeteer = require('puppeteer');

//Your URL here
var url='https://djsnipa1.github.io/3d-portfolio'; 

(async () => {
  const browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox'] });

const page = await browser.newPage();
await page.goto(url);


console.log(await page.content());
  await page.screenshot({path: 'screenshot.png', fullPage: true});
})();

