/* Utilizando arrays: Crie um programa que leia o nome e o preço de 8 produtos. 
No final, mostre no console qual foi o nome e preço do maior e qual foi o nome e preço do menor preço digitados. */

const prompt = require('prompt-sync')();

let nomes = [];
let precos = [];

for (let i = 1; i <= 8; i++) {
    let nome = prompt(`Digite o nome do ${i}º produto: `);
    let preco = parseFloat(prompt(`Digite o preço do ${i}º produto: R$ `));
    nomes.push(nome);
    precos.push(preco);
}

// Encontrando o produto com o maior preço
let indiceMaiorPreco = precos.indexOf(Math.max(...precos));
let maiorNome = nomes[indiceMaiorPreco];
let maiorPreco = precos[indiceMaiorPreco];

// Encontrando o produto com o menor preço
let indiceMenorPreco = precos.indexOf(Math.min(...precos));
let menorNome = nomes[indiceMenorPreco];
let menorPreco = precos[indiceMenorPreco];

console.log("\nProduto de maior preço:");
console.log("Nome:", maiorNome);
console.log("Preço: R$", maiorPreco);

console.log("\nProduto de menor preço:");
console.log("Nome:", menorNome);
console.log("Preço: R$", menorPreco);