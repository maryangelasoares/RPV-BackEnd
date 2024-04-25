/* 22: Crie um programa que leia dois valores inteiros A e B se os valores forem iguais deverá se somar os dois, caso contrário multiplique A por B. Ao final de qualquer um dos cálculos
deve-se atribuir o resultado para uma variável C e mostrar seu conteúdo no console. */

const prompt = require('prompt-sync')();

// Solicita ao usuário que insira os valores A e B
let A = parseInt(prompt("Digite o valor de A:"));
let B = parseInt(prompt("Digite o valor de B:"));

let C;

// Verifica se os valores de A e B são iguais
if (A === B) {
    // Se forem iguais, soma os valores de A e B
    C = A + B;
    console.log("Os valores são iguais. A soma de A e B é: " + C);
} else {
    // Se não forem iguais, multiplica A por B
    C = A * B;
    console.log("Os valores são diferentes. A multiplicação de A por B é: " + C);
}
