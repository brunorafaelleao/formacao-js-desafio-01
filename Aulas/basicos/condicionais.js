/*Faça um programa pra calcular o valor de uma viagem
Voc terá 5 variáveis. Sendo elas:
- Preço do etanol;
- Preço da gasolina;
- O tipo de combustível que está no seu carro;
- Gasto médio de combustível do carro por km;
- Distância em km da viagem;
Imprima no console o valor que será gasto para realizar esta viagem.

*/

//para usar o prompt no terminal execute: npm install prompt-sync
const prompt = require("prompt-sync")();

const precoEtanol = 5.47;
const precoGasolina = 7.08;
let valorTotalDaViagem = 0;

console.log("Vamos calcular o valor da sua viagem de carro?");
// console.log("Qual o tipo de combustível do seu carro? (E para Etanol / G para Gasolina)");
let tipoCombustivel = prompt(
  "Qual o tipo de combustível do seu carro? (E para Etanol / G para Gasolina): "
);
let gastoMedioPorKm = prompt("Qual o consumo médio do seu carro por km?: ");
let distanciaEmKm = prompt("Qual a distância em km da viagem?: ");

if (tipoCombustivel.toUpperCase() === "E") {
  let litrosNecessarios = distanciaEmKm / gastoMedioPorKm;
  valorTotalDaViagem = litrosNecessarios * precoEtanol;
  console.log(
    `Para sua viagem de ${distanciaEmKm} km, com um veículo cujo combustível é Etanol que faz ${gastoMedioPorKm} km/L, e o preço do etanol a R$ ${precoEtanol} por litro, Você vai gastar R$ ${valorTotalDaViagem.toFixed(2)}`
  );
}

if (tipoCombustivel.toUpperCase() === "G") {
  let litrosNecessarios = distanciaEmKm / gastoMedioPorKm;
  valorTotalDaViagem = litrosNecessarios * precoGasolina;
  console.log(
    `Para sua viagem de ${distanciaEmKm} km, com um veículo cujo combustível é Gasolina que faz ${gastoMedioPorKm} km/L, e o preço da gasolina a R$ ${precoGasolina} por litro, Vocé vai gastar R$ ${valorTotalDaViagem.toFixed(2)}`
  );
}
