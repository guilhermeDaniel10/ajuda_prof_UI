import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AlunoService } from 'src/app/services/private/aluno.service';
import { Aluno } from '../aluno.model';
import { MockAlunos } from '../mock-alunos';

const ELEMENT_DATA: Aluno[] = [MockAlunos.ALUNOS[1]];

@Component({
  selector: 'app-tabela-alunos',
  templateUrl: './tabela-alunos.component.html',
  styleUrls: ['./tabela-alunos.component.scss'],
})
export class TabelaAlunosComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'idAluno',
    'primeiroNome',
    'ultimoNome',
    'email',
  ];
  dataSource = new MatTableDataSource<Aluno>();
  alunos: Aluno[];
  totalPaginacao = 0;

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
        //this.dataSource = new MatTableDataSource(this.alunos);

        this.dataSource = new MatTableDataSource(this.alunos);
        this.sortAlunos();

        console.log(this.dataSource);
      });
  }

  ngAfterViewInit() {}

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.alunos = [...this.alunos, MockAlunos.ALUNOS[1]];
    this.dataSource = new MatTableDataSource(this.alunos);
    this.sortAlunos();
  }

  removeData() {}

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  sortAlunos() {
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = this.pathDataAccessor;
    this.dataSource.paginator = this.paginator;
    this.totalPaginacao = this.alunos.length;
  }

  pathDataAccessor(item: any, path: string): any {
    return path.split('.').reduce((accumulator: any, key: string) => {
      return accumulator ? accumulator[key] : undefined;
    }, item);
  }
}
