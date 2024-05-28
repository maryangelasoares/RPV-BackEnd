/* 2. Utilizando objeto: Crie um programa que leia os dados de um aluno: nome, matrícula,
     disciplina, nota. 
   - Se a nota do aluno for maior ou igual a 60 exiba no console “Aprovado”.
   - Se a nota do aluno for menor que 60 porém maior ou igual a 50 
   exiba no console “Em recuperação” 
   - Se a nota do aluno for menor que 50 exiba no console “Reprovado”.
   criar nova propriedade chamada situacao para o aluno. */

const prompt = require('prompt-sync')();

// Definindo a classe Aluno
class Aluno {
    constructor(nome, matricula, disciplina, nota) {
        this.nome = nome;
        this.matricula = matricula;
        this.disciplina = disciplina;
        this.nota = nota;
        this.situacao = this.calcularSituacao(); // Calcula a situação automaticamente ao criar o objeto
    }

    // Método para calcular a situação do aluno com base na nota
    calcularSituacao() {
        if (this.nota >= 60) {
            return "Aprovado";
        } else if (this.nota >= 50) {
            return "Em recuperação";
        } else {
            return "Reprovado";
        }
    }
}

// Função para ler os dados do aluno e exibir a situação
function main() {
    // Solicita os dados do aluno
    let nome = prompt("Digite o nome do aluno: ");
    let matricula = prompt("Digite a matrícula do aluno: ");
    let disciplina = prompt("Digite a disciplina: ");
    let nota = parseFloat(prompt("Digite a nota do aluno: "));

    // Cria um objeto Aluno com os dados fornecidos
    let aluno = new Aluno(nome, matricula, disciplina, nota);

    // Exibe a situação do aluno no console
    console.log("\nSituação do aluno: ");
    console.log("Nome: ", aluno.nome);
    console.log("Matrícula: ", aluno.matricula);
    console.log("Disciplina: ", aluno.disciplina);
    console.log("Nota: ", aluno.nota);
    console.log("Situação: ", aluno.situacao);
}

// Chama a função principal
main();
