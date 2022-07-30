import { Component, Input, NgZone, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-adicionar-turma',
  templateUrl: './modal-adicionar-turma.component.html',
  styleUrls: ['./modal-adicionar-turma.component.scss']
})
export class ModalAdicionarTurmaComponent implements OnInit{

  closeResult = '';

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal, private ngZone: NgZone) {}
  ngOnInit(): void {
  
  }

  

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
