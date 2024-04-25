/* 7: Crie um programa que leia 5 números e mostre o somatório entre eles. */

const prompt = require('prompt-sync')();
let soma = 0;

// Loop para ler 5 números e calcular a soma
for (let i = 1; i <= 5; i++) {
    let numero = parseFloat(prompt("Digite o " + i + "º número: "));
    soma += numero; // Adiciona o número à soma
}

// Exibe o somatório
console.log("O somatório dos números é: " + soma);

