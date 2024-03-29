import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TurmaService } from 'src/app/services/private/turma.service';
import { EncryptionService } from 'src/app/services/shared/encryption.service';
import { LocalService } from 'src/app/services/shared/local.service';
import { ModalAdicionarTurmaComponent } from './modal-adicionar-turma/modal-adicionar-turma.component';
import { TURMA } from './turma.mock';
import { Turma } from './turma.model';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.scss'],
})
export class TurmaComponent implements OnInit {
  @Input() isAddVisible: boolean = true;
  longText: string = 'testeteste';
  turmas: Turma[] = TURMA;
  closeResult: string;

  constructor(
    private turmaService: TurmaService,
    private modalService: NgbModal,
    private route: Router,
    private encriptionService: EncryptionService
  ) {}

  ngOnInit() {
    console.log(this.turmas);
  }

  getTurmasTeste() {
    this.turmaService.getAllTurmas().subscribe((data) => {
      console.log(data);
    });
  }

  adicionarTurma() {
    const modalRef = this.modalService.open(ModalAdicionarTurmaComponent);
    modalRef.componentInstance.name = 'World';
  }

  turmaSelecionada() {
    this.route.navigate(['./selecionada']);
    console.log('Turma selecionada');
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

  goToPage(pageName: string, turma: Turma) {
    console.log(turma);
    this.route.navigate([`${pageName}`], {
      queryParams: {
        professor: this.encriptionService.encrypt(
          turma.professor.idProfessor.toString()
        ),
        turma: this.encriptionService.encrypt(turma.idTurma.toString()),
        ano: this.encriptionService.encrypt(turma.ano.toString()),
        sig: this.encriptionService.encrypt(turma.sigla.toString()),
      },
      state: { prevPage: this.route.url },
    });
    this.turmaService.setTurmaSelecionada(turma);
  }
}
