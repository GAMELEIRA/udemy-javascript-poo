/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS
 * DATA:14/03/2020 
 * HORA:22:42
 * FINALIDADE DO PROGRAMA:INICIALIZAR PROGRAMACAO JAVASCRIPT COM O PARADIGMA OO
 */

const produto = new Object;

produto.nome = 'Cadeira';

produto.marca = 'Generica';

produto.preco = 20;

console.log(produto);

delete produto.nome;

console.log(produto);

const carro = {

    modelo: 'Raul',
    idade: 56,

    proprietario: {
        endereco: {
            logradouro: "Rua ABC",
            numero: 123
        }
    },

    condutores:[{
        nome:"Junior",
        idade:19
    }],

    calcularValorSeguro(){
        console.log("OI");
    }
}

console.log(carro.calcularValorSeguro());

console.log(carro);