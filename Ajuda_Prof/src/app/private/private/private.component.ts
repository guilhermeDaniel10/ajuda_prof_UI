import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlunoService } from 'src/app/services/private/aluno.service';
import { Tabela } from 'src/app/shared/tabela/tabela.model';
import { Aluno } from '../aluno/aluno.model';
import { TabelaAlunos } from '../aluno/tabela-alunos/tabela-alunos.model';
import { ModalAdicionarTurmaComponent } from '../turma/modal-adicionar-turma/modal-adicionar-turma.component';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss'],
})
export class PrivateComponent implements OnInit {
  title = 'appBootstrap';

  closeResult: string;
  alunos: Aluno[] = [];
  dados: TabelaAlunos[];

  constructor(
    private modalService: NgbModal,
    private alunoService: AlunoService
  ) {}

  ngOnInit(): void {
    this.alunoService
      .getAlunosDaTurmaByProfessor('teste1', 10, 'M')
      .subscribe((data: Aluno[]) => {
        this.alunos = data;
        //this.dataSource = new MatTableDataSource(this.alunos);
        this.fillDadosInput();
      });
  }

  fillDadosInput() {
    this.dados = [];
    let i = 1;
    this.alunos.forEach((value) => {
      this.dados.push({
        position: i,
        primeiroNome: value.primeiroNome,
        ultimoNome: value.ultimoNome,
        email: value.email,
        numeroAluno: value.numeroAluno,
      });
      i++;
    });
  }

  open() {
    this.modalService
      .open(ModalAdicionarTurmaComponent, {
        ariaLabelledBy: 'modal-basic-title',
      })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
