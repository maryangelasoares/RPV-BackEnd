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

// Loop para ler a idade de 10 pessoas
for (let i = 1; i <= 10; i++) {
    // Solicita ao usuário que insira a idade da pessoa
    let idade = parseInt(prompt("Digite a idade da pessoa " + i + ":"));
    
    // Soma a idade ao total de idades
    totalIdade += idade;

    // Verifica se a idade é maior que 20 e atualiza o contador
    if (idade > 20) {
        contadorMaisDe20++;
    }

    // Verifica se a idade é menor que 10 e atualiza o contador
    if (idade < 10) {
        contadorMenosDe10++;
    }

    // Atualiza a maior idade encontrada, se necessário
    if (idade > maiorIdade) {
        maiorIdade = idade;
    }

    // Atualiza a menor idade encontrada, se necessário
    if (idade < menorIdade) {
        menorIdade = idade;
    }
}

// Calcula a média das idades
let mediaIdade = totalIdade / 10;

// Exibe os resultados no console
console.log("A média de idade do grupo é: " + mediaIdade.toFixed(2));
console.log("Quantidade de pessoas com mais de 20 anos: " + contadorMaisDe20);
console.log("Quantidade de pessoas com menos de 10 anos: " + contadorMenosDe10);
console.log("A maior idade lida é: " + maiorIdade);
console.log("A menor idade lida é: " + menorIdade);


