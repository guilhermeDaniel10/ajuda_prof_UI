import { CotacaoResposta } from "./cotacao-resposta/cotacao-resposta.model";

export class Resposta {
    numeroAluno: number;
    primeiroNome: string;
    ultimoNome: string;
    cotacaoResposta: CotacaoResposta[];

    constructor(numeroAluno: number, primeiroNome: string, ultimoNome: string, cotacaoResposta: CotacaoResposta[]) {
        this.numeroAluno = numeroAluno;
        this.primeiroNome = primeiroNome;
        this.ultimoNome = ultimoNome;
        this.cotacaoResposta = cotacaoResposta;
    }
}
