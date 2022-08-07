import { Aluno } from "./aluno.model";

export abstract class MockAlunos {
  static readonly ALUNOS: Aluno[] = [
    {
      idAluno: 1,
      numeroAluno: 1,
      primeiroNome: "Ana",
      ultimoNome: "Costa",
      email: 'anacosta@mail.com',
      turma: {
        idTurma: 32,
        professor: {
          idProfessor: 18,
          username: 'teste1',
          email: 'teste1@mail.com',
          password: 'password1',
          escola: 'ESAG',
        },
        ano: 10,
        sigla: 'M',
      },
    },
    {
      idAluno: 2,
      numeroAluno: 2,
      primeiroNome: "Beatriz",
      ultimoNome: "Ribeiro",
      email: 'beatrizribeiro@mail.com',
      turma: {
        idTurma: 32,
        professor: {
          idProfessor: 18,
          username: 'teste1',
          email: 'teste1@mail.com',
          password: 'password1',
          escola: 'ESAG',
        },
        ano: 10,
        sigla: 'M',
      }
    }, {
      idAluno: 3,
      numeroAluno: 3,
      primeiroNome: "Bernardo",
      ultimoNome: "Silva",
      email: 'bernardosilva@mail.com',
      turma: {
        idTurma: 32,
        professor: {
          idProfessor: 18,
          username: 'teste1',
          email: 'teste1@mail.com',
          password: 'password1',
          escola: 'ESAG',
        },
        ano: 10,
        sigla: 'M',
      }
    },
    {
      idAluno: 4,
      numeroAluno: 4,
      primeiroNome: "Guilherme",
      ultimoNome: "Daniel",
      email: 'guilhermedaniel@mail.com',
      turma: {
        idTurma: 32,
        professor: {
          idProfessor: 18,
          username: 'teste1',
          email: 'teste1@mail.com',
          password: 'password1',
          escola: 'ESAG',
        },
        ano: 10,
        sigla: 'M',
      }
    },
    {
      idAluno: 5,
      numeroAluno: 5,
      primeiroNome: "Gustavo",
      ultimoNome: "Santos",
      email: 'gustavosantos@mail.com',
      turma: {
        idTurma: 32,
        professor: {
          idProfessor: 18,
          username: 'teste1',
          email: 'teste1@mail.com',
          password: 'password1',
          escola: 'ESAG',
        },
        ano: 10,
        sigla: 'M',
      }
    },
    {
      idAluno: 6,
      numeroAluno: 6,
      primeiroNome: "Helena",
      ultimoNome: "Costa",
      email: 'helenacosta@mail.com',
      turma: {
        idTurma: 32,
        professor: {
          idProfessor: 18,
          username: 'teste1',
          email: 'teste1@mail.com',
          password: 'password1',
          escola: 'ESAG',
        },
        ano: 10,
        sigla: 'M',
      }
    },
    {
      idAluno: 7,
      numeroAluno: 7,
      primeiroNome: "Jorge",
      ultimoNome: "Costa",
      email: 'jorgecosta@mail.com',
      turma: {
        idTurma: 32,
        professor: {
          idProfessor: 18,
          username: 'teste1',
          email: 'teste1@mail.com',
          password: 'password1',
          escola: 'ESAG',
        },
        ano: 10,
        sigla: 'M',
      }
    },
    {
      idAluno: 8,
      numeroAluno: 8,
      primeiroNome: "Leonardo",
      ultimoNome: "Silva",
      email: 'leonardosilva@mail.com',
      turma: {
        idTurma: 32,
        professor: {
          idProfessor: 18,
          username: 'teste1',
          email: 'teste1@mail.com',
          password: 'password1',
          escola: 'ESAG',
        },
        ano: 10,
        sigla: 'M',
      }
    },
    {
      idAluno: 9,
      numeroAluno: 9,
      primeiroNome: "Nélia",
      ultimoNome: "Ribeiro",
      email: 'neliaribeiro@mail.com',
      turma: {
        idTurma: 32,
        professor: {
          idProfessor: 18,
          username: 'teste1',
          email: 'teste1@mail.com',
          password: 'password1',
          escola: 'ESAG',
        },
        ano: 10,
        sigla: 'M',
      }
    },
    {
      idAluno: 10,
      numeroAluno: 10,
      primeiroNome: "Rita",
      ultimoNome: "Santava",
      email: 'ritasantava@mail.com',
      turma: {
        idTurma: 32,
        professor: {
          idProfessor: 18,
          username: 'teste1',
          email: 'teste1@mail.com',
          password: 'password1',
          escola: 'ESAG',
        },
        ano: 10,
        sigla: 'M',
      }
    }
  ];

}