import { Injectable } from '@angular/core';
import { Turma } from 'src/app/private/turma/turma.model';
import { QueryStringParameters } from 'src/app/shared/classes/query-string-parameters';
import { ApiEndpointsService } from '../api-endpoints.service';
import { ApiHttpService } from '../api-http.service';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  constructor(// Application Services
    private apiHttpService: ApiHttpService,
    private apiEndpointsService: ApiEndpointsService) { }

  getTurmaByEscolaAnoSigla(escola: string, ano: number, sigla: string) {
    return this.apiEndpointsService.createUrlWithQueryParameters(
      'turma',
      (qs: QueryStringParameters) => {
        qs.push('escola', escola);
        qs.push('ano', ano);
        qs.push('sigla', sigla);
      }
    );
  }

  getAllTurmas() {
    return this.apiHttpService.get(this.apiEndpointsService.createUrl('turma/all'));
  }

  adicionarTurma(turma: Turma) {
    return this.apiHttpService.post(
      this.apiEndpointsService.createUrl('turma/add'),
      { escola: turma.escola, ano: turma.ano, sigla: turma.sigla }
    )
  }


}
