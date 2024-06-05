// pets.js
const prompt = require('prompt-sync')({ sigint: true });

function lerDadosPet(tipo) {
    console.log(`\nDigite os dados do ${tipo}:`);
    let pet = {};

    pet.nome = prompt("Nome: ");
    pet.sexo = prompt("Sexo: ");
    pet.nomeDono = prompt("Nome do dono(a): ");
    pet.telefoneDono = prompt("Telefone do dono(a): ");
    pet.raca = prompt("Raça: ");
    pet.cor = prompt("Cor: ");
    pet.idade = prompt("Idade: ");
    pet.peso = prompt("Peso: ");
    pet.altura = prompt("Altura: ");

    return pet;
}

function lerDadosDosPets() {
    const cachorro = lerDadosPet("cachorro");
    const gato = lerDadosPet("gato");

    return { cachorro, gato };
}

module.exports = {
    lerDadosDosPets
};
