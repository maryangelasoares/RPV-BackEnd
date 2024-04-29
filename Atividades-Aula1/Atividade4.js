/* 4: Crie um programa que leia uma disciplina, um aluno e as quatro notas desse aluno naquela disciplina. Ao final, mostre na tela a média do aluno na disciplina.*/

const prompt = require('prompt-sync')();

let disciplina = prompt("Digite o nome da disciplina: ");
let aluno = prompt("Digite o nome do aluno: ");

// Array para armazenar as quatro notas do aluno
let notas = [];
// Loop para ler as quatro notas do aluno
for (let i = 0; i < 4; i++) {
    // Solicita ao usuário que insira uma nota e converte para número
    let nota = parseFloat(prompt("Digite a nota " + (i + 1) + " do aluno: "));
    notas.push(nota); // Adiciona a nota ao array
}

let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i]; //Recebe as notas armazenadas no array
}
let media = soma / notas.length; 

console.log("A média deste aluno(a) " + aluno + " na disciplina de " + disciplina + " é: " + media.toFixed(2));
