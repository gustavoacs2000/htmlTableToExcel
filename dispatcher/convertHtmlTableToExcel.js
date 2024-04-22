import { getUrl, initializeDriver, findRowsElements, extractRowsContent} from '../models/seleniumModel.js'

async function convertHtmlTableExcel() {
    try {        
        const driver = initializeDriver()
        const url = `https://tecnoblog.net/responde/70-atalhos-para-controle-e-navegacao-do-windows-10/`
        await getUrl(driver, url);
        let htmlTableRows = await findRowsElements(driver);
        let htmlTableContent = await extractRowsContent(htmlTableRows);
        console.log(`Cheguei aqui`);
    } catch (err) {
        console.log(`Fatal Error:\n${err}`);
    };
};

export {convertHtmlTableExcel}