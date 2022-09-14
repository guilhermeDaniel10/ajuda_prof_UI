import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Turma } from 'src/app/private/turma/turma.model';
import { TurmaService } from 'src/app/services/private/turma.service';

@Component({
  selector: 'app-adicionar-aluno',
  templateUrl: './adicionar-aluno.component.html',
  styleUrls: ['./adicionar-aluno.component.scss'],
})
export class AdicionarAlunoComponent implements OnInit {
  anos_validos: number[] = [];
  turma: Turma;

  adicionarTurmaForm = this.formBuilder.group({
    ano: '',
    sigla: '',
  });

  constructor(
    private turmaService: TurmaService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    console.log('here');
    this.iniciar_anos();
  }

  iniciar_anos() {
    for (let i = 1; i <= 12; i++) {
      this.anos_validos.push(i);
    }
  }

  changeAno(e: any) {
    /*this.ano?.setValue(e.target.value, {
      onlySelf: true,
    });*/
  }

  onSubmit() {
    /*this.turmaService
      .adicionarTurma(
        'teste1',
        Number(this.ano?.value),
        String(this.sigla?.value)
      )
      .subscribe((data) => console.log(data));*/
  }

  get numeroAluno() {
    return this.adicionarTurmaForm.get('numero-aluno');
  }
  get sigla() {
    return this.adicionarTurmaForm.get('sigla');
  }
}
