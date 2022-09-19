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
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  data = [{ pergunta: '', cotacao: '' }];

  form: FormGroup = this.formBuilder.group({
    perguntas: this.formBuilder.array(
      this.data.map((pergunta) => this.formBuilder.group(pergunta))
    ),
  });

  get perguntas(): FormArray {
    return this.form.get('perguntas') as FormArray;
  }

  addPergunta() {
    this.emptyValidators();
    console.log(this.checkValidators());
    
    if(this.checkValidators()){
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

  emptyValidators(){
    this.perguntaInvalida = false;
    this.cotacaoInvalida = false;
  }

  checkValidators(): boolean{
    const lastValidElement = this.perguntas.value[this.perguntas.length - 1];

    if(!lastValidElement.pergunta){
      this.perguntaInvalida = true;
    }

    if(!lastValidElement.cotacao){
      this.cotacaoInvalida = true;
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
