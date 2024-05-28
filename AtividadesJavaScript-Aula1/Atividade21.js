/* 21: Crie um programa que leia os valores A, B, C e exiba no console os números ordenados em ordem crescente e depois em ordem decrescente. */

const prompt = require('prompt-sync')();

// Solicita ao usuário que insira os valores A, B e C
let A = parseFloat(prompt("Digite o valor de A:"));
let B = parseFloat(prompt("Digite o valor de B:"));
let C = parseFloat(prompt("Digite o valor de C:"));

// Armazena os valores em um array
let valores = [A, B, C];

// Ordena os valores em ordem crescente
let crescente = valores.slice().sort((a, b) => a - b);

// Ordena os valores em ordem decrescente
let decrescente = valores.slice().sort((a, b) => b - a);

// Exibe os valores ordenados em ordem crescente
console.log("Valores em ordem crescente: " + crescente.join(', '));

// Exibe os valores ordenados em ordem decrescente
console.log("Valores em ordem decrescente: " + decrescente.join(', '));
