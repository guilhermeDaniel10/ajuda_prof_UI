import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-criar-teste',
  templateUrl: './criar-teste.component.html',
  styleUrls: ['./criar-teste.component.scss'],
})
export class CriarTesteComponent implements OnInit {
  perguntaInvalida: boolean = false;
  cotacaoInvalida: boolean = false;
  incorrectPerguntaIndex: number[] = [];
  incorrectCotacaoIndex: number[] = [];
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.invalidIndex;
  }

  data = [{ pergunta: '', cotacao: '' }];

  form: FormGroup = this.formBuilder.group({
    perguntas: this.formBuilder.array(
      this.data.map((pergunta) => this.formBuilder.group(pergunta))
    ),
  });

  get perguntas(): FormArray {
    return this.form.get('perguntas') as FormArray;
  }

  get invalidIndex(): any[] {
    let incorrects = [];
    this.perguntas.value.map((value) => {
      if (!value.pergunta) {
        console.log('invalid');
      }
    });
    return incorrects;
  }

  addPergunta() {
    this.emptyValidators();
    console.log(this.checkValidators());

    if (this.checkValidators()) {
      return;
    }

    if (this.perguntas)
      this.perguntas.push(
        this.formBuilder.group({
          pergunta: null,
          cotacao: null,
        })
      );
  }

  emptyValidators() {
    this.incorrectPerguntaIndex = [];
    this.incorrectCotacaoIndex = [];
    this.perguntaInvalida = false;
    this.cotacaoInvalida = false;
  }

  checkValidators(): boolean {
   
    const perguntas = this.perguntas.value;
    for (let i = 0; i < perguntas.length; i++) {
      if (!perguntas[i].pergunta) {
        this.incorrectPerguntaIndex.push(i);
        this.perguntaInvalida = true;
      }

      if (!perguntas[i].cotacao) {
        this.incorrectCotacaoIndex.push(i);
        this.cotacaoInvalida = true;
      }
    }

    return this.perguntaInvalida || this.cotacaoInvalida;
  }

  removePergunta(index: number): void {
    if (this.perguntas.length > 1) this.perguntas.removeAt(index);
    else this.perguntas.patchValue([{ pergunta: null, cotacao: null }]);
  }

  submit(value: any): void {
    console.log(value);
  }

  reset(): void {
    this.form.reset();
    this.perguntas.clear();
    this.addPergunta();
  }
}
