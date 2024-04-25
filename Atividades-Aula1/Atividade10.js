/* 10: Crie um programa que leia o tempo de duração de uma atividade em horas, minutos e segundos e mostre-o expresso em segundos. */
const prompt = require('prompt-sync')();

// Solicita ao usuário que insira o tempo de duração da atividade
let horas = parseInt(prompt("Digite o número de horas: "));
let minutos = parseInt(prompt("Digite o número de minutos: "));
let segundos = parseInt(prompt("Digite o número de segundos: "));

// Calcula o tempo total em segundos
let tempoTotalSegundos = (horas * 3600) + (minutos * 60) + segundos;

// Exibe o tempo de duração da atividade expresso em segundos
console.log("O tempo de duração da atividade expresso em segundos é: " + tempoTotalSegundos + " segundos.");
