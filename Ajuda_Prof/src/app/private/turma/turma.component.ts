import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TurmaService } from 'src/app/services/private/turma.service';
import { ModalAdicionarTurmaComponent } from './modal-adicionar-turma/modal-adicionar-turma.component';
import { TURMA } from './turma.mock';
import { Turma } from './turma.model';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.scss']
})
export class TurmaComponent implements OnInit {

  constructor(private turmaService: TurmaService, private modalService: NgbModal) { }

  longText: string = "testeteste";
  turmas: Turma[] = TURMA;
  closeResult: string;


  ngOnInit() {
    console.log(this.turmas);
  }

  getTurmasTeste() {
    this.turmaService.getAllTurmas().subscribe((data) => { console.log(data) });
  }

  adicionarTurma() {
    const modalRef = this.modalService.open(ModalAdicionarTurmaComponent);
    modalRef.componentInstance.name = 'World';
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
