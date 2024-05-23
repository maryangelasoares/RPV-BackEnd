class Pets {
    constructor(nome, sexo, dono, telefoneDono, raca, cor, idade, peso, altura) {
        this._nome = nome;
        this._sexo = sexo;
        this._dono = dono;
        this._telefone = telefoneDono;
        this._raca = raca;
        this._cor = cor;
        this._idade = idade;
        this._peso = peso;
        this._altura = altura;
        this._infoElementId = null; // Guarda o ID do elemento onde as informações são exibidas
    }

    // Getters
    get nome() {
        return this._nome;
    }

    get sexo() {
        return this._sexo;
    }

    get dono() {
        return this._dono;
    }

    get telefone() {
        return this._telefone;
    }

    get raca() {
        return this._raca;
    }

    get cor() {
        return this._cor;
    }

    get idade() {
        return this._idade;
    }

    get peso() {
        return this._peso;
    }

    get altura() {
        return this._altura;
    }

    // Setters
    set nome(novoNome) {
        this._nome = novoNome;
    }

    set sexo(novoSexo) {
        this._sexo = novoSexo;
    }

    set dono(novoDono) {
        this._dono = novoDono;
    }

    set telefone(novoTelefone) {
        this._telefone = novoTelefone;
    }

    set raca(novaRaca) {
        this._raca = novaRaca;
    }

    set cor(novaCor) {
        this._cor = novaCor;
    }

    set idade(novaIdade) {
        this._idade = novaIdade;
    }

    set peso(novoPeso) {
        this._peso = novoPeso;
    }

    set altura(novaAltura) {
        this._altura = novaAltura;
    }

    // Método para exibir detalhes
    infoDetalhado(elementId) {
        this._infoElementId = elementId;
        this.updateInfo();
    }

    // Método para atualizar as informações exibidas
    updateInfo() {
        if (this._infoElementId) {
            const infoElement = document.getElementById(this._infoElementId);
            if (infoElement) {
                infoElement.innerHTML = `
                    <h3>Informações do Pet</h3>
                    <p>Nome: ${this.nome}</p>
                    <p>Sexo: ${this.sexo}</p>
                    <p>Nome do Dono: ${this.dono}</p>
                    <p>Telefone do Dono: ${this.telefone}</p>
                    <p>Raça: ${this.raca}</p>
                    <p>Cor: ${this.cor}</p>
                    <p>Idade: ${this.idade} anos</p>
                    <p>Peso: ${this.peso} kg</p>
                    <p>Altura: ${this.altura} cm</p>
                `;
            }
        }
    }

    // Método para limpar os detalhes do pet
    limparDados() {
        if (this._infoElementId) {
            const infoElement = document.getElementById(this._infoElementId);
            if (infoElement) {
                infoElement.innerHTML = ''; // Limpa o conteúdo do elemento
            }
        }
    }
}

// Classe Dog que herda de Pet
class Cachorro extends Pets {
    constructor(nome, sexo, dono, telefoneDono, raca, cor, idade, peso, altura) {
        super(nome, sexo, dono, telefoneDono, raca, cor, idade, peso, altura);
    }
}

// Classe Cat que herda de Pet
class Gato extends Pets {
    constructor(nome, sexo, dono, telefoneDono, raca, cor, idade, peso, altura) {
        super(nome, sexo, dono, telefoneDono, raca, cor, idade, peso, altura);
    }
}

// Arrays para armazenar os pets
const cachorros = [];
const gatos = [];

function registroCachorro() {
    const nome = document.getElementById('nomeCachorro').value;
    const sexo = document.getElementById('sexoCachorro').value;
    const dono = document.getElementById('donoCachorro').value;
    const telefoneDono = document.getElementById('telefoneCachorro').value;
    const raca = document.getElementById('racaCachorro').value;
    const cor = document.getElementById('corCachorro').value;
    const idade = parseFloat(document.getElementById('idadeCachorro').value);
    const peso = parseFloat(document.getElementById('pesoCachorro').value);
    const altura = parseFloat(document.getElementById('alturaCachorro').value);

    const cachorro = new Cachorro(nome, sexo, dono, telefoneDono, raca, cor, idade, peso, altura);
    cachorros.push(cachorro);

    cachorro.infoDetalhado('cachorro-Info'); 
}

function registroGato() {
    const nome = document.getElementById('nomeGato').value;
    const sexo = document.getElementById('sexoGato').value;
    const dono = document.getElementById('donoGato').value;
    const telefoneDono = document.getElementById('telefoneGato').value;
    const raca = document.getElementById('racaGato').value;
    const cor = document.getElementById('corGato').value;
    const idade = parseFloat(document.getElementById('idadeGato').value);
    const peso = parseFloat(document.getElementById('pesoGato').value);
    const altura = parseFloat(document.getElementById('alturaGato').value);

    const gato = new Gato(nome, sexo, dono, telefoneDono, raca, cor, idade, peso, altura);
    gatos.push(gato);

    gato.infoDetalhado('gato-Info'); 
}

function limparFormulario(formId) {
    document.getElementById(formId).reset(); // Limpa os campos do formulário

    if (formId === 'form-cachorro') {
        const infoElement = document.getElementById('cachorro-Info');
        if (infoElement) {
            infoElement.innerHTML = '';
        }
    } else if (formId === 'form-gato') {
        const infoElement = document.getElementById('gato-Info');
        if (infoElement) {
            infoElement.innerHTML = '';
        }
    }
}
