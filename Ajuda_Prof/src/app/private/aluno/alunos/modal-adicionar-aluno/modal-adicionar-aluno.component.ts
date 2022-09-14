import { Component, NgZone, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-adicionar-aluno',
  templateUrl: './modal-adicionar-aluno.component.html',
  styleUrls: ['./modal-adicionar-aluno.component.scss']
})
export class ModalAdicionarAlunoComponent implements OnInit {

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
