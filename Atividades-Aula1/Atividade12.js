/* 12: Crie um programa que leia o preço de um produto, calcule e mostre o seu preço promocional, com 15% de desconto. */
const prompt = require('prompt-sync')();

// Solicita ao usuário que insira o preço do produto
let precoProduto = parseFloat(prompt("Digite o preço do produto: "));

// Calcula o desconto de 15%
let desconto = precoProduto * 0.15;

// Calcula o preço promocional
let precoPromocional = precoProduto - desconto;

// Exibe o preço promocional com 15% de desconto
console.log("O preço promocional com 15% de desconto é: R$" + precoPromocional.toFixed(2));
