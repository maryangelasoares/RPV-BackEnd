/* 5: Crie um programa que exiba na tela a tabuada do número digitado pelo usuário. */

const prompt = require("prompt-sync")();

let continuar;
do {
    let numero = prompt("Digite um número para a tabuada: ");

    if (isNaN(numero) || numero === "" || numero <=0  ) {
        console.log("Número inválido. Por favor, digite um número válido.");
    } else {
        const numeroInteiro = parseInt(numero);

        for (let i = 1; i <= 10; i++) {
            console.log(`${numeroInteiro} x ${i} = ${numeroInteiro * i}`);
        }
    }

    let resposta = prompt("Deseja digitar outro número? (S/N): ");

    continuar = resposta.toUpperCase() === "S";
} while (continuar);