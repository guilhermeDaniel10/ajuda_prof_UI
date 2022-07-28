import { Component, HostListener, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Teste } from '../../turma/teste/teste.model';
import { TESTE } from '../../turma/teste/teste.mock';
import { Resposta } from '../../turma/teste/resposta/resposta.model';
import { RESPOSTA } from '../../turma/teste/resposta/resposta.mock';
import { Tabela } from 'src/app/shared/tabela/tabela.model';
import { TabelaAvaliacao } from './tabela-avaliacao.model';
import { Pergunta } from '../../turma/teste/pergunta/pergunta.model';


@Component({
  selector: 'app-tabela-avaliacao',
  templateUrl: './tabela-avaliacao.component.html',
  styleUrls: ['./tabela-avaliacao.component.scss']
})
export class TabelaAvaliacaoComponent implements OnInit {

  testeMock: Teste = TESTE[0];
  perguntas: Pergunta[] = [];
  respostaMock: Resposta[] = RESPOSTA;
  tooltips: string[] = [];

  dataSource = new MatTableDataSource();
  generateTable = false;
  columns: string[];
  tableInfo: { column: number; header: string | number }[];
  data: any[];
  dados: any;


  ngOnInit(): void {
    this.initTable();
    this.initTooltips();
    
    this.generateTable = true;
  }

  inputChange(event: any): void {
    console.log(event);
  }

  initTable() {
    this.tableInfo = [];
    this.dados = [];


    this.respostaMock.map((value) => {
      const nome = value.primeiroNome + " " + value.ultimoNome;
      const respostasCotacao = value.cotacaoResposta;
      let tempDados: TabelaAvaliacao[] = [];


      tempDados.push({ info: nome });
      respostasCotacao.map((value) => {
        tempDados.push({ info: value.cotacaoResposta });
      })
      console.log(tempDados);
      this.dados.push(tempDados);
    })
    console.log(this.dados);



    const cotacaoRespostas = this.respostaMock.map(value => value.cotacaoResposta);
    console.log(cotacaoRespostas);
    this.data = this.dados;
    this.tableInfo.push({ column: 0, header: "Nome" });
    this.testeMock.perguntas.map((value) => { this.tableInfo.push({ column: value.iteracao, header: value.pergunta }) });
    this.columns = this.tableInfo.map(value => String(value.column));
    console.log(this.tableInfo);

  };

  initTooltips(){
    this.perguntas = this.testeMock.perguntas;
    this.tooltips.push('Nome do aluno');
    this.perguntas.map(value => this.tooltips.push("Pergunta vale " + value.cotacao + " valores."))
  }
}