import {
  Component,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  ModalDismissReasons,
  NgbActiveModal,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { AlunoService } from 'src/app/services/private/aluno.service';

@Component({
  selector: 'app-modal-adicionar-aluno',
  templateUrl: './modal-adicionar-aluno.component.html',
  styleUrls: ['./modal-adicionar-aluno.component.scss'],
})
export class ModalAdicionarAlunoComponent implements OnInit {
  @Input() isAdding: boolean = true;
  closeResult = '';
  tituloModal: string = 'Adicionar Aluno';

  adicionarAlunoEvent: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private ngZone: NgZone,
    private alunoService: AlunoService
  ) {}

  ngOnInit(): void {
    if (!this.isAdding) {
      this.tituloModal = 'Editar Aluno';
    }
  }

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
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

  adicionarAlunoButton() {
    this.alunoService.sendClickEvent();
  }
}
