class Aluno {
    constructor(nome, matricula, disciplina, nota) {
        this.nome = nome;
        this.matricula = matricula;
        this.disciplina = disciplina;
        this.nota = parseFloat(nota);
        this.situacao = this.calcularSituacao();
    }

    calcularSituacao() {
        if (this.nota >= 60) {
            return 'Aprovado';
        } else if (this.nota >= 50) {
            return 'Em recuperação';
        } else {
            return 'Reprovado';
        }
    }

    exibirInformacoesDoAluno() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Matrícula: ${this.matricula}`);
        console.log(`Disciplina: ${this.disciplina}`);
        console.log(`Nota: ${this.nota}`);
        console.log(`Situação: ${this.situacao}`);
    }

    obterInformacoesFormatadas() {
        return `
            <h2>Dados do Aluno</h2>
            <p><strong>Nome:</strong> ${this.nome}</p>
            <p><strong>Matrícula:</strong> ${this.matricula}</p>
            <p><strong>Disciplina:</strong> ${this.disciplina}</p>
            <p><strong>Nota:</strong> ${this.nota}</p>
            <p><strong>Situação:</strong> ${this.situacao}</p>
        `;
    }
}

document.getElementById('alunoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let matricula = document.getElementById('matricula').value;
    let disciplina = document.getElementById('disciplina').value;
    let nota = document.getElementById('nota').value;

    let aluno = new Aluno(nome, matricula, disciplina, nota);

    aluno.exibirInformacoesDoAluno();

    document.getElementById('infoContainer').innerHTML = aluno.obterInformacoesFormatadas();

    // Limpar campos do formulário
    document.getElementById('alunoForm').reset();
});

document.getElementById('limparInfo').addEventListener('click', function() {
    document.getElementById('infoContainer').innerHTML = '';
});
