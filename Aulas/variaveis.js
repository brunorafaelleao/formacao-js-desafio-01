// console.log("Iniciando aula.js");

/*let nome = 10;
const sobrenome = "Silva";*/

//exercicio para revisar

console.log("Vamos calcular o valor de uma viagem?");

//preco do combustivel
const precoCombustivel = 5.79;
//consumo medio do carro por km
let kmPorLitro = 10;
//distancia em km da viagem
let distanciaEmKm = 100;

//calculo de litros necessarios
let litrosNecessarios = distanciaEmKm / kmPorLitro;
//calculo do valor total da viagem
let valorTotalDaViagem = litrosNecessarios * precoCombustivel;
console.log(
  `Para uma viagem de ${distanciaEmKm} km, com um veículo que faz ${kmPorLitro} km/L, e o preço do combustível a R$ ${precoCombustivel} por litro,`
);
console.log(`O valor total da viagem é de R$ ${valorTotalDaViagem.toFixed(2)}`);

//