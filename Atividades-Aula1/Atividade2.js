/* 2: Crie um programa que leia o nome de uma pessoa e mostre uma mensagem de boas-vindas para ela. */

const prompt = require('prompt-sync')();

//Solicitando que o usuário digite seu nome
let nome = prompt ("Digite seu nome? ");
//Exibe seu nome
console.log ("Bem vindo, " + nome,"!");