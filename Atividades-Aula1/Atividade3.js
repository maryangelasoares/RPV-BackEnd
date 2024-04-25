/* 3: Crie um programa que leia os dados de um aluno: matrícula, nome, sobrenome, CPF, sexo, data de nascimento, endereço e telefone e exiba no console. */

const prompt = require('prompt-sync')();

// Função para ler os dados do aluno
function lerDadosAluno() {
    // Objeto para armazenar os dados do aluno
    let aluno = {};

    // Solicita ao usuário que insira os dados do aluno
    aluno.matricula = prompt("Digite a matrícula do aluno: ");
    aluno.nome = prompt("Digite o nome do aluno: ");
    aluno.sobrenome = prompt("Digite o sobrenome do aluno: ");
    aluno.cpf = prompt("Digite o CPF do aluno: ");
    aluno.sexo = prompt("Digite o sexo do aluno: ");
    aluno.dataNascimento = prompt("Digite a data de nascimento do aluno: ");
    aluno.endereco = prompt("Digite o endereço do aluno: ");
    aluno.telefone = prompt("Digite o telefone do aluno: ");

    return aluno; // Retorna o objeto com os dados do aluno
}

// Função para exibir os dados do aluno no console
function exibirDadosAluno(aluno) {
    console.log("Matrícula: " + aluno.matricula);
    console.log("Nome: " + aluno.nome);
    console.log("Sobrenome: " + aluno.sobrenome);
    console.log("CPF: " + aluno.cpf);
    console.log("Sexo: " + aluno.sexo);
    console.log("Data de Nascimento: " + aluno.dataNascimento);
    console.log("Endereço: " + aluno.endereco);
    console.log("Telefone: " + aluno.telefone);
}

// Chama a função para ler os dados do aluno
let aluno = lerDadosAluno();

// Chama a função para exibir os dados do aluno no console
exibirDadosAluno(aluno);

