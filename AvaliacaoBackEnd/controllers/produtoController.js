const produtoModel = require("../models/produtoModel");

class produtoController {
  // Método para ler a lista de todos os produtos
  readList(req, res) {
    // Chama a função readList() do modelo produtoModel para obter a lista de produtos
    const retorno = produtoModel.readList();
    return retorno
      .then((result) => result.length == 0
        ? res.status(404).send("Nenhum Produto Foi Encontrado!")
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para ler um produto específico por ID
  read(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Chama a função read() do modelo produtoModel para obter o produto com o ID fornecido
    const retorno = produtoModel.read(id);
    return retorno
      .then((result) =>
        result.length == 0 
        ? res.status(404).send("Produto Não Encontrado!") 
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para criar um novo produto
  create(req, res) {
    // Obtém os dados do novo produto do corpo da requisição
    const reqBody = req.body; 
    // Chama a função create() do modelo produtoModel para criar um novo produto
    const retorno = produtoModel.create(reqBody);
    return retorno
      .then((result) =>
        res.status(201).send("Produto Criado Com Sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para atualizar um produto existente por ID
  update(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Obtém os dados atualizados do produto do corpo da requisição
    const reqBody = req.body;
      
    // Chama a função update() do modelo produtoModel para atualizar o produto com o ID fornecido
    const retorno = produtoModel.update(reqBody, id);
    return retorno
      .then((result) =>
        res.status(200).send("Produto Atualizado Com Sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));

  }

  // Método para excluir um produto existente por ID
  delete(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Chama a função delete() do modelo produtoModel para excluir o produto com o ID fornecido
    const retorno = produtoModel.delete(id);
    return retorno
      .then((result) =>
        res.status(200).send("Produto Excluído Com Sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }
  
}

// Exporta uma instância da classe produtoController para ser utilizada em outros arquivos do projeto
module.exports = new produtoController();
