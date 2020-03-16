const puppeteer = require('puppeteer')

void (async () => {
  try {
    const browser = await puppeteer.launch()

    const page = await browser.newPage()

    start        = 'https://huis.vub.ac.be/corona/evaluatie.php?uid=465603337158319&'

    // geslach; 1 = man, 2 = vrouw
    geslacht     = 'geslacht='       + '1'

    geboortejaar = '&geboortejaar='  + '1993'

    land         = '&land=+'         +'Belgium'

    // 1 = Ja, 2 = Nee
    all_no = false

    if (all_no) {
      // all no responses
      koorts       = '&koorts='        + '2'
      hoesten      = '&hoesten='       + '2'
      keel         = '&keel='          + '2'
      spier        = '&spier='         + '2'
      adem         = '&adem='          + '2'
      hoofdpijn    = '&hoofdpijn='     + '2'
      pijn         = '&pijn='          + '2'
      dyspnoe      = '&dyspnoe='       + '2'
      slijm        = '&slijm='         + '2'
      neus         = '&neus='          + '2'
      contact      = '&contact='       + '2'
      contact2     = '&contact2='      + '2'
      china        = '&china='         + '2'
      risico       = '&risico='        + '2'
      console.log('Op elke vragen hebben we "NEEN" geantwoord!\n')
    } else {
      // all yes responses
      koorts       = '&koorts='        + '1'
      hoesten      = '&hoesten='       + '1'
      keel         = '&keel='          + '1'
      spier        = '&spier='         + '1'
      adem         = '&adem='          + '1'
      hoofdpijn    = '&hoofdpijn='     + '1'
      pijn         = '&pijn='          + '1'
      dyspnoe      = '&dyspnoe='       + '1'
      slijm        = '&slijm='         + '1'
      neus         = '&neus='          + '1'
      contact      = '&contact='       + '1'
      contact2     = '&contact2='      + '1'
      china        = '&china='         + '1'
      risico       = '&risico='        + '1'
      console.log('Op elke vragen hebben we "JA" geantwoord!\n')

    }

    end          = '&Submit=Klik%C2%A0hier%C2%A0voor%C2%A0uw%C2%A0resultaat'

    let website_url = start + geslacht + geboortejaar + land + koorts + hoesten +
                      keel + spier + adem + hoofdpijn + pijn + dyspnoe + slijm +
                      neus + contact + contact2 + china +  risico + end

    console.log('Webiste = \n ' + website_url +'\n')

    await page.goto( website_url )

    const RESULT_SELECTOR = 'body > div > font > table > tbody > tr > td > p:nth-child(3)'

    const RESULT_SELECTOR2 = 'body > div > font > table > tbody > tr > td > p:nth-child(5)'

    let result = await page.evaluate((sel) => {
        return document.querySelector(sel).innerHTML;
      }, RESULT_SELECTOR);

    let result2 = await page.evaluate((sel) => {
          return document.querySelector(sel).innerHTML;
        }, RESULT_SELECTOR2);

    result = result.replace(/\s{2,}/g, ' ')
    result2 = result2.replace(/\s{2,}/g, ' ')

    console.log('Eerste deel results = \n\n ' + result + '\n')
    console.log('Tweede deel results = \n\n ' + result2)

    await page.screenshot({
      path: './screenshots/page1.png'
    })

    await page.pdf({
      path: './pdfs/page1.pdf'
    })

    await browser.close()
  } catch(error) {
    console.log(error)
  }
})()
