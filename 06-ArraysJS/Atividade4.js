/* Utilizando arrays: Crie um programa que leia o peso e a altura de 7 pessoas, 
mostrando no final: 
a) Qual foi a média de altura do grupo; 
b) Quantas pessoas pesam mais de 90Kg; 
c) Quantas pessoas que pesam menos de 50Kg tem menos de 1.60m;
d) Quantas pessoas que medem mais de 1.90m pesam mais de 100Kg. */

const prompt = require('prompt-sync')();

// Arrays para armazenar os pesos e alturas das pessoas
let pesos = [];
let alturas = [];

let mediaAltura = 0;
let numPessoasMais90kg = 0;
let numPessoasMenos50kgMenos160m = 0;
let numPessoasMais190mMais100kg = 0;

for (let i = 1; i <= 7; i++) {
    let peso = parseFloat(prompt("Digite o peso da pessoa " + i + " (em Kg): "));
    let altura = parseFloat(prompt("Digite a altura da pessoa " + i + " (em metros): "));

    pesos.push(peso);
    alturas.push(altura);

    mediaAltura += altura;

    if (peso > 90) {
        numPessoasMais90kg++;
    }
    if (peso < 50 && altura < 1.60) {
        numPessoasMenos50kgMenos160m++;
    }
    if (altura > 1.90 && peso > 100) {
        numPessoasMais190mMais100kg++;
    }
}

mediaAltura /= 7;

console.log("Média de altura do grupo: ", mediaAltura.toFixed(2), "metros");
console.log("Quantidade de pessoas que pesam mais de 90Kg: ", numPessoasMais90kg);
console.log("Quantidade de pessoas que pesam menos de 50Kg e tem menos de 1.60m: ", numPessoasMenos50kgMenos160m);
console.log("Quantidade de pessoas que medem mais de 1.90m e pesam mais de 100Kg: ", numPessoasMais190mMais100kg);
