//  Importa o módulo fs (File System) em Node.js.
const fs = require("fs");

// Definição da Classe 'pessoaModel'
class pessoaModel {
    // Método Construtor da classe;
    // Chamado automaticamente ao se criar uma nova instância da classe, é usado para inicializar as propriedades do objeto.
    constructor() {
        // Inicializa a propriedade 'pessoa';
        this.type = 0;
        this.dir = "database/pessoasDataBase.json";
        // Inicializa os pessoa a partir do arquivo JSON;
        this.init();
    }

    // Método para inicializar os cadastros a partir do arquivo JSON
    init() {
        // Verifica o valor da propriedade 'type'
        switch (this.type) {
            case 0:
                // Leitura síncrona do arquivo JSON e parse para objeto JavaScript
                this.pessoa = JSON.parse(fs.readFileSync(this.dir, "utf-8"));
                break;
            case 1:
                // Leitura assíncrona do arquivo JSON e parse para objeto JavaScript
                fs.readFile(this.dir, "utf-8", (error, file) => {
                    if (error) throw error;
                    this.pessoa = JSON.parse(file);
                });
                break;
        }
    }

    // Método para ler todos os cadastros;
    readList() {
        // Retorna uma cópia do array de cadastrp;
        return [this.pessoa];
    }

    // Método para ler um cadastro específica por ID
    read(id) {
        // Procura uma vaga de emprego com o ID fornecido no array de vagas de emprego
        const pessoas = this.pessoa.find((pessoas) => pessoas.id === parseInt(id));
        return pessoas;
    }

    // Método para criar um novo cadastro;
    create(newPessoas) {
        // Altera o valor do ID do novo cadastro;
        newPessoas.id = this.pessoa.length + 1;
        // Adiciona um novo cadastro ao array de cadastro de pessoas;
        this.pessoa.push(newPessoas);
        // Efetua a escrita atualizada do array de pessoa dentro do pessoasDatabase.json;
        this.commit();
        // Retorna o novo cadastro criado;
        return newPessoas;
    }

    // Método para atualizar um cadastro existente pelo ID;
    update(updatedPessoas, id) {
        // Procura o índice do cadastro com o ID fornecido no array de cadastros;
        const index = this.pessoa.findIndex((Pessoas) => Pessoas.id === parseInt(id));
        // Se a pessoa com o ID fornecido existir no array;
        if (index !== -1) {
            // Substitui o cadastro existente pelo cadastro atualizado;
            this.pessoa[index] = updatedPessoas;
            // Efetua a escrita atualizada do array de pessoas dentro de pessoaDatabase.json;
            this.commit();
            // Retorna o cadastro atualizado;
            return this.pessoa[index];
        }
        // Caso contrário, retorna false indicando que o cadastro não foi encontrado;
        return false;
    }

    // Método para excluir um cadastro existente pelo ID;;
    delete(id) {
        // Procura o índice do cadastro com o ID fornecido no array de cadastro;
        const index = this.pessoa.findIndex((pessoas) => pessoas.id === parseInt(id));
        // Se a pessoa com o ID fornecido existir no array;
        if (index !== -1) {
            // Se encontrou o index (indice), remove o objeto 'pessoas' do id fornecido;
            // Utiliza o método splice passando como parametro:
            // index: Indica o índice onde eu inicio a minha alteração do array do objeto      
            // 1: Indica o número de elementos (qtd pessoas) que eu desejo remover, nesse caso quero remover o cadastro do id fornecido 
            this.pessoa.splice(index, 1);
            // Efetua a escrita atualizada do array de pessoas dentro do pessoaDatabase.json;
            this.commit();
            // Retorna true para indicar que o cadastro foi excluído com sucesso;
            return true;
        }
        // Caso contrário, retorna false indicando que o cadastro não foi encontrado;
        return false;
    }

    // Método para salvar as alterações no arquivo JSON
    commit() {
        // Verifica o valor da propriedade 'type'
        switch (this.type) {
            case 0:
                // Escrita síncrona das alterações no arquivo JSON
                fs.writeFileSync(this.dir, JSON.stringify(this.pessoa));
                break;
            case 1:
                // Escrita assíncrona das alterações no arquivo JSON
                fs.writeFile(this.dir, JSON.stringify(this.pessoa), (error) => {
                    if (error) throw error;
                });
                break;
        }
    }
}

// Exporta uma instância da classe pessoaModel já inicializada com alguns cadastros;
module.exports = new pessoaModel();