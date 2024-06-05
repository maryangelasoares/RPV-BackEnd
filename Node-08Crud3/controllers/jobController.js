// Importa o modelo de Job (vaga de emprego) para acessar as operações CRUD relacionadas a empregos
const jobModel = require("../models/jobModel");

// Define a classe JobController, responsável por controlar as operações relacionadas a empregos
class JobController {
  // Método para ler a lista de todas as vagas de emprego
  readList(req /* requisicao */, res /* resposta */) {
    try {
      // Chama a função readList() do modelo jobModel para obter a lista de vagas de emprego
      let result = jobModel.readList();
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).send("Nenhuma vaga de emprego foi encontrada!");
      }
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  // Método para ler uma vaga de emprego específica por ID
  read(req /* requisicao */, res /* resposta */) {
    try {
      // Obtém o parâmetro ID da requisição
      const { id } = req.params;
      // Chama a função read() do modelo jobModel para obter a vaga de emprego com o ID fornecido
      let result = jobModel.read(id);
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).send("Vaga de emprego não encontrada!");
      }
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  // Método para criar uma nova vaga de emprego
  create(req /* requisicao */, res /* resposta */) {
    try {
      // Obtém os dados da nova vaga de emprego do corpo da requisição
      const newJob = req.body;
      // Chama a função create() do modelo jobModel para criar uma nova vaga de emprego
      jobModel.create(newJob);
      //res.status(201).json(result);
      res.send("Vaga de emprego criada com sucesso!");
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  // Método para atualizar uma vaga de emprego existente por ID
  update(req /* requisicao */, res /* resposta */) {
    try {
      // Obtém o parâmetro ID da requisição
      const { id } = req.params;
      // Obtém os dados atualizados da vaga de emprego do corpo da requisição
      const updatedJob = req.body;
      // Chama a função update() do modelo jobModel para atualizar a vaga de emprego com o ID fornecido
      let result = jobModel.update(updatedJob, id);
      if (result) {
        //res.status(200).json(result);
        res.send("Vaga de emprego atualizada com sucesso!");
      } else {
        res.status(404).send("Vaga de emprego não encontrada!");
      }
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  // Método para excluir uma vaga de emprego existente por ID
  delete(req /* requisicao */, res /* resposta */) {
    try {
      // Obtém o parâmetro ID da requisição
      const { id } = req.params;
      // Chama a função delete() do modelo jobModel para excluir a vaga de emprego com o ID fornecido
      let result = jobModel.delete(id);
      if (result) {
        //res.status(200).json(result);
        res.send("Vaga de emprego deletada com sucesso!");
      } else {
        res.status(404).send("Vaga de emprego não encontrada!");
      }
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
}

// Exporta uma instância da classe JobController
module.exports = new JobController();
