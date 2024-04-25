/* 26: Crie um programa que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de
pagamento. Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado. 
Código – Condição de Pagamento:
1 – À vista em dinheiro ou cheque, recebe 10% de desconto
2 – À vista no cartão de crédito, recebe 15% de desconto
3 – Em duas vezes, preço normal de etiqueta sem juros
4 – Em duas vezes, preço normal de etiqueta mais juros de 10% */

const prompt = require('prompt-sync')();

// Solicita ao usuário que insira o preço do produto e o código da condição de pagamento
let precoProduto = parseFloat(prompt("Digite o preço do produto:"));
let codigoCondicao = parseInt(prompt("Digite o código da condição de pagamento:\n1 - À vista em dinheiro ou cheque\n2 - À vista no cartão de crédito\n3 - Em duas vezes sem juros\n4 - Em duas vezes com juros de 10%"));

let valorFinal;

// Calcula o valor a ser pago de acordo com o código da condição de pagamento
switch (codigoCondicao) {
    case 1:
        valorFinal = precoProduto * 0.9; // 10% de desconto para pagamento à vista em dinheiro ou cheque
        break;
    case 2:
        valorFinal = precoProduto * 0.85; // 15% de desconto para pagamento à vista no cartão de crédito
        break;
    case 3:
        valorFinal = precoProduto; // Preço normal para pagamento em duas vezes sem juros
        break;
    case 4:
        valorFinal = precoProduto * 1.1; // Preço com 10% de juros para pagamento em duas vezes
        break;
    default:
        console.log("Código de condição de pagamento inválido.");
}

// Exibe o valor a ser pago
console.log("O valor a ser pago é: R$ " + valorFinal.toFixed(2));
