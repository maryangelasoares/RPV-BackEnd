// Importa o modelo de Pessoas (cadastros) para acessar as operações CRUD relacionadas a cadastros;
const pessoaModel = require("../model/pessoaModel");

class pessoaController {
    // Método para ler a lista de todos os cadastros;
    readList(req /* requisicao */, res /* resposta */) {
        try {
            // Chama a função readList() do modelo pessoaModel para obter a lista de cadastros;
            let result = pessoaModel.readList();
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).send("Nenhum Cadastro Encontrado!");
            }
        } catch (error) {
            res.status(400).json(error.message);
        }
    }

    // Método para ler um cadastro específico por ID;
    read(req /* requisicao */, res /* resposta */) {
        try {

            //Obtém o parâmetro ID de requisição;
            const { id } = req.params;
            //Chama a função read() do modelo pessoaModel para obter o cadastro com o ID fornecido;

            let result = pessoaModel.read(id);
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).send("Cadastro Não Encontrado!");
            }
        } catch (error) {
            res.status(400).json(error.message);
        }
    }

    // Método para criar um novo cadastro;
    create(req /* requisicao */, res /* resposta */) {
        try {
            // Obtém os dados do novo cadastro do corpo da requisição;
            const newPessoa = req.body;
            // Chama a função create() do modelo pessoaModel para criar um novo cadastro;
            pessoaModel.create(newPessoa);
            //res.status(201).json(result);
            res.send("Cadastro Criado com Sucesso!");
        } catch (error) {
            res.status(400).json(error.message);
        }
    }

      // Método para atualizar um cadastro existente por ID;
  update(req /* requisicao */, res /* resposta */) {
    try {
      // Obtém o parâmetro ID da requisição;
      const { id } = req.params;
      // Obtém os dados atualizados do cadastro do corpo da requisição;
      const updatedPessoa = req.body;
      // Chama a função update() do modelo pessoaModel para atualizar um cadastro com o ID fornecido;
      let result = pessoaModel.update(updatedPessoa, id);
      if (result) {
        //res.status(200).json(result);
        res.send("Cadastro Atualizado com Sucesso!");
      } else {
        res.status(404).send("Cadastro Não Encontrado!");
      }
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

    // Método para excluir um cadastro existente por ID;
    delete(req /* requisicao */, res /* resposta */) {
        try {
          // Obtém o parâmetro ID da requisição;
          const { id } = req.params;
          // Chama a função delete() do modelo pessoaModel para excluir um cadastro com o ID fornecido;
          let result = pessoaModel.delete(id);
          if (result) {
            //res.status(200).json(result);
            res.send("Cadastro Deletado com Sucesso!");
          } else {
            res.status(404).send("Cadastro Não Encontrado!");
          }
        } catch (error) {
          res.status(400).json(error.message);
        }
      }
}

// Exporta uma instância da classe pessoaController
module.exports = new pessoaController();
