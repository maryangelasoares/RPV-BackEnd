/* 24: Crie um programa que leia a idade de 10 pessoas, exibindo ao final do programa:
- Qual é a média de idade do grupo
- Quantas pessoas tem mais de 20 anos
- Quantas pessoas tem menos de 10 anos
- Qual foi a maior idade lida
- Qual foi a menor idade lida */

const prompt = require('prompt-sync')();

// Variáveis para armazenar os resultados
let totalIdade = 0; 
let contadorMaisDe20 = 0; 
let contadorMenosDe10 = 0; 
let maiorIdade = Number.MIN_SAFE_INTEGER; // Maior idade encontrada
let menorIdade = Number.MAX_SAFE_INTEGER; // Menor idade encontrada

for (let i = 1; i <= 10; i++) {
    let idade = parseInt(prompt("Digite a idade da pessoa " + i + ": "));
    
    totalIdade += idade;

    if (idade > 20) {
        contadorMaisDe20++;
    }

    if (idade < 10) {
        contadorMenosDe10++;
    }

    if (idade > maiorIdade) {
        maiorIdade = idade;
    }

    if (idade < menorIdade) {
        menorIdade = idade;
    }
}

let mediaIdade = totalIdade / 10;

console.log("A média de idade do grupo é: " + mediaIdade.toFixed(2));
console.log("Quantidade de pessoas com mais de 20 anos: " + contadorMaisDe20);
console.log("Quantidade de pessoas com menos de 10 anos: " + contadorMenosDe10);
console.log("A maior idade lida é: " + maiorIdade);
console.log("A menor idade lida é: " + menorIdade);


