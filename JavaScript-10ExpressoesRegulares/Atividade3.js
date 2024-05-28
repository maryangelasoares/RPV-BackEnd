/* 3.  Crie um programa que leia os dados de um grupo de 10 pessoas: 
    nome, sexo (M-Masculino, F-Feminino, P-Prefiro não dizer, O-Outros), 
    idade e estado civil (C-Casado(a), S-Solteiro(a) e V-Viúvo(a)), 
    exibindo ao final do programa: 
        - A média de idade do grupo 
        - A soma de todas as idades do grupo
        - De quem foi a maior idade lida, exiba todas as informações da pessoa
        - De quem foi a menor idade lida, exiba todas as informações da pessoa
        - Quantas pessoas tem mais de 20 anos, exiba todas as informações dessas pessoas 
        - Quantas pessoas tem menos de 10 anos, exiba todas as informações dessas pessoas
        - Quantas pessoas do sexo masculino, exiba todas as informações dessas pessoas 
        - Quantas pessoas do sexo feminino, exiba todas as informações dessas pessoas
        - Quantas pessoas se absteram de dizer o sexo ou marcaram outros, 
        exiba todas as informações dessas pessoas
        - Quantas pessoas são casadas, exiba todas as informações dessas pessoas 
        - Quantas pessoas são solteiras, exiba todas as informações dessas pessoas 
        - Quantas pessoas são viúvas, exiba todas as informações dessas pessoas  */

const prompt = require('prompt-sync')();

function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    if (!/^\d{11}$/.test(cpf) || /^(.)\1+$/.test(cpf)) {
        return false;
    }
    return true;
}

function validarTelefone(telefone) {
    if (!/^\(\d{3}\) \d \d{4}-\d{4}$/.test(telefone)) {
        return false;
    }
    return true;
}

const grupoDePessoas = [];

for (let i = 1; i <= 10; i++) {
    console.log(`Pessoa ${i}: `);
    const nome = prompt("Digite o nome: ");
    const sexo = prompt("Digite o sexo (M-Masculino, F-Feminino, P-Prefiro não dizer, O-Outros): ");
    const idade = parseInt(prompt("Digite a idade: "));
    const estadoCivil = prompt("Digite o estado civil (C-Casado(a), S-Solteiro(a) ou V-Viúvo(a)): ");
    const cpf = prompt("Digite o CPF (11 dígitos): ");
    const telefone = prompt("Digite o telefone (Formato (DDD) X XXXX-XXXX): ");


    if (!validarCPF(cpf)) {
        console.log("CPF inválido. Por favor, insira um CPF válido com 11 dígitos.");
        continue;
    }
    if (!validarTelefone(telefone)) {
        console.log("Telefone inválido. Por favor, insira um telefone válido no formato (DDD) X XXXX-XXXX.");
        continue;
    }

    grupoDePessoas.push({ nome, sexo, idade, estadoCivil, cpf, telefone });
}

// Calcula a média de idade
const mediaIdade = grupoDePessoas.reduce((soma, pessoa) => soma + pessoa.idade, 0) / grupoDePessoas.length;

// Encontra a pessoa mais velha
const pessoaMaisVelha = grupoDePessoas.reduce((max, pessoa) => max.idade > pessoa.idade ? max : pessoa);

// Encontra a pessoa mais nova
const pessoaMaisNova = grupoDePessoas.reduce((min, pessoa) => min.idade < pessoa.idade ? min : pessoa);

// Filtra pessoas com mais de 20 anos
const pessoasMaisDeVinteAnos = grupoDePessoas.filter(pessoa => pessoa.idade > 20);

// Filtra pessoas com menos de 10 anos
const pessoasMenosDeDezAnos = grupoDePessoas.filter(pessoa => pessoa.idade < 10);

console.log("\nResultados:");
console.log("Média de idade do grupo: ", mediaIdade.toFixed(2));
console.log("Pessoa mais velha: ", pessoaMaisVelha);
console.log("Pessoa mais nova: ", pessoaMaisNova);
console.log("Pessoas com mais de 20 anos: ", pessoasMaisDeVinteAnos);
console.log("Pessoas com menos de 10 anos: ", pessoasMenosDeDezAnos);
console.log("Quantidade de pessoas do sexo masculino: ", grupoDePessoas.filter(pessoa => pessoa.sexo.toUpperCase() === 'M').length);
console.log("Quantidade de pessoas do sexo feminino: ", grupoDePessoas.filter(pessoa => pessoa.sexo.toUpperCase() === 'F').length);
console.log("Quantidade de pessoas que não informaram o sexo ou marcaram outros: ", grupoDePessoas.filter(pessoa => ['P', 'O'].includes(pessoa.sexo.toUpperCase())).length);
console.log("Quantidade de pessoas casadas: ", grupoDePessoas.filter(pessoa => pessoa.estadoCivil.toUpperCase() === 'C').length);
console.log("Quantidade de pessoas solteiras: ", grupoDePessoas.filter(pessoa => pessoa.estadoCivil.toUpperCase() === 'S').length);
console.log("Quantidade de pessoas viúvas: ", grupoDePessoas.filter(pessoa => pessoa.estadoCivil.toUpperCase() === 'V').length);
