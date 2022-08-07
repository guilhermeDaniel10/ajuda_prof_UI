import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Aluno } from '../aluno.model';
import { MockAlunos } from '../mock-alunos';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['idAluno', 'primeiroNome', 'ultimoNome', 'email', 'actions'];
  dataSource = new MatTableDataSource<Aluno>([]);

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  idProfessor: number;
  idTurma: number;
  alunos: Aluno[];

  constructor(private route: ActivatedRoute,
    private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.idProfessor = params['professor'];
      this.idTurma = params['turma'];
    });
  }

  ngOnInit(): void {
    console.log(this.idProfessor);
    console.log(this.idTurma);
    this.getAlunos();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  //TODO: Depois fazer o pedido a api
  getAlunos() {
    this.alunos = MockAlunos.ALUNOS;
    this.dataSource.data = this.alunos;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editarAluno(element: Aluno) {
    console.log(element);
  }

  eliminarAluno(element: Aluno) {
    console.log(element);
  }

}
