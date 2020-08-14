const carrinho = [
    '{"nome":"Borracha","preco":3.45}',
    '{"nome":"Caderno","preco": 13.90}',
    '{"nome":"Kit de Lápis","preco": 3.45}',
    '{"nome":"Canela","preco": 3.45}',
]

const converteParaObjeto = json => JSON.parse(json);

const apenasPreco = produto => produto.preco;

const resultado = carrinho.map(converteParaObjeto).map(apenasPreco);

console.log(resultado);