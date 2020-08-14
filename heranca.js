Object.prototype.atrr0 = '0';

const vo = {
    atrr1: 'A'
}

const pai = {
    __proto__: vo,
    attr2: 'B',
    falar() { console.log('Ba!') }
}

const filho = {
    __proto__: pai,
    atrr3: 'C',
    falar() {
        console.log('Oi');
        super.falar()
    }
}

console.log(filho.atrr0, filho.attr2, filho.falar());

Object.setPrototypeOf(filho, pai)

const a = {nome:'Pedro', corCabelo:'Pedro'}

const b = Object.create(a);