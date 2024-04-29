/* 28: Tendo como dados de entrada dois valores numéricos digitados pelo usuário, crie um programa para uma calculadora com as seguintes
operações: soma, subtração, multiplicação e divisão. Após a escolha da operação exiba no console o resultado. */

const prompt = require('prompt-sync')();

//Declarando função para calculadora;
function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero";
    }
    return a / b;
}

//Declarando a variável verdadeira, enquanto não for falsa.
let continuar = true;

while (continuar) {
    const num1 = parseFloat(prompt("Digite o primeiro número: "));
    const num2 = parseFloat(prompt("Digite o segundo número: "));
    const operacao = prompt("Digite a operação (+, -, *, /): ");

    let resultado;
    switch (operacao) {
        case "+":
            resultado = soma(num1, num2);
            break;
        case "-":
            resultado = subtracao(num1, num2);
            break;
        case "*":
            resultado = multiplicacao(num1, num2);
            break;
        case "/":
            resultado = divisao(num1, num2);
            break;
        default:
            resultado = "Operação inválida";
    }

    console.log("Resultado: " + resultado);

    //Solicitando se o usuário quer continuar a fazer outra operação;
    const resposta = prompt("Deseja fazer outra operação? (s/n): ");
    if (resposta.toLowerCase() !== "s") {
        continuar = false;
    }
}
