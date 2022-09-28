import {
  Component,
  HostListener,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Teste } from '../../turma/teste/teste.model';
import { TESTE } from '../../turma/teste/teste.mock';
import { Resposta } from '../../turma/teste/resposta/resposta.model';
import { RESPOSTA } from '../../turma/teste/resposta/resposta.mock';
import { Tabela } from 'src/app/shared/tabela/tabela.model';
import { TabelaAvaliacao } from './tabela-avaliacao.model';
import { Pergunta } from '../../turma/teste/pergunta/pergunta.model';
import { Turma } from '../../turma/turma.model';
import { TooltipPosition } from '@angular/material/tooltip';
import { ExcelGeneratorService } from './tabela-para-excel/excel-generator.service';
import { CotacaoResposta } from '../../turma/teste/resposta/cotacao-resposta/cotacao-resposta.model';

@Component({
  selector: 'app-tabela-avaliacao',
  templateUrl: './tabela-avaliacao.component.html',
  styleUrls: ['./tabela-avaliacao.component.scss'],
})
export class TabelaAvaliacaoComponent implements OnInit {
  testeMock: Teste = TESTE[0];
  perguntas: Pergunta[] = [];
  respostaMock: Resposta[] = RESPOSTA;
  tooltips: string[] = [];
  turma: Turma;
  nomeTabela: string = 'MaterialTable';
  newData: any[] = [];

  dataSource = new MatTableDataSource();
  generateTable = false;
  columns: string[];
  tableInfo: {
    column: number;
    header: string | number;
    cotacaoMaxima: number | null;
  }[];
  data: any[];
  dados: any;
  arrInputs: number[];
  validInfo: {
    column: number;
    header: string | number;
    cotacaoMaxima: number | null;
  }[];

  constructor(private tabelaExcelService: ExcelGeneratorService) {}

  ngOnInit(): void {
    this.initTable();
    this.initTooltips();

    this.generateTable = true;
  }

  inputChange(event: any, column: string, aluno: any): void {
    /*const eventData = event.target?.value;

    this.processChanges(eventData, column, aluno);
*/
  }

  processChanges(eventData: any, column: string, aluno: any) {
    const iteration = aluno[0].iteration;
    this.newData[iteration][column].info = eventData;
  }

  sumCotacoes(arrCotacoes: CotacaoResposta[]) {
    return arrCotacoes.reduce((a, b) => a + b.cotacaoResposta, 0);
  }

  initTable() {
    this.turma = this.testeMock.turma;
    this.tableInfo = [];
    this.validInfo = [];
    this.dados = [];

    this.respostaMock.map((value, i) => {
      const nome = value.primeiroNome + ' ' + value.ultimoNome;
      const respostasCotacao = value.cotacaoResposta;
      let tempDados: TabelaAvaliacao[] = [];

      tempDados.push({ iteration: i, info: nome });
      respostasCotacao.map((value) => {
        tempDados.push({ iteration: i, info: value.cotacaoResposta });
      });
      let total = this.sumCotacoes(respostasCotacao);
      tempDados.push({ iteration: i, info: total });
      this.dados.push(tempDados);
    });

    const cotacaoRespostas = this.respostaMock.map(
      (value) => value.cotacaoResposta
    );
    this.data = this.dados;
    this.newData = this.data;
    this.tableInfo.push({ column: 0, header: 'Nome', cotacaoMaxima: null });
    this.testeMock.perguntas.map((value) => {
      this.tableInfo.push({
        column: value.iteracao,
        header: value.pergunta,
        cotacaoMaxima: value.cotacao,
      });
      this.validInfo.push({
        column: value.iteracao,
        header: value.pergunta,
        cotacaoMaxima: value.cotacao,
      });
    });
    this.tableInfo.push({
      column: this.tableInfo.length,
      header: 'Total',
      cotacaoMaxima: null,
    });

    this.columns = this.tableInfo.map((value) => String(value.column));
  }

  initTooltips() {
    this.perguntas = this.testeMock.perguntas;
    this.tooltips.push('Nome do aluno');
    this.perguntas.map((value) =>
      this.tooltips.push('Pergunta vale ' + value.cotacao + ' valores.')
    );
  }

  exportTable() {
    this.tabelaExcelService.exportTableToExcel(this.nomeTabela);
  }

  checkInput(event, input: any = null, lineNumber, column, max) {
    let value = +event;
    if (event < 0) value = 0;
    if (value > max) value = max;

    console.log(input.value);
    console.log(max);
    this.data[lineNumber][column].info = value;

    if (input.value != value) {
      const start = input.selectionStart ? input.selectionStart - 1 : -1;
      input.value = value;
      if (start > 0) input.selectionStart = input.selectionEnd = start;
    }
    const lineLength = this.data[lineNumber].length;

    const sum = this.somarArray(lineNumber, column, value);

    this.data[lineNumber][lineLength - 1].info = sum;
  }

  somarArray(lineNumber, currentIndex: number, currentInput: number): number {
    let sum = 0;
    for (let i = 1; i < this.data[lineNumber].length - 1; i++) {
      if (i != currentIndex) {
        sum += this.data[lineNumber][i].info;
      }
    }
    sum += currentInput;

    return Math.round((sum + Number.EPSILON) * 100) / 100;
  }
}
