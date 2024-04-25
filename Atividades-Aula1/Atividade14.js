/* 14: Crie um programa que leia o valor da matrícula de um curso, calcule e mostre o seu novo valor, com 20% de desconto. */

const prompt = require('prompt-sync')();

// Solicita o valor da matrícula do curso
let valorMatricula = parseFloat(prompt("Digite o valor da matrícula do curso:"));

// Calcula o desconto de 20%
let desconto = valorMatricula * 0.20;

// Calcula o novo valor da matrícula
let novoValorMatricula = valorMatricula - desconto;

// Exibe o novo valor da matrícula
console.log("O novo valor da matrícula do curso, com 20% de desconto, é: R$ " + novoValorMatricula.toFixed(2));
