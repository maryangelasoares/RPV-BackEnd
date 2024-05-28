/* 1: Crie um programa que exiba no console uma mensagem digitada pelo usuário.*/

const prompt = require('prompt-sync')();

let mensagem = prompt("Digite uma mensagem: ");
console.log ("Você digitou a mensagem: " + mensagem);