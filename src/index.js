const puppeteer = require("puppeteer");

async function scrape() {
  // open browser  
  // use this so it works in gitpod 
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  // this was the original code before the gitpod fix
  // const browser = await puppeteer.launch({});

  const url = "https://everynoise.com/new_releases_by_genre.cgi?genre=psychedelic%20trance&region=US"

  // opens a new page to scrape
  const page = await browser.newPage();

  // goes to supplied url
  await page.goto(url);
  await Promise.all([
    // page.click('button[type=submit]'),
    page.click("input[type=checkbox]"),
    page.waitForNavigation({ waitUntil: 'networkidle2' })
  ]);

  var testElement = await page.waitForSelector(
    // "#meanings > div.css-ixatld.e15rdun50 > ul > li:nth-child(1) > a"
    "body > form > table > tbody > tr > td > div > div"
  );
  var text = await page.evaluate((testElement) => testElement.textContent, testElement);
  // console.log(text)

  const rows = await page.$$('body > form > table > tbody > tr > td:nth-child(2) > div:nth-child(2) > div');
  const genres = await page.$$('.genrename');
  const namez = await page.$$('.album');

  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];

    const genreName = await genre.$eval('a', x => x.textContent);
    console.log('genre: ', genreName)
  }

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];

    const label = await row.$eval('a:nth-child(3)', element => element.textContent);
    const value = await row.$eval('a:nth-child(5)', element => element.textContent);
    const href = await row.$eval('a:nth-child(5)', element => element.getAttribute('href'));

    console.log('label:', label, 'value:', value, 'href:', href)
  }

  // for (let i = 0; i < namez.length; i++) {
  //   const name = namez[i];

  //   const namezName = await name.$eval('b', x => x.textContent);
  //   console.log('namez: ', namezName)
  // }
  var names = await page.evaluate(() => {
    return Array.from(document.querySelectorAll(".album")).map(x => x.textContent)
  })
  console.log(names)
  console.log(rows.length)
  console.log(genres.length)
  console.log(genres.textContent)
  // console.log(text);
  browser.close();
}
scrape();
