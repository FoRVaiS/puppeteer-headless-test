const config = require('../config.js');
const { logger } = config;

(async () => {
    try {
        const headless = process.argv[2] === 'headless';
        const browser = await require('puppeteer').launch({ headless });
        const page = await browser.newPage();

        let timeTotal = 0;

        for (let i = 0; i < 10; ++i) {
            const timeStart = (new Date()).getTime();
            await page.goto('http://google.ca');
            timeTotal += (new Date()).getTime() - timeStart;
        }

        logger.info(`Node ${process.version}`);
        logger.info(`Running Puppeteer ${headless ? 'Headless' : 'Full'}: ${timeTotal / 10}ms average load time.`)

        await browser.close();
    } catch (e) {
        logger.info(e);
    }
})()