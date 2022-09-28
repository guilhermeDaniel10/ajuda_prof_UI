import { Component, OnInit } from '@angular/core';
import { MockTeste } from './mock-teste';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss'],
})
export class TesteComponent implements OnInit {
  testes = MockTeste.TESTES;

  constructor() {}

  ngOnInit(): void {}
}
