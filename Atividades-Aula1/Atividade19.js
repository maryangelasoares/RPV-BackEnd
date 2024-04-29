/* 19: Crie um programa que leia um valor inicial A e exiba a sequência de valores do cálculo de A! e o seu resultado.
Ex: 5! = 5 X 4 X 3 X 2 X 1 = 120. */

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número para calcular o fatorial: "));

// Inicializa o resultado do fatorial como 1
let resultado = 1;
let sequencia = '';

// Calcula o fatorial
for (let i = numero; i >= 1; i--) {
    resultado *= i;
    sequencia += i;
    if (i !== 1) {
        sequencia += ' x ';
    }
}

console.log(numero + "! = " + sequencia + " = " + resultado);
