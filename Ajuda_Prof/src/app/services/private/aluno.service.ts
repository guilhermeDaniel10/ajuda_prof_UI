import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Aluno } from 'src/app/private/aluno/aluno.model';
import { QueryStringParameters } from 'src/app/shared/classes/query-string-parameters';
import { ApiEndpointsService } from '../api-endpoints.service';
import { ApiHttpService } from '../api-http.service';

@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  private alunoEditavelAtualSource = new BehaviorSubject<Aluno | null>(null);

  currentAluno = this.alunoEditavelAtualSource.asObservable();

  private subject = new Subject<any>();

  constructor(
    private apiHttpService: ApiHttpService,
    private apiEndpointsService: ApiEndpointsService,
    private http: HttpClient
  ) {}

  getAlunosDaTurmaByProfessor(
    username: string,
    ano: number,
    sigla: string
  ): Observable<Aluno[]> {
    //TODO: Alterar coisas aqui
    return this.http.get<Aluno[]>(
      this.apiEndpointsService.createUrlWithQueryParameters(
        'aluno/findAllByTurma',
        (qs: QueryStringParameters) => {
          qs.push('usernameProf', username);
          qs.push('ano', ano);
          qs.push('sigla', sigla);
        }
      )
    );
  }

  setAlunoEditavelAtual(aluno: Aluno | null) {
    this.alunoEditavelAtualSource.next(aluno);
  }

  getAlunoEditavelAtual(): Aluno | null {
    return this.alunoEditavelAtualSource.getValue();
  }

  sendClickEvent() {
    this.subject.next(true);
  }
  getClickEvent(): Observable<any> {
    return this.subject.asObservable();
  }
}
