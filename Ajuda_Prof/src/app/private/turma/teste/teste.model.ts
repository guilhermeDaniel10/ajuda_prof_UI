import { Turma } from "../turma.model";
import { Pergunta } from "./pergunta/pergunta.model";

export class Teste {
    idTeste: number;
    turma: Turma;
    perguntas: Pergunta[];
  
    constructor(idTeste: number, turma: Turma, perguntas: Pergunta[]) {
      this.idTeste = idTeste;
      this.turma = turma;
      this.perguntas = perguntas;
    }
  }
  