/* 23: Crie um programa que leia os dados de um aluno: nome, matrícula, disciplina, nota. Se a nota do aluno for maior ou
igual a 60 exiba no console “Aprovado”, se a nota do aluno for menor que 60 porém maior ou igual a 50 exiba no
console “Em recuperação” e se a nota do aluno for menor que 50 exiba no console “Reprovado”. */

const prompt = require('prompt-sync')();

let nome = prompt("Digite o nome do aluno: ");
let matricula = prompt("Digite a matrícula do aluno: ");
let disciplina = prompt("Digite a disciplina: ");
let nota = parseFloat(prompt("Digite a nota do aluno: "));


if (nota >= 60) {
    console.log("Aprovado.");
} else if (nota >= 50) {
    console.log("Em recuperação.");
} else {
    console.log("Reprovado.");
}
