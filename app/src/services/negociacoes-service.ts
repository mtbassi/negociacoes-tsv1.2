import { NegociacoesDoDia } from "../interfaces/negociacoes-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService{

    public obterNegociacoes(): Promise<Array<Negociacao>>{
        return fetch('http://localhost:8080/dados')
            .then(response => {
                return response.json();
            })
            .then((dados: Array<NegociacoesDoDia>) => {
                return dados.map(dado => {
                    return new Negociacao(new Date(), dado.vezes, dado.montante);
                });
            })
    }

}