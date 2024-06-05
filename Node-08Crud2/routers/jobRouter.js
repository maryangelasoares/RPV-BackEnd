// Importa o módulo Router do framework Express
const Router = require("express").Router;

// Cria uma instância de um roteador do Express
// O roteador é usado para definir rotas e manipular requisições HTTP em uma aplicação Express
const router = Router();


// ----------------------------------------------------------------------------------------------
// Início da criação e inicialização da classe Job
// Utilizada para executar as funcionalidades referentes as requisições HTTP oriundas das rotas
// ----------------------------------------------------------------------------------------------

//  Importa o módulo fs (File System) em Node.js.
//  O módulo fs fornece métodos para interagir com o sistema de arquivos, como ler e escrever arquivos.
const fs = require("fs");

// Definição da Classe
class Job {
  // Método Construtor da classe
  // Chamado automaticamente ao se criar uma nova instância da classe,
  // é usado para inicializar as propriedades do objeto.
  constructor() {
    // Inicializa a propriedade 'jobs'
    this.type = 0;  // 0 - Programação Síncrona | 1 - Programação Assíncrona
    this.dir = "database/jobDatabase.json";  // Diretório onde está o arquivo json
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

// Cria uma instância da classe Job
const jobs = new Job();


// ----------------------------------------------------------------------------------------------
// Fim da criação e inicialização da classe Job
// Utilizada para executar as funcionalidades referentes as requisições HTTP oriundas das rotas
// ----------------------------------------------------------------------------------------------



// ----------------------------------------------------------------------------------------------
// Início da definição de rotas 
// Utiliza os métodos HTTP para fazer as requisições
// ----------------------------------------------------------------------------------------------

// Sintaxe: 
// Instância acessa um método HTTP
// param1 é a definição da rota (caminho)
// param2 é a função callback que comunica o cliente-servidor (envio da requisição e obtenção da resposta)
// router.get(param1, param2), ou router.post(param1, param2), ou router.put(param1, param2), ou router.delete(param1, param2)


// Rota GET para obter todas as vagas de emprego
router.get("/job" /* caminho */, function (req /* requisicao */, res /* resposta */) {
    try {
      // Chama o método readList() da classe Job para obter a lista de vagas de emprego
      let result = jobs.readList();
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).send("Nenhuma vaga de emprego foi encontrada!");
      }
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
);

// Rota GET para obter uma vaga de emprego específica por ID
router.get("/job/:id" /* caminho */, function (req /* requisicao */, res /* resposta */) {
    try {
      // Obtém o parâmetro ID da requisição
      const { id } = req.params;
      // Chama o método read() da classe Job para obter a vaga de emprego com o ID fornecido
      let result = jobs.read(id);
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).send("Vaga de emprego não encontrada!");
      }
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
);

// Rota POST para criar uma nova vaga de emprego
router.post("/job" /* caminho */, function (req /* requisicao */, res /* resposta */) {
    try {
      // Obtém os dados da nova vaga de emprego do corpo da requisição
      const newJob = req.body;
      // Chama o método create() da classe Job para criar uma nova vaga de emprego
      jobs.create(newJob);
      //res.status(201).json(result);
      res.status(201).send("Vaga de emprego criada com sucesso!");
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
);

// Rota PUT para atualizar uma vaga de emprego existente por ID
router.put("/job/:id" /* caminho */, function (req /* requisicao */, res /* resposta */) {
    try {
      // Obtém o parâmetro ID da requisição
      const { id } = req.params;
      // Obtém os dados atualizados da vaga de emprego do corpo da requisição
      const updatedJob = req.body;
      // Chama o método update() da classe Job para atualizar a vaga de emprego com o ID fornecido
      let result = jobs.update(updatedJob, id);
      if (result) {
        //res.status(200).json(result);
        res.status(200).send("Vaga de emprego atualizada com sucesso!");
      } else {
        res.status(404).send("Vaga de emprego não encontrada!");
      }
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
);

// Rota DELETE para deletar uma vaga de emprego existente por ID
router.delete("/job/:id" /* caminho */, function (req /* requisicao */, res /* resposta */) {
    try {
      // Obtém o parâmetro ID da requisição
      const { id } = req.params;
      // Chama o método delete() da classe Job para excluir a vaga de emprego com o ID fornecido
      let result = jobs.delete(id);
      if (result) {
        //res.status(200).json(result);
        res.status(200).send("Vaga de emprego deletada com sucesso!");
      } else {
        res.status(404).send("Vaga de emprego não encontrada!");
      }
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
);


// ----------------------------------------------------------------------------------------------
// Fim da definição de rotas 
// Utiliza os métodos HTTP para fazer as requisições
// ----------------------------------------------------------------------------------------------


// Exporta o objeto router (roteador)
// O roteador contém definições de rotas e controles para as diferentes solicitações HTTP.
module.exports = router;
