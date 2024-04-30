/* 1. Utilizando objeto: Crie um programa que leia os dados de um usuário: 
    nome, sobrenome, CPF, sexo, data de nascimento, endereço e telefone e exiba no console. */

const prompt = require('prompt-sync')();

// Definindo a classe Usuario
class Usuario {
    constructor(nome, sobrenome, cpf, sexo, dataNascimento, endereco, telefone) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.sexo = sexo;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
        this.telefone = telefone;
    }
}

// Função para ler os dados do usuário e exibi-los
function main() {
    // Solicita os dados do usuário
    let nome = prompt("Digite seu nome: ");
    let sobrenome = prompt("Digite seu sobrenome: ");
    let cpf = prompt("Digite seu CPF: ");
    let sexo = prompt("Digite seu sexo: ");
    let dataNascimento = prompt("Digite sua data de nascimento (no formato dd/mm/aaaa): ");
    let endereco = prompt("Digite seu endereço: ");
    let telefone = prompt("Digite seu telefone: ");

    // Cria um objeto Usuario com os dados fornecidos
    let usuario = new Usuario(nome, sobrenome, cpf, sexo, dataNascimento, endereco, telefone);

    // Exibe os dados do usuário no console
    console.log("\nDados do usuário: ");
    console.log("Nome completo: ", usuario.nome + " " + usuario.sobrenome);
    console.log("CPF: ", usuario.cpf);
    console.log("Sexo: ", usuario.sexo);
    console.log("Data de nascimento: ", usuario.dataNascimento);
    console.log("Endereço: ", usuario.endereco);
    console.log("Telefone: ", usuario.telefone);
}

// Chama a função principal
main();
