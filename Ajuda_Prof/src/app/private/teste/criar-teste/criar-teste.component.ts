import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormArray } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-criar-teste',
  templateUrl: './criar-teste.component.html',
  styleUrls: ['./criar-teste.component.scss'],
})
export class CriarTesteComponent implements OnInit {
  @Output() successSubmit = new EventEmitter<{ successSubmit: boolean }>();

  perguntaInvalida: boolean = false;
  temRepitidos: boolean = false;
  cotacaoInvalida: boolean = false;
  incorrectPerguntaIndex: number[] = [];
  incorrectCotacaoIndex: number[] = [];
  closeResult = '';
  isChecked: boolean = false;
  perguntasAsObj: { pergunta: any; cotacao: any }[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) {}

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

  addPergunta(value: any) {
    this.emptyValidators();
    this.temRepitidos = false;

    if (this.checkValidators()) {
      return;
    }

    if (this.hasDuplicatesForm(value)) {
      this.temRepitidos = true;

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

  checkCheckBoxvalue(event, value: any) {
    const check = event.target.checked;

    if (check) {
      console.log('checked');
      console.log(
        this.perguntasAsObj.sort(({ pergunta: a }, { pergunta: b }) => a - b)
      );
    } else {
      console.log('not checked');
      this.fillObjPerguntas(value);
    }
  }

  removePergunta(index: number): void {
    if (this.perguntas.length > 1) this.perguntas.removeAt(index);
    else this.perguntas.patchValue([{ pergunta: null, cotacao: null }]);
  }

  submit(value: any, modal: any): void {
    this.emptyValidators();

    if (this.checkValidators()) {
      return;
    }

    this.reset(modal, value);
    this.successSubmit.emit({ successSubmit: true });
  }

  hasDuplicatesForm(value: any): boolean {
    this.perguntasAsObj = [];

    if(!value.perguntas){
      return false;
    }
    this.fillObjPerguntas(value);
    const uniqueValues = new Set(this.perguntasAsObj.map((v) => v.pergunta));
    console.log(Number(uniqueValues.size));
    console.log(Number(this.perguntasAsObj.length));

    if (Number(uniqueValues.size) < Number(this.perguntasAsObj.length)) {
      this.perguntasAsObj = [];
      return true;
    }
    this.perguntasAsObj = [];
    return false;
  }

  reset(value: any, modal: any): void {
    this.form.reset();
    this.perguntas.clear();
    this.addPergunta(value);
    modal.close('Save click');
  }

  open(content, value?: any) {
    this.perguntasAsObj = [];
    this.temRepitidos = false;
    if (!value) {
      this.openModal(content);
    }

    if (value) {
      this.emptyValidators();

      if (this.checkValidators()) {
        return;
      }

      if (this.hasDuplicatesForm(value)) {
        this.temRepitidos = true;

        return;
      }

      this.fillObjPerguntas(value);

      this.openModal(content);
    }
  }

  fillObjPerguntas(value: any) {
    const perguntas = value?.perguntas;
    this.perguntasAsObj = [];

    perguntas.map((value) => {
      this.perguntasAsObj.push({
        pergunta: value.pergunta,
        cotacao: value.cotacao,
      });
    });
  }
  openModal(content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
    });
  }
}
