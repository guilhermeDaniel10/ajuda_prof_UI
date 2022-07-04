import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TurmaService } from 'src/app/services/private/turma.service';
import { Turma } from '../turma.model';

@Component({
  selector: 'app-adicionar-turma',
  templateUrl: './adicionar-turma.component.html',
  styleUrls: ['./adicionar-turma.component.scss']
})
export class AdicionarTurmaComponent implements OnInit {

  anos_validos: number[] = [];
  turma: Turma;

  adicionarTurmaForm = this.formBuilder.group({
    escola: '',
    ano: '',
    sigla: ''
  })

  constructor(
    private turmaService: TurmaService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.iniciar_anos();
  }

  iniciar_anos() {
    for (let i = 1; i <= 12; i++) {
      this.anos_validos.push(i);
    }
  }

  changeAno(e: any) {
    this.ano?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  onSubmit() {
    this.setTurmaModel();
    console.log(this.turma);
    this.turmaService.adicionarTurma(this.turma).subscribe((data) => console.log(data));
  }

  setTurmaModel() {
    this.turma = new Turma(this.escola?.value, this.ano?.value, this.sigla?.value);
  }

  get ano() {
    return this.adicionarTurmaForm.get('ano');
  }
  get escola() {
    return this.adicionarTurmaForm.get('escola');
  }
  get sigla() {
    return this.adicionarTurmaForm.get('sigla');
  }

}
