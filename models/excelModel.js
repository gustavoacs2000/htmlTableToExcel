import xslx from 'xlsx';

export default class excel {
    constructor() {

    };

    async htmlTableToExcel(tableElement, fileName) {
        // Extract Data (create a workbook object from the table)
        var workbook = XLSX.utils.table_to_book(tableElement);
        // Process Data (add a new row)
        var ws = workbook.Sheets["Sheet1"];
        XLSX.utils.sheet_add_aoa(ws, [["Created " + new Date().toISOString()]], { origin: -1 });
        // Package and Release Data (`writeFile` tries to write and save an XLSB file)
        XLSX.writeFile(workbook, fileName);
    };

    async writeFile(data, dir, fileName) {
        var workbook = xlsx.utils.book_new();
        var sheets = [];
        const chaves = Object.keys(data);
        for (var i = 0; i < chaves.length; i++) {
            sheets[chaves[i]] = await xlsx.utils.json_to_sheet(data[chaves[i]]);
            await xlsx.utils.book_append_sheet(workbook, sheets[chaves[i]], chaves[i]);
        }
        await xlsx.writeFile(workbook, `${dir}/${fileName}.xlsx`);
    };


}