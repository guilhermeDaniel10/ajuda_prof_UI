export class CotacaoResposta {
    idPergunta: string | number;
    cotacaoResposta: number | 0;


    constructor(cotacaoResposta: number) {
        this.cotacaoResposta = cotacaoResposta;
    }
}
