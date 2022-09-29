import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EncryptionService } from 'src/app/services/shared/encryption.service';
import { NavigationService } from 'src/app/services/shared/navigation.service';
import { Turma } from '../../turma/turma.model';
import { MockTeste } from './mock-teste';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss'],
})
export class TesteComponent implements OnInit {
  @Input() turma: Turma;

  idProfessor: number;
  idTurma: number;
  ano: number;
  sig: string;
  testes = MockTeste.TESTES;

  constructor(
    private navigation: NavigationService,
    private encryption: EncryptionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.idProfessor = Number(this.encryption.decrypt(params['professor']));
      this.idTurma = Number(this.encryption.decrypt(params['turma']));
      this.ano = Number(this.encryption.decrypt(params['ano']));
      this.sig = this.encryption.decrypt(params['sig']);
    });
    console.log(this.idProfessor);
    console.log(this.idTurma);
  }

  goView() {
    let params;

    this.route.queryParams.subscribe((params) => {
      params = {
        professor: params['professor'],
        turma: params['turma'],
        ano: params['ano'],
        sig: params['sig'],
      };
      this.navigation.goToPage('avaliacao', params);
    });
  }

  adicionarTeste() {}
}
