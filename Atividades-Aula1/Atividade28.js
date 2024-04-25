/* 28: Tendo como dados de entrada dois valores numéricos digitados pelo usuário, crie um programa para uma calculadora com as seguintes
operações: soma, subtração, multiplicação e divisão. Após a escolha da operação exiba no console o resultado. */

const prompt = require('prompt-sync')();

// Solicita ao usuário que insira a altura e o sexo da pessoa
let altura = parseFloat(prompt("Digite a altura da pessoa (em metros):"));
let sexo = prompt("Digite o sexo da pessoa (M para masculino, F para feminino):");

let pesoIdeal;

// Verifica o sexo e calcula o peso ideal com base na fórmula correspondente
if (sexo.toUpperCase() === 'M') {
    pesoIdeal = (72.7 * altura) - 58; // Fórmula para homens
} else if (sexo.toUpperCase() === 'F') {
    pesoIdeal = (62.1 * altura) - 44.7; // Fórmula para mulheres
} else {
    console.log("Sexo inválido.");
}

// Exibe o peso ideal da pessoa
console.log("O peso ideal da pessoa é: " + pesoIdeal.toFixed(2) + " kg");

