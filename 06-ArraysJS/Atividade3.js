/* Utilizando arrays:  Crie um programa que leia o nome, a idade e o sexo de 5 pessoas, 
mostrando no final: 
a) Quantos homens foram cadastrados; 
b) Quantas mulheres foram cadastradas; 
c) A média de idade do grupo; 
d) A média de idade dos homens; 
e) Quantas mulheres tem mais de 20 anos. */

// (+=) é atribuição de valores.

const prompt = require('prompt-sync')();

let pessoas = [];
let homens = 0;
let mulheres = 0;
let somaIdadeGrupo = 0;
let somaIdadeHomens = 0;
let mulheresMaisDe20 = 0;

for (let i = 0; i < 5; i++) {
    let nome = prompt("Digite o nome da pessoa " + (i + 1) + ": ");
    let idade = parseInt(prompt("Digite a idade da pessoa " + (i + 1) + ": "));
    let sexo = prompt("Digite o sexo da pessoa " + (i + 1) + " (M/F): ").toUpperCase();

    if (sexo === 'M') {
        homens++;
        somaIdadeHomens += idade;
    } else {
        mulheres++;
        if (idade > 20)
            mulheresMaisDe20++;
    }
    somaIdadeGrupo += idade;

    pessoas.push({ nome: nome, idade: idade, sexo: sexo });
}

let mediaIdadeGrupo = somaIdadeGrupo / 5;
let mediaIdadeHomens = homens > 0 ? somaIdadeHomens / homens : 0;
//Se homens for maior que zero, isso significa que pelo menos um homem foi cadastrado. Se isso for verdadeiro, 
//a expressão após o '?' é atribuída à variável mediaIdadeHomens.

console.log("\nResultados:");
console.log("a) Quantidade de homens cadastrados: " + homens);
console.log("b) Quantidade de mulheres cadastradas: " + mulheres);
console.log("c) Média de idade do grupo: " + mediaIdadeGrupo.toFixed(2));
console.log("d) Média de idade dos homens: " + mediaIdadeHomens.toFixed(2));
console.log("e) Quantidade de mulheres com mais de 20 anos: " + mulheresMaisDe20);
