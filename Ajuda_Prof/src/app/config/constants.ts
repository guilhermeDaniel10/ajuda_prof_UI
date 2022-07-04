// Angular Modules
import { Injectable } from '@angular/core';

@Injectable()
export class Constants {
    public readonly API_ENDPOINT: string = 'http://localhost:8081/api';
    public readonly API_MOCK_ENDPOINT: string = 'http://localhost:8081/api';
    public readonly ALUNO: string = 'aluno';
    public readonly TURMA: string = 'turma';
}