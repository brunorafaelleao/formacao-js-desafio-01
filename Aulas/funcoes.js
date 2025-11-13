//declarando funcoes

//exemplo de funcao para calcular IMC
function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function classificarIMC(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 24.9) {
    return "Peso normal";
  } else if (imc >= 25 && imc < 29.9) {
    return "Sobrepeso";
  } else if (imc >= 30 && imc < 34.9) {
    return "Obesidade grau 1";
  } else if (imc >= 35 && imc < 39.9) {
    return "Obesidade grau 2";
  } else {
    return "Obesidade grau 3";
  }
}

//declaracao da funcao principal
function main() {
  console.log("Funções em JavaScript");
  console.log("1-Calcular o IMC de uma pessoa");
  let peso = 79;
  let altura = 1.66;
  let imc = calcularIMC(peso, altura);
  let classificacao = classificarIMC(imc);
  console.log(
    `Para uma pessoa com ${peso} kg e ${altura} m de altura, o IMC é de ${imc.toFixed(2)} e a classificação é: ${classificacao}`
  );
}

//chamando a funcao principal
main();
