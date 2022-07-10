import { Professor } from "../professor/professor.model";

export class Turma {
    idTurma: number;
    professor: Professor;
    ano: number;
    sigla: string;

    constructor(idTurma: number, professor: Professor, ano: number, sigla: string) {
        this.idTurma = idTurma;
        this.professor = professor;
        this.ano = ano;
        this.sigla = sigla;
    }
}

