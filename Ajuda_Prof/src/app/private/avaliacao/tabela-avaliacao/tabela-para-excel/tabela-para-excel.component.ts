import { Component, Input, OnInit } from '@angular/core';
import { Turma } from 'src/app/private/turma/turma.model';
import { ExcelGeneratorService } from './excel-generator.service';

@Component({
  selector: 'app-tabela-para-excel',
  templateUrl: './tabela-para-excel.component.html',
  styleUrls: ['./tabela-para-excel.component.scss']
})
export class TabelaParaExcelComponent implements OnInit {

  @Input() nomeTabela: string;
  @Input() arrayTable: any[];

  constructor(private tabelaExcelService: ExcelGeneratorService) { }

  ngOnInit(): void {
  }

  exportTable() {
    console.log()
    this.tabelaExcelService.exportTableToExcel(this.nomeTabela);
  }

  exportTableFromArray(){
    console.log(this.arrayTable);
    this.tabelaExcelService.exportArrayToExcel(this.arrayTable);
  }

}
