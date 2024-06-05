// index.js
const { lerDadosDosPets } = require('./pets');

function main() {
    const { cachorro, gato } = lerDadosDosPets();

    console.log("\nInformações dos Pets Cadastrados:");

    console.log("\nCachorro:");
    console.log(`Nome: ${cachorro.nome}`);
    console.log(`Sexo: ${cachorro.sexo}`);
    console.log(`Nome do dono(a): ${cachorro.nomeDono}`);
    console.log(`Telefone do dono(a): ${cachorro.telefoneDono}`);
    console.log(`Raça: ${cachorro.raca}`);
    console.log(`Cor: ${cachorro.cor}`);
    console.log(`Idade: ${cachorro.idade}`);
    console.log(`Peso: ${cachorro.peso}`);
    console.log(`Altura: ${cachorro.altura}`);

    console.log("\nGato:");
    console.log(`Nome: ${gato.nome}`);
    console.log(`Sexo: ${gato.sexo}`);
    console.log(`Nome do dono(a): ${gato.nomeDono}`);
    console.log(`Telefone do dono(a): ${gato.telefoneDono}`);
    console.log(`Raça: ${gato.raca}`);
    console.log(`Cor: ${gato.cor}`);
    console.log(`Idade: ${gato.idade}`);
    console.log(`Peso: ${gato.peso}`);
    console.log(`Altura: ${gato.altura}`);
}

main();
