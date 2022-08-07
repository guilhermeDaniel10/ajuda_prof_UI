import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turma-selecionada',
  templateUrl: './turma-selecionada.component.html',
  styleUrls: ['./turma-selecionada.component.scss']
})
export class TurmaSelecionadaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("test");
  }

}
