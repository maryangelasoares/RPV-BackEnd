/* Utilizando arrays: Crie um programa que leia o nome e o preço de 8 produtos. 
No final, mostre no console qual foi o nome e preço do maior e qual foi o nome e preço do menor preço digitados. */

const prompt = require('prompt-sync')();

let nomesProdutos = [];
let precosProdutos = [];

for (let i = 1; i <= 8; i++) {
    let nome = prompt("Digite o nome do produto " + i + ": ");
    let preco = parseFloat(prompt("Digite o preço do produto " + i + ": "));

    nomesProdutos.push(nome);
    precosProdutos.push(preco);
}

let indiceMenorPreco = precosProdutos.indexOf(Math.min(...precosProdutos));
let indiceMaiorPreco = precosProdutos.indexOf(Math.max(...precosProdutos));

console.log("O produto de menor preço é:", nomesProdutos[indiceMenorPreco], "- Preço:", precosProdutos[indiceMenorPreco]);
console.log("O produto de maior preço é:", nomesProdutos[indiceMaiorPreco], "- Preço:", precosProdutos[indiceMaiorPreco]);
