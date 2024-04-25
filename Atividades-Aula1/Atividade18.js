/* 18: Crie um programa para receber um número qualquer e exibir no console se é par ou ímpar. */

const prompt = require('prompt-sync')();

// Solicita ao usuário que insira um número
let numero = parseInt(prompt("Digite um número:"));

// Verifica se o número é par ou ímpar
if (numero % 2 === 0) {
    console.log("O número " + numero + " é par.");
} else {
    console.log("O número " + numero + " é ímpar.");
}
