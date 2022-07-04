import { Injectable } from '@angular/core';
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

  getAllTurmas(){
    return this.apiHttpService.get(this.apiEndpointsService.createUrl('turma/all'));
  }


}