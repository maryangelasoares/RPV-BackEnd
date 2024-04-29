/* 7: Crie um programa que leia 5 números e mostre o somatório entre eles. */

const prompt = require('prompt-sync')();

let soma = 0;

for (let i = 1; i <= 5; i++) {
    let numero = parseFloat(prompt("Digite o " + i + "º número: "));
    soma += numero; 
}

console.log("O somatório dos números é: " + soma);

