class Pets {
    constructor(nome, sexo, dono, telefoneDono, raca, cor, idade, peso, altura) {
        this.nome = nome;
        this.sexo = sexo;
        this.dono = dono;
        this.telefone = telefoneDono;
        this.raca = raca;
        this.cor = cor;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }

    getDetails() {
        return `
        Nome: ${this.nome} |
        Sexo: ${this.sexo} |
        Nome do Dono: ${this.dono} |
        Telefone do Dono: ${this.telefone} |
        Raça: ${this.raca} |
        Cor: ${this.cor} |
        Idade: ${this.idade} anos |
        Peso: ${this.peso} kg |
        Altura: ${this.altura} cm.
        `;
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

    document.getElementById('cachorro-Info').innerHTML = "<h3>Informações do Cachorro:</h3>" + cachorro.getDetails();
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

    document.getElementById('gato-Info').innerHTML = "<h3>Informações do Gato:</h3>" + gato.getDetails();
}