import { Component, OnInit } from "@angular/core";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AlunoService } from "src/app/services/private/aluno.service";
import { ModalAdicionarTurmaComponent } from "../turma/modal-adicionar-turma/modal-adicionar-turma.component";

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {
  

  title = 'appBootstrap';
  
  closeResult: string;

  constructor(private modalService: NgbModal, private alunoService: AlunoService) { }

  ngOnInit(): void {

  }

  open() {
    this.modalService.open(ModalAdicionarTurmaComponent, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
      return  `with: ${reason}`;
    }
  }
}
