/* 15: Crie um programa que leia o valor de um boleto que será pago com atraso, a quantidade de dias em atraso, calcule e mostre o seu novo valor com uma taxa de 1,25% ao dia. */

const prompt = require('prompt-sync')();

// Solicita o valor do boleto e a quantidade de dias em atraso
let valorBoleto = parseFloat(prompt("Digite o valor do boleto:"));
let diasAtraso = parseInt(prompt("Digite a quantidade de dias em atraso:"));

// Calcula o novo valor com a taxa de 1,25% ao dia
let taxaPorDia = 0.0125; // 1,25% em forma decimal
let novoValorBoleto = valorBoleto + (valorBoleto * taxaPorDia * diasAtraso);

// Exibe o novo valor do boleto
console.log("O novo valor do boleto, com a taxa de 1,25% ao dia, é: R$ " + novoValorBoleto.toFixed(2));
