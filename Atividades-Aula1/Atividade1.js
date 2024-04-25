/* 1: Crie um programa que exiba no console uma mensagem digitada pelo usuário.*/

const prompt = require('prompt-sync')();

//Pedindo ao usuário para digitar uma mensagem;
let mensagem = prompt("Digite uma mensagem: ");
//Exibir a mensagem;
console.log ("Você digitou a mensagem: " + mensagem);