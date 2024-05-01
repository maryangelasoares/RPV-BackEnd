const prompt = require('prompt-sync')();

// Array para armazenar as dimensões do terreno [largura, comprimento]
let dimensoes = [];

dimensoes.push(parseFloat(prompt("Digite a largura do terreno (em metros): ")));
dimensoes.push(parseFloat(prompt("Digite o comprimento do terreno (em metros): ")));

let areaTerreno = dimensoes[0] * dimensoes[1];

console.log("A área do terreno é:", areaTerreno, "metros quadrados.");
