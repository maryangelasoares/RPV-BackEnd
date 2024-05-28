class Fornecedor {
    constructor(id, empresaNome, cnpjEmpresa, fornecedorNome, telefone, sexoRepresentante, dataNascimento, endereco) {
        this.id = id;
        this.empresaNome = empresaNome;
        this.cnpjEmpresa = cnpjEmpresa;
        this.fornecedorNome = fornecedorNome;
        this.telefone = telefone;
        this.sexoRepresentante = sexoRepresentante;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
    }
}

class Endereco {
    constructor(logradouro, numero, bairro, cep, municipio, estado) {
        this.logradouro = logradouro;
        this.numero = numero;
        this.bairro = bairro;
        this.cep = cep;
        this.municipio = municipio;
        this.estado = estado;
    }

    formatarEndereco() {
        return `${this.logradouro}, ${this.numero}, ${this.bairro}, ${this.cep}, ${this.municipio}, ${this.estado}`;
    }
}

let fornecedores = []; // Array para armazenar os fornecedores
let fornecedorId = 1; // ID inicial para fornecedores

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const maxFornecedores = document.getElementById('maxFornecedores').value;
    if (fornecedores.length >= maxFornecedores) {
        alert("Número máximo de fornecedores atingido.");
        return;
    }

    const empresaNome = document.getElementById('empresaNome').value;
    const cnpjEmpresa = document.getElementById('cnpjEmpresa').value;
    const fornecedorNome = document.getElementById('fornecedorNome').value;
    const telefone = document.getElementById('telefone').value;
    const sexoRepresentante = document.getElementById('sexoRepresentante').value;
    const dataNascimento = document.getElementById('data').value;

    const endereco = new Endereco(
        document.getElementById('logradouro').value,
        document.getElementById('numero').value,
        document.getElementById('bairro').value,
        document.getElementById('cep').value,
        document.getElementById('municipio').value,
        document.getElementById('estado').value
    );

    const fornecedor = new Fornecedor(
        fornecedorId++,
        empresaNome,
        cnpjEmpresa,
        fornecedorNome,
        telefone,
        sexoRepresentante,
        dataNascimento,
        endereco
    );

    fornecedores.push(fornecedor);
    adicionarFornecedorNaTabela(fornecedor);
    limparFormulario();
});

// Função para adicionar um fornecedor na tabela
function adicionarFornecedorNaTabela(fornecedor) {
    const tabelaFornecedores = document.getElementById('tabelaForne');
    const novaLinha = document.createElement('tr');

    novaLinha.innerHTML = `
        <td>${fornecedor.id}</td>
        <td>${fornecedor.empresaNome}</td>
        <td>${fornecedor.cnpjEmpresa}</td>
        <td>${fornecedor.fornecedorNome}</td>
        <td>${fornecedor.telefone}</td>
        <td>${fornecedor.sexoRepresentante}</td>
        <td>${fornecedor.dataNascimento}</td>
        <td>${fornecedor.endereco.formatarEndereco()}</td>
    `;

    tabelaFornecedores.appendChild(novaLinha);
}

// Função para limpar os campos do formulário após o envio
function limparFormulario() {
    document.querySelector('form').reset();
}

// Função para limpar os dados da tabela e o array de fornecedores
document.getElementById('LimparDados').addEventListener('click', function() {
    fornecedores = [];
    fornecedorId = 1;
    document.getElementById('tabelaForne').innerHTML = '';
});
