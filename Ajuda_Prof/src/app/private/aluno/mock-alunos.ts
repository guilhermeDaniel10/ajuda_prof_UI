import { Aluno } from "./aluno.model";

export abstract class MockAlunos {
    static readonly ALUNOS: Aluno[] = [
        {
            idAluno: 49,
            primeiroNome: 'Teste',
            ultimoNome: 'Final',
            email: 'teste@mail.com',
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
            numeroAluno: 49,
          },
          {
            idAluno: 50,
            primeiroNome: 'Antonio',
            ultimoNome: 'Anel',
            email: 'antonio@mail.com',
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
            numeroAluno: 50,
          }
    ];

  }