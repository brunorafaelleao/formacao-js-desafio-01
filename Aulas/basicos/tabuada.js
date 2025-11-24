//para rodar esse código, é necessário instalar o prompt-sync
//comando: npm install prompt-sync
prompt = require("prompt-sync")();
let valor = prompt("Digite o valor que deseja ver a tabuada: ");
for (let i = 0; i <= 10; i++) {
  //console.log(i * valor);
  console.log(`${valor} * ${i}  = ${i * valor}`);
}

//testes de exercicios:

// }
// const numerosPares = [];
// for (let i = 0; i < 10; i++) {
//   const numeroPar = i % 2 === 0;
//   if (numeroPar) {
//     numerosPares.push(i);
//   }
// }
// console.log(numerosPares);

// const numerosPares = [];
// for (let i = 0; i < 10; i = i + 2) {
//   numerosPares.push(i);
// }
// console.log(numerosPares);
