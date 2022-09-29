import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EncryptionService } from 'src/app/services/shared/encryption.service';
import { Turma } from '../turma/turma.model';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.scss'],
})
export class AvaliacaoComponent implements OnInit {
  idProfessor: number;
  idTurma: number;
  ano: number;
  sig: string;

  turma: Turma;

  constructor(
    private aRoute: ActivatedRoute,
    private encriptionService: EncryptionService
  ) {}

  ngOnInit(): void {
    this.aRoute.queryParams.subscribe((params) => {
      this.idProfessor = Number(
        this.encriptionService.decrypt(params['professor'])
      );
      this.idTurma = Number(this.encriptionService.decrypt(params['turma']));
      this.ano = Number(this.encriptionService.decrypt(params['ano']));
      this.sig = this.encriptionService.decrypt(params['sig']);
    });

    
  
  }
}
