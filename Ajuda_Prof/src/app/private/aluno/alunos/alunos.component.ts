import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Aluno } from '../aluno.model';
import { MockAlunos } from '../mock-alunos';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAdicionarAlunoComponent } from './modal-adicionar-aluno/modal-adicionar-aluno.component';
import { AlunoService } from 'src/app/services/private/aluno.service';
import { filter, first, Subject, takeUntil } from 'rxjs';
import { Turma } from '../../turma/turma.model';
import { TurmaService } from 'src/app/services/private/turma.service';
import { EncryptionService } from 'src/app/services/shared/encryption.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss'],
})
export class AlunosComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'idAluno',
    'primeiroNome',
    'ultimoNome',
    'email',
    'actions',
  ];
  dataSource = new MatTableDataSource<Aluno>([]);

  turmaAtual: string;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  idProfessor: number;
  idTurma: number;
  ano: number;
  sig: string;

  alunos: Aluno[];
  alunoEditavelAtual: Aluno;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private alunoService: AlunoService,
    private turmaService: TurmaService,
    private encriptionService: EncryptionService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.idProfessor = Number(encriptionService.decrypt(params['professor']));
      this.idTurma = Number(encriptionService.decrypt(params['turma']));
      this.ano = Number(encriptionService.decrypt(params['ano']));
      this.sig = encriptionService.decrypt(params['sig']);
    });
  }

  ngOnInit(): void {
    console.log(this.idProfessor);
    console.log(this.idTurma);

    /*const previousUrl = history.state.prevPage ?? null;
    if (!previousUrl) {
      console.log('page was refreshed!');
    } else {
      this.turmaAtual = this.turmaService.getTurmaSelecionada();
    }*/

    this.turmaAtual = this.ano + 'º' + this.sig;
    console.log(this.turmaAtual);

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
    this.alunoService.setAlunoEditavelAtual(element);
    const modalRef = this.modalService.open(ModalAdicionarAlunoComponent);
    modalRef.componentInstance.isAdding = false;
  }

  eliminarAluno(element: Aluno) {
    console.log(element);
  }

  adicionarAluno() {
    const modalRef = this.modalService.open(ModalAdicionarAlunoComponent);
    modalRef.componentInstance.name = 'World';
  }

  adicionarTeste() {}
}
