import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionar-turma',
  templateUrl: './adicionar-turma.component.html',
  styleUrls: ['./adicionar-turma.component.scss']
})
export class AdicionarTurmaComponent implements OnInit {

  anos_validos: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.iniciar_anos();
    console.log(this.anos_validos)
  }

  iniciar_anos(){
    for(let i = 1; i <= 12; i++){
      this.anos_validos.push(i);
    }
  }

}
