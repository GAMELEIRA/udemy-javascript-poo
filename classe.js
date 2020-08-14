class Lancamento {

    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome,
            this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.nome = mes,
            this.ano = ano,
            this.lancamentos = []
    }

    addLancamentos(lancamentos) {

        lancamentos.forEach(e => this.lancamentos.push(L))
    }
}