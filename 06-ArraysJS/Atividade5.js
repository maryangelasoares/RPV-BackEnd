/* Utilizando arrays: Crie um programa que leia os dados de um aluno: 
matrícula, nome completo, nome do curso, 5 disciplinas do curso com 5 notas (uma para cada disciplina). 
Ao final, mostre no console a média geral do aluno no curso. */

const prompt = require('prompt-sync')();

// Função para calcular a média de um array de notas
function calcularMedia(notas) {
    let soma = notas.reduce((total, nota) => total + nota, 0);
    return soma / notas.length;
}

let aluno = [];

aluno.push(prompt("Digite a matrícula do aluno: "));
aluno.push(prompt("Digite o nome completo do aluno: "));
aluno.push(prompt("Digite o nome do curso do aluno: "));

let notas = [];

for (let i = 0; i < 5; i++) {
    let nota = parseFloat(prompt(`Digite a nota da disciplina ${i + 1}: `));
    notas.push(nota);
}

aluno.push(notas);

let mediaGeral = calcularMedia(notas);

console.log(`A média geral do aluno no curso é: ${mediaGeral.toFixed(2)}`);
