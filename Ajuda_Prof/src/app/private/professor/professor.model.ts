export class Professor {
  idProfessor: number;
  username: string;
  email: string;
  password: string;
  escola: string;

  constructor(idProfessor: number, username: string, email: string, password: string, escola: string) {
    this.idProfessor = idProfessor;
    this.username = username;
    this.email = email;
    this.password = password;
    this.escola = escola;
  }
}
