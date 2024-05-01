/* Utilizando arrays:  Crie um programa que leia o nome, a idade e o sexo de 5 pessoas, 
mostrando no final: 
a) Quantos homens foram cadastrados; 
b) Quantas mulheres foram cadastradas; 
c) A média de idade do grupo; 
d) A média de idade dos homens; 
e) Quantas mulheres tem mais de 20 anos. */

const prompt = require('prompt-sync')();

// Arrays para armazenar os dados das pessoas
let nomes = [];
let idades = [];
let sexos = [];

// Variáveis para contar o número de homens, mulheres e mulheres com mais de 20 anos
let numHomens = 0;
let numMulheres = 0;
let numMulheresMais20 = 0;

// Loop para ler os dados de 5 pessoas
for (let i = 1; i <= 5; i++) {
    let nome = prompt("Digite o nome da pessoa " + i + ": ");
    let idade = parseInt(prompt("Digite a idade da pessoa " + i + ": "));
    let sexo = prompt("Digite o sexo da pessoa " + i + " (M para masculino, F para feminino): ").toUpperCase();

    nomes.push(nome);
    idades.push(idade);
    sexos.push(sexo);

    if (sexo === 'M') {
        numHomens++;
    } else {
        numMulheres++;
    }

    // Verifica se a pessoa é mulher e tem mais de 20 anos
    if (sexo === 'F' && idade > 20) {
        numMulheresMais20++;
    }
}

// Calcula a média de idade do grupo
let somaIdades = idades.reduce((total, idade) => total + idade, 0);
let mediaIdadeGrupo = somaIdades / idades.length;

// Filtra as idades dos homens
let idadesHomens = idades.filter((idade, index) => sexos[index] === 'M');

// Calcula a média de idade dos homens
let somaIdadesHomens = idadesHomens.reduce((total, idade) => total + idade, 0);
let mediaIdadeHomens = somaIdadesHomens / idadesHomens.length;

// Exibe os resultados no console
console.log("Quantidade de homens cadastrados: ", numHomens);
console.log("Quantidade de mulheres cadastradas: ", numMulheres);
console.log("Média de idade do grupo: ", mediaIdadeGrupo.toFixed(2));
console.log("Média de idade dos homens: ", mediaIdadeHomens.toFixed(2));
console.log("Quantidade de mulheres com mais de 20 anos: ", numMulheresMais20);
