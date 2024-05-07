/* 3. Utilizando função: Tendo como dados de entrada o peso (em quilogramas)
   e a altura (em metros) de uma pessoa, 
   crie um programa que calcule o Índice de Massa Corporal (IMC) dessa pessoa. 
Calcule o IMC usando a fórmula: IMC = peso / (altura * altura). 
Classifique o IMC da seguinte forma:
- IMC < 18,5 Kg/m²: Abaixo do Peso
- IMC >= 18,5 Kg/m² e < 24,9 Kg/m²: Peso Ideal
- IMC >= 25 Kg/m² e < 29,9 Kg/m²: Excesso de Peso
- IMC >= 30 Kg/m²: Obesidade. */

const prompt = require('prompt-sync')();

function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do Peso.";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso Ideal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Excesso de Peso. Alerta!";
    } else {
        return "Obesidade! Se Cuide!";
    }
}

const peso = parseFloat(prompt('Digite o peso em quilogramas: '));
const altura = parseFloat(prompt('Digite a altura em metros: '));

const imc = calcularIMC(peso, altura);
const classificacao = classificarIMC(imc);

console.log(`O IMC é: ${imc.toFixed(2)}`);
console.log(`Classificação: ${classificacao}`);
