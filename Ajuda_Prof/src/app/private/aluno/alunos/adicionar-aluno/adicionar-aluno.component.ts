import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  NgZone,
  OnInit,
  Output,
} from '@angular/core';
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
  numeroAlunoInvalido: boolean = false;
  primeiroNomeInvalido: boolean = false;
  ultimoNomeInvalido: boolean = false;
  emailInvalido: boolean = false;

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
    private formBuilder: FormBuilder,
    private alunoService: AlunoService
  ) {
    this.alunoService.getClickEvent().subscribe(() => {
      this.checkInputs();
    });
  }

  checkInputs() {
    this.numeroAlunoInvalido =
      !this.numeroAluno || this.numeroAluno == '' ? true : false;

    this.primeiroNomeInvalido =
      !this.primeiroNome || this.primeiroNome == '' ? true : false;

    this.ultimoNomeInvalido =
      !this.ultimoNome || this.ultimoNome == '' ? true : false;

    this.emailInvalido = !this.email || this.email == '' ? true : false;
  }

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

  get numeroAluno() {
    return this.adicionarAlunoForm.get('numero_aluno')?.value;
  }

  get primeiroNome() {
    return this.adicionarAlunoForm.get('primeiro_nome_aluno')?.value;
  }

  get ultimoNome() {
    return this.adicionarAlunoForm.get('ultimo_nome_aluno')?.value;
  }

  get email() {
    return this.adicionarAlunoForm.get('email_aluno')?.value;
  }
}
