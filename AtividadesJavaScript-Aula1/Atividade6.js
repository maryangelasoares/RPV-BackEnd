/* 6: Crie um programa que leia o nome e o salário de um funcionário, mostrando no final uma mensagem. */

const prompt = require("prompt-sync")();

function lerNome() {
    return prompt("Digite o nome do funcionário: ");
}
function lerSalario() {
    return parseFloat(prompt("Digite o salário do funcionário: "));
}
function mostrarMensagem(nome, salario) {
    console.log(`O funcionário ${nome} tem um salário de R$ ${salario.toFixed(2)}.`);
}

function main() {
    let nome = lerNome();
    let salario = lerSalario();
    mostrarMensagem(nome, salario);
}
main();