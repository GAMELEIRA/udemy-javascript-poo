const obj = {};

const obj2 = new Object;

function Produto(nome, preco, desc) {

    this.nome = nome;
    this.getPrecoComDesconto = () => {

        return preco * (1 - desc);

    }

}

const p1 = new Produto('Caneta', 7.99, 0.15);

const p2 = new Produto('Notebook', 2998.99, 0.25);

//FUNCAO FACTORY
function criarFuncionario(nome, salario, faltas) {

    return {
        nome,
        salario,
        faltas,
        getSalario() {
            return (salarioBase / 38) * (30 - faltas);
        }
    }

}

const f1 = criarFuncionario('Gabriel', 7980, 4)

const filho = Object.create(null);

const fromJSON = JSON.parse('{"info":"Sou um JSON"}')

console.log(fromJSON.info)