import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-adicionar-turma',
  templateUrl: './modal-adicionar-turma.component.html',
  styleUrls: ['./modal-adicionar-turma.component.scss']
})
export class ModalAdicionarTurmaComponent implements OnInit {

  @Input()

  title = 'appBootstrap';
  
  closeResult: string;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
