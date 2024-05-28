/* 8: Crie um programa que leia a idade de uma pessoa expressa em anos, meses e dias e mostre-a expressa apenas em dias.*/

const prompt = require('prompt-sync')();

function calcularDataNasc(dataNascimento) {
    const hoje = new Date();
    const dataNasc = new Date(dataNascimento);

    let idadeAnos = hoje.getFullYear() - dataNasc.getFullYear();
    return idadeAnos;
}

const dataNascimento = prompt("Digite a data de nascimento (AAAA-MM-DD): ");
const idadeEmAnos = calcularDataNasc(dataNascimento);
console.log(`A idade em anos é: ${idadeEmAnos}`);