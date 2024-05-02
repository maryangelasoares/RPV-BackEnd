/* 1: Utilizando arrays: A imobiliária ABC vende apenas terrenos retangulares. 
Crie um programa para ler as dimensões de um terreno e depois exibir a área do terreno. */

const prompt = require('prompt-sync')();

let terreno = [];

terreno.push(parseFloat(prompt("Digite a largura do terreno: ")));
terreno.push(parseFloat(prompt("Digite a altura do terreno: ")));

let areaTerreno = terreno [0] * terreno [1];

console.log (`A àrea do terreno é de ${areaTerreno} metros².`);