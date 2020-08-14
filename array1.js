let aprovados = new Array('Ana', 'Carlos', 'Bia');

console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];

console.log(aprovados[0]);
console.log(aprovados[2]);
console.log(aprovados[1]);

console.log(aprovados);

aprovados[3] = 'Paulo';

aprovados.push('Abia');

console.log(aprovados.length);

aprovados[9] = 'Rafael';

console.log(aprovados);

//ORDENA O ARRAY
console.log(aprovados.sort());

delete aprovados[1];

aprovados.slice(1, 0, 'Elemento 1', 'Elemento 2');