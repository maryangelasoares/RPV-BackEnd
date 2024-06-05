//  Importa o módulo fs (File System) em Node.js.
//  O módulo fs fornece métodos para interagir com o sistema de arquivos, como ler e escrever arquivos.
const fs = require("fs");

// Definição da Classe 'JobModel'
class JobModel {
   // Método Construtor da classe
  // Chamado automaticamente ao se criar uma nova instância da classe,
  // é usado para inicializar as propriedades do objeto.
  constructor() {
    // Inicializa a propriedade 'jobs'
    this.type = 0;
    this.dir = "database/jobDatabase.json";
    // Inicializa os jobs a partir do arquivo JSON
    this.init();
  }

  // Método para inicializar os jobs a partir do arquivo JSON
  init() {
    // Verifica o valor da propriedade 'type'
    switch (this.type) {
      case 0:
        // Leitura síncrona do arquivo JSON e parse para objeto JavaScript
        this.jobs = JSON.parse(fs.readFileSync(this.dir, "utf-8"));
        break;
      case 1:
        // Leitura assíncrona do arquivo JSON e parse para objeto JavaScript
        fs.readFile(this.dir, "utf-8", (error, file) => {
          if (error) throw error;
          this.jobs = JSON.parse(file);
        });
        break;
    }
  }

  // Método para ler todas as vagas de emprego
  readList() {
    // Retorna uma cópia do array de vagas de emprego
    return [this.jobs];
  }

  // Método para ler uma vaga de emprego específica por ID
  read(id) {
    // Procura uma vaga de emprego com o ID fornecido no array de vagas de emprego
    const job = this.jobs.find((job) => job.id === parseInt(id));
    return job;
  }

  // Método para criar uma nova vaga de emprego
  create(newJob) {
    // Altera o valor do ID da nova vaga de emprego
    newJob.id = this.jobs.length + 1;
    // Adiciona uma nova vaga de emprego ao array de vagas de emprego
    this.jobs.push(newJob);
    // Efetua a escrita atualizada do array de jobs dentro do jobDatabase.json
    this.commit();
    // Retorna a nova vaga de emprego criada
    return newJob;
  }

  // Método para atualizar uma vaga de emprego existente pelo ID
  update(updatedJob, id) {
    // Procura o índice da vaga de emprego com o ID fornecido no array de vagas de emprego
    const index = this.jobs.findIndex((job) => job.id === parseInt(id));
    // Se o trabalho com o ID fornecido existir no array
    if (index !== -1) {
      // Substitui a vaga de emprego existente pela vaga de emprego atualizada
      this.jobs[index] = updatedJob;
      // Efetua a escrita atualizada do array de jobs dentro do jobDatabase.json
      this.commit();
      // Retorna a vaga de emprego atualizada
      return this.jobs[index];
    }
    // Caso contrário, retorna false indicando que a vaga de emprego não foi encontrada
    return false;
  }

  // Método para excluir uma vaga de emprego existente pelo ID
  delete(id) {
    // Procura o índice da vaga de emprego com o ID fornecido no array de vagas de emprego
    const index = this.jobs.findIndex((job) => job.id === parseInt(id));
    // Se o trabalho com o ID fornecido existir no array
    if (index !== -1) {
      // Se encontrou o index (indice), remove o objeto job do id fornecido
      // Utiliza o método splice passando como parametro:
      // index: Indica o índice onde eu inicio a minha alteração do array do objeto      
      // 1: Indica o número de elementos (qtd jobs) que eu desejo remover, nesse caso quero remover o job do id fornecido 
      this.jobs.splice(index, 1);
      // Efetua a escrita atualizada do array de jobs dentro do jobDatabase.json
      this.commit();
      // Retorna true para indicar que a vaga de emprego foi excluída com sucesso
      return true;
    }
    // Caso contrário, retorna false indicando que a vaga de emprego não foi encontrada
    return false;
  }

  // Método para salvar as alterações no arquivo JSON
  commit() {
    // Verifica o valor da propriedade 'type'
    switch (this.type) {
      case 0:
        // Escrita síncrona das alterações no arquivo JSON
        fs.writeFileSync(this.dir, JSON.stringify(this.jobs));
        break;
      case 1:
        // Escrita assíncrona das alterações no arquivo JSON
        fs.writeFile(this.dir, JSON.stringify(this.jobs), (error) => {
          if (error) throw error;
        });
        break;
    }
  }

}

// Exporta uma instância da classe JobModel já inicializada com algumas vagas de emprego
module.exports = new JobModel();
