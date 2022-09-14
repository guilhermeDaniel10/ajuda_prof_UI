import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Turma } from 'src/app/private/turma/turma.model';
import { AlunoService } from 'src/app/services/private/aluno.service';
import { TurmaService } from 'src/app/services/private/turma.service';
import { Aluno } from '../../aluno.model';

@Component({
  selector: 'app-adicionar-aluno',
  templateUrl: './adicionar-aluno.component.html',
  styleUrls: ['./adicionar-aluno.component.scss'],
})
export class AdicionarAlunoComponent implements OnInit {
  
  tituloModal: string = 'Adicionar Aluno';
  alunoExistente: Aluno | null;
  anos_validos: number[] = [];
  turma: Turma;

  adicionarAlunoForm = this.formBuilder.group({
    numero_aluno: '',
    primeiro_nome_aluno: '',
    ultimo_nome_aluno: '',
    email_aluno: '',
  });

  constructor(
    private turmaService: TurmaService,
    private formBuilder: FormBuilder,
    private alunoService: AlunoService
  ) {}

  ngOnInit(): void {

    this.alunoExistente = this.alunoService.getAlunoEditavelAtual();
    if (this.alunoExistente) {
      this.setInputWithValues(this.alunoExistente);
    } else {
      this.setEmptyInput();
    }
    this.alunoService.setAlunoEditavelAtual(null);
  }

  setInputWithValues(aluno: Aluno) {
    this.adicionarAlunoForm = this.formBuilder.group({
      numero_aluno: aluno.numeroAluno.toString(),
      primeiro_nome_aluno: aluno.primeiroNome,
      ultimo_nome_aluno: aluno.ultimoNome,
      email_aluno: aluno.email,
    });
  }

  setEmptyInput() {
    this.adicionarAlunoForm = this.formBuilder.group({
      numero_aluno: '',
      primeiro_nome_aluno: '',
      ultimo_nome_aluno: '',
      email_aluno: '',
    });
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
    return this.adicionarAlunoForm.get('numero-aluno');
  }
  get sigla() {
    return this.adicionarAlunoForm.get('sigla');
  }
}
