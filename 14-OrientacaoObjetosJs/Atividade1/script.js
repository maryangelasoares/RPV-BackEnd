// Classe Usuário
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

    exibirInformacoes() {
        let info = `<h2>Dados do Aluno:</h2>
                    <p>Nome: ${this.nome} ${this.sobrenome}</p>
                    <p>CPF: ${this.cpf}</p>
                    <p>Sexo: ${this.sexo}</p>
                    <p>Data de Nascimento: ${this.dataNascimento}</p>
                    <p>Endereço: ${this.endereco}</p>
                    <p>Telefone: ${this.telefone}</p>`;
        return info;
    }
}
document.getElementById('formulario').addEventListener('submit', function(event) { 
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let cpf = document.getElementById('cpf').value;
    let sexo = document.getElementById('sexo').value;
    let dataNascimento = document.getElementById('dataNascimento').value;
    let endereco = document.getElementById('endereco').value;
    let telefone = document.getElementById('telefone').value;

    let usuario = new Usuario(nome, sobrenome, cpf, sexo, dataNascimento, endereco, telefone);

    document.getElementById('informacoesUsuario').innerHTML = usuario.exibirInformacoes();
});