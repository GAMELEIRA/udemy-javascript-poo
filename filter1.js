const produtos = [

    { nome: 'Notebook', preco: 2499, fragil: true }

]

console.log(produtos.filter(p => {
    return p.preco < 400
}))