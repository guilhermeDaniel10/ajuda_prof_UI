import { Component, Input, OnInit } from '@angular/core';
import { Tabela } from 'src/app/shared/tabela/tabela.model';

@Component({
  selector: 'app-cotacoes',
  templateUrl: './cotacoes.component.html',
  styleUrls: ['./cotacoes.component.scss'],
})
export class CotacoesComponent implements OnInit {
  @Input() infoTabela: {
    column: number;
    header: string | number;
    cotacaoMaxima: number | null;
  }[];

  headers = ['Pergunta', 'Cotação Máxima'];

  dataSource: {
    "Pergunta": string | number;
    "Cotação Máxima": number | null;
  }[] = [];
  displayedColumns: string[] = ['pergunta', 'cotacaoMaxima'];
  dadosTabela: Tabela;

  constructor() {}

  ngOnInit(): void {
    console.log(this.infoTabela);
    this.fillDataTable();
  }

  fillDataTable() {
    let infoTable = this.infoTabela;

    let dados: any[] = [];
    this.infoTabela.map((value) => {
      this.dataSource.push({
        "Pergunta": value.header,
        "Cotação Máxima": value.cotacaoMaxima,
      });
    });
    console.log(this.dataSource);
  }
}
