/* 13: Crie um programa que leia o salário de um funcionário, calcule e mostre o seu novo salário, com 27,50% de aumento.*/

const prompt = require('prompt-sync')();

// Solicita o salário atual do funcionário
let salarioAtual = parseFloat(prompt("Digite o salário atual do funcionário: "));

// Calcula o aumento de 27.50%
let aumento = salarioAtual * 0.275;

// Calcula o novo salário
let novoSalario = salarioAtual + aumento;

console.log("O novo salário do funcionário, com 27.50% de aumento, é: R$ " + novoSalario.toFixed(2));
