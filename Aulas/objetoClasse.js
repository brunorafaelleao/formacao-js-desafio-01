/*
 Crie uma classe para representar carros.
 Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetro rodado.
  Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso. 
*/

class Carro {
  marca;
  cor;
  gastoMedioPorKm;

  constructor(marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
  }

  calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
    //calcular a quantidade de litros consumidos no percurso
    const litrosConsumidos = distanciaEmKm / this.gastoMedioPorKm;
    //calcular o valor gasto no percurso
    const valorPercurso = litrosConsumidos * precoCombustivel;
    return valorPercurso;
  }
}

// function calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
//   //calcular a quantidade de litros consumidos no percurso
//   const litrosConsumidos = distanciaEmKm / this.gastoMedioPorKm;
//   //calcular o valor gasto no percurso
//   valorPercurso = litrosConsumidos * precoCombustivel;
//   return valorPercurso;
// }

//sem construtor
// const carro1 = new Carro();
// carro1.marca = "Citroen";
// carro1.cor = "Prata";
// carro1.gastoMedioPorKm = 10;

// console.log(carro1);

//com construtor
const carro1 = new Carro("Citroen", "Prata", 10);

precoCombustivel = 6.99;
distanciaEmKm = 100;

valorPercurso = carro1.calcularGastoDePercurso(distanciaEmKm, precoCombustivel);
console.log(
  `Para o carro da marca ${carro1.marca} que roda ${carro1.gastoMedioPorKm} km/l, no percurso de ${distanciaEmKm} km, com o combustível a R$ ${precoCombustivel} o gasto será de R$ ${valorPercurso.toFixed(2)}`
);
