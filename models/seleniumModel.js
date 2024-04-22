import chrome from "selenium-webdriver/chrome.js";
import chromedriver from 'chromedriver';
import { By, until } from 'selenium-webdriver';


async function getUrl(driver, url) {
    try {
        console.log(`Trying to open url ${url}`);
        await driver.get(url);
        console.log(`Website ${url} openned`);
    } catch (err) {
        console.log(`Error while trying to open url ${url}:\n${err}`);
        throw new Error(`Error while trying to open url ${url}:\n${err}`);
    };
};

function initializeDriver() {
    let chromeOptions = new chrome.Options();
    console.log(`Initializing chrome driver instance`);
    chromeOptions.addArguments("test-type");
    chromeOptions.addArguments("start-maximized");
    chromeOptions.addArguments("--js-flags=--expose-gc");
    chromeOptions.addArguments("--enable-precise-memory-info");
    chromeOptions.addArguments("--disable-popup-blocking");
    chromeOptions.addArguments("--disable-default-apps");
    chromeOptions.addArguments("--disable-infobars");
    chromeOptions.addArguments('--enable-logging')
    chromeOptions.addArguments('--kiosk-printing');
    chromeOptions.addArguments("--profile-directory=Default");
    return chrome.Driver.createSession(chromeOptions, new chrome.ServiceBuilder(chromedriver.path).build());
};

async function findRowsElements(driver) {
    try {
        let tableElement = await driver.findElement(By.tagName(`table`));
        let rows = await tableElement.findElement(By.tagName(`tr`));
        return rows
    } catch (error) {
        console.log(`Error while trying to get table rows elements:\n${err}`);
        throw new Error(`Error while trying to get table rows elements:\n${err}`);
    };
};

async function extractRowsContent(rows){
    try{
        rows.findElement(By.tagName(`td`))
        for(let row of rows){
        console.log(row)
    };
} catch(err){
    console.log(`Error while generating array of objects `)
}
};

export {
    getUrl,
    initializeDriver,
    findRowsElements,
    extractRowsContent
}