/* 9: Crie um programa que leia a idade de uma pessoa expressa em dias e mostre-a expressa em anos, meses e dias.*/
const prompt = require('prompt-sync')();

// Solicita ao usuário que insira a idade em dias
let idadeEmDias = parseInt(prompt("Digite a idade em dias: "));

// Calcula a idade em anos, meses e dias
let anos = Math.floor(idadeEmDias / 365);
let meses = Math.floor((idadeEmDias % 365) / 30);
let dias = idadeEmDias % 30;

// Exibe a idade expressa em anos, meses e dias
console.log("A idade expressa em anos, meses e dias é: " + anos + " anos, " + meses + " meses, " + dias + " dias.");
