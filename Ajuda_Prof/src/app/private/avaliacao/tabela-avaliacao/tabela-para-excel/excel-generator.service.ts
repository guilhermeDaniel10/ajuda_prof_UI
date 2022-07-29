import { Injectable } from '@angular/core';

import * as XLSX from "xlsx";


@Injectable({
  providedIn: 'root'
})
export class ExcelGeneratorService {

  constructor() { }

  getFileName(name: string | undefined) {
    let timeSpan = new Date().toISOString();
    let sheetName = name || "ExportResult";
    let fileName = `${sheetName}-${timeSpan}`;
    return { sheetName, fileName };
  };

  exportTableToExcel(tableId: string, name?: string) {
    let { sheetName, fileName } = this.getFileName(name);
    let targetTableElm = document.getElementById(tableId);
    console.log(targetTableElm);
    let wb = XLSX.utils.table_to_book(targetTableElm, <XLSX.Table2SheetOpts>{
      sheet: sheetName
    });
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  }

  exportArrayToExcel(arr: any[], name?: string) {
    let { sheetName, fileName } = this.getFileName(name);

    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.json_to_sheet(arr);
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  }
}
