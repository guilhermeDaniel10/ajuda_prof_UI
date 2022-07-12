import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AlunoService } from 'src/app/services/private/aluno.service';
import { Tabela } from 'src/app/shared/tabela/tabela.model';
import { Aluno } from '../aluno.model';
import { MockAlunos } from '../mock-alunos';
import { TabelaAlunos } from './tabela-alunos.model';

const ELEMENT_DATA: Aluno[] = [MockAlunos.ALUNOS[1]];

@Component({
  selector: 'app-tabela-alunos',
  templateUrl: './tabela-alunos.component.html',
  styleUrls: ['./tabela-alunos.component.scss'],
})
export class TabelaAlunosComponent implements OnInit {
  displayedColumns: string[] = [
    'idAluno',
    'primeiroNome',
    'ultimoNome',
    'email',
  ];
  alunos: Aluno[];
  dados: TabelaAlunos[];
  totalPaginacao = 0;
  dadosTabela: Tabela;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private alunoService: AlunoService,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  ngOnInit(): void {
    //TODO: Alterar aqui
    this.alunoService
      .getAlunosDaTurmaByProfessor('teste1', 10, 'M')
      .subscribe((data: Aluno[]) => {
        this.alunos = data;
        this.initiateTabela();
      });
  }

  initiateTabela() {
    this.dados = [];

    this.alunos.forEach((value) => {
      this.dados.push({
        primeiroNome: value.primeiroNome,
        ultimoNome: value.ultimoNome,
        email: value.email,
        numeroAluno: value.numeroAluno,
      });
    });

    this.dadosTabela = {
      columnDef: ['primeiroNome', 'ultimoNome', 'email', 'numeroAluno'],
      header: ['Primeiro Nome', 'Último Nome', 'Email', 'Número Aluno'],
      content: this.dados,
      paginacao: true,
    };
  }



}
