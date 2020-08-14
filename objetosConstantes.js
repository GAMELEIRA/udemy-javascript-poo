const pessoa = {
    nome: 'João'
}

console.log(pessoa.nome);

//INIBE QUALQUER ALTERAÇÃO NO OBJETO
Object.freeze(pessoa);

console.log(a.falar());