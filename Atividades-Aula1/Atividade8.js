/* Crie um programa que leia a idade de uma pessoa expressa em anos, meses e dias e mostre-a expressa apenas em dias.*/

const prompt = require('prompt-sync')();

// Solicita ao usuário que insira a idade em anos, meses e dias
let anos = parseInt(prompt("Digite a idade em anos:"));
let meses = parseInt(prompt("Digite a idade em meses:"));
let dias = parseInt(prompt("Digite a idade em dias:"));

// Calcula a idade em dias
let idadeEmDias = (anos * 365) + (meses * 30) + dias;

// Exibe a idade apenas em dias
console.log("A idade expressa apenas em dias é: " + idadeEmDias + " dias.");
