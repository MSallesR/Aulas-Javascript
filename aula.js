




class Carro {
    marca;
    cor;
    kmPorLitro;

    constructor (marca, cor, kmPorLitro){
        this.marca = marca;
        this.cor = cor;
        this.kmPorLitro = kmPorLitro;

    }

    gastoDePercurso(distancia, preco){
        return  distancia * this.kmPorLitro * preco;
    }

}

const supra = new Carro('Toyota', 'Laranja', 1 / 12 );
const ferrarif40 = new Carro('Ferrari', 'Vermelha', 1 / 15)

console.log(supra.gastoDePercurso(120, 4.50));
console.log(ferrarif40.gastoDePercurso(120, 4.50));


