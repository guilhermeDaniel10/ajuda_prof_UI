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
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  data = [{ pergunta: '', cotacao: ''}];

  form: FormGroup = this.formBuilder.group({
    perguntas: this.formBuilder.array(
      this.data.map((pergunta) => this.formBuilder.group(pergunta))
    ),
  });

  get perguntas(): FormArray {
    return this.form.get('perguntas') as FormArray;
  }

  addPergunta() {
    this.perguntas.push(
      this.formBuilder.group({
        pergunta: null,
        cotacao: null
      })
    );
  }

  removePergunta(index: number): void {
    if (this.perguntas.length > 1) this.perguntas.removeAt(index);
    else this.perguntas.patchValue([{pergunta: null, cotacao: null}]);
  }

  submit(value: any): void {
    console.log(value)
  }

  reset(): void {
    this.form.reset();
    this.perguntas.clear();
    this.addPergunta();
  }
}
