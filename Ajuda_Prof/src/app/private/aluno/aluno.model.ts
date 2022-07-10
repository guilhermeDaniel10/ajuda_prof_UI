import { Turma } from "../turma/turma.model";

export class Aluno {
    idAluno: number;
    primeiroNome: string;
    ultimoNome: string;
    email: string;
    turma: Turma;
    numeroAluno: number;


    constructor(idAluno: number, primeiroNome: string, ultimoNome: string, email: string, turma: Turma, numeroAluno: number) {
        this.idAluno = idAluno;
        this.primeiroNome = primeiroNome;
        this.ultimoNome = ultimoNome;
        this.email = email;
        this.turma = turma;
        this.numeroAluno = numeroAluno;
    }
}

