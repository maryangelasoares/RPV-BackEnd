/* Crie um programa que leia o tempo de duração de uma atividade em segundos e mostre-o expresso em horas, minutos e segundos. */
const prompt = require('prompt-sync')();

let tempoTotalSegundos = parseInt(prompt("Digite o tempo de duração da atividade em segundos: "));

// Calcula o número de horas, minutos e segundos
let horas = Math.floor(tempoTotalSegundos / 3600); 
let minutos = Math.floor((tempoTotalSegundos % 3600) / 60); 
let segundos = tempoTotalSegundos % 60; 

console.log("O tempo de duração da atividade é: " + horas + " horas, " + minutos + " minutos e " + segundos + " segundos.");
