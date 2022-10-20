import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormArray } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-criar-teste',
  templateUrl: './criar-teste.component.html',
  styleUrls: ['./criar-teste.component.scss'],
})
export class CriarTesteComponent implements OnInit {
  @Output() successSubmit = new EventEmitter<{ successSubmit: boolean }>();

  date = new FormControl(new Date());
  perguntaInvalida: boolean = false;
  nomeTesteInvalido: boolean = false;
  temRepitidos: boolean = false;
  cotacaoInvalida: boolean = false;
  cotacaoMenor0: boolean = false;
  incorrectPerguntaIndex: number[] = [];
  incorrectCotacaoIndex: number[] = [];
  closeResult = '';
  isChecked: boolean = false;
  perguntasAsObj: { pergunta: any; cotacao: any }[] = [];
  cotacaoTotal: number = 0;
  cotacaoAtual: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private _adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) private _locale: string
  ) {}

  ngOnInit(): void {
    this._locale = 'pt';
    this._adapter.setLocale(this._locale);
  }

  data = [
    {
      pergunta: ['', Validators.required],
      cotacao: ['', { validators: [Validators.required, Validators.min(0.1)] }],
    },
  ];

  form: FormGroup = this.formBuilder.group({
    nomeTeste: ['', Validators.required],
    dataTeste: new FormControl(),
    perguntas: this.formBuilder.array(
      this.data.map((pergunta) => this.formBuilder.group(pergunta))
    ),
  });

  get perguntas(): FormArray {
    return this.form.get('perguntas') as FormArray;
  }

  get nomeTesteValue() {
    return this.form?.get('nomeTeste');
  }

  changeCotacao(value: number) {
    this.cotacaoTotal = this.cotacaoAtual;
    this.cotacaoTotal += value;
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
    this.cotacaoTotal = 0;
    this.perguntas.value.map((dados) => {
      this.cotacaoTotal += dados.cotacao;
    });
    this.cotacaoAtual = this.cotacaoTotal;

    if (this.perguntas)
      this.perguntas.push(
        this.formBuilder.group({
          pergunta: ['', Validators.required],
          cotacao: ['', Validators.required],
        })
      );
  }

  emptyValidators() {
    this.incorrectPerguntaIndex = [];
    this.incorrectCotacaoIndex = [];
    this.nomeTesteInvalido = false;
    this.cotacaoMenor0 = false;
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
      } else {
        if (perguntas[i].cotacao < 0) {
          this.incorrectCotacaoIndex.push(i);
          this.cotacaoMenor0 = true;
        }
      }
    }

    return this.perguntaInvalida || this.cotacaoInvalida || this.cotacaoMenor0;
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
    if (this.perguntas.length > 1) {
      this.perguntas.removeAt(index);
      this.cotacaoTotal = 0;
      this.perguntas.value.map((dados) => {
        this.cotacaoTotal += dados.cotacao;
      });
    } else {
      this.cotacaoAtual = 0;
      this.perguntas.patchValue([{ pergunta: '', cotacao: '' }]);
    }
  }

  submit(value: any): void {
    this.emptyValidators();

    if (this.nomeTesteValue?.errors) {
      this.nomeTesteInvalido = true;
    }

    if (this.checkValidators() || this.nomeTesteInvalido) {
      return;
    }

    this.reset(value);
    this.successSubmit.emit({ successSubmit: true });
  }

  hasDuplicatesForm(value: any): boolean {
    this.perguntasAsObj = [];

    if (!value.perguntas) {
      return false;
    }
    this.fillObjPerguntas(value);
    const uniqueValues = new Set(this.perguntasAsObj.map((v) => v.pergunta));

    if (Number(uniqueValues.size) < Number(this.perguntasAsObj.length)) {
      this.perguntasAsObj = [];
      return true;
    }
    this.perguntasAsObj = [];
    return false;
  }

  reset(value: any): void {
    this.form.reset();
    this.perguntas.clear();
    this.addPergunta(value);
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
