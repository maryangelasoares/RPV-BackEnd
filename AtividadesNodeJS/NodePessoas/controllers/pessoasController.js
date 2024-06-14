// Importa o modelo de Pessoas (cadastros) para acessar as operações CRUD relacionadas a cadastros;
const pessoaModel = require("../model/pessoaModel");

class pessoaController {

 /* => INTEGRAÇÃO API. */

 // Método para ler a lista de todas os cadastros;
 apireadlist(req, res) {
  // Chama a função apiReadList() do modelo pessoaModel para obter a lista de cadastros;
  const retorno = pessoaModel.apireadlist();
  return retorno
    .then((result) => result.length == 0
      ? res.status(404).send("Nenhum Cadastro Encontrado!")
      : res.status(200).json(result)
    )
    .catch((error) => res.status(400).json(error.message));
}

// Método para ler um cadastro de pessoa específica por ID;
apiread(req, res) {
  // Obtém o parâmetro ID da requisição;
  const { id } = req.params;
  // Chama a função apiRead() do modelo pessoaModel para obter um cadastro com o ID fornecido;
  const retorno = pessoaModel.apiread(id);
  return retorno
    .then((result) =>
      result.length == 0 
      ? res.status(404).send("Cadastro Não Encontrado!") 
      : res.status(200).json(result)
    )
    .catch((error) => res.status(400).json(error.message));
}

// Método para criar um novo cadastro;
apicreate(req, res) {
  // Obtém os dados do novo cadastro do corpo da requisição;
  const reqBody = req.body; 
  // Chama a função apiCreate() do modelo pessoaModel para criar um novo cadastro;
  const retorno = pessoaModel.apicreate(reqBody);
  return retorno
    .then((result) =>
      res.status(201).send("Cadastro Criado com Sucesso!")
    )
    .catch((error) => res.status(400).json(error.message));
}

// Método para atualizar um novo cadastro existente por ID;
apiupdate(req, res) {
  // Obtém o parâmetro ID da requisição;
  const { id } = req.params;
  // Obtém os dados atualizados do cadastro do corpo da requisição;
  const reqBody = req.body;
    
  // Chama a função apiUpdate() do modelo pessoaModel para atualizar a vaga de emprego com o ID fornecido;
  const retorno = pessoaModel.apiUpdate(reqBody, id);
  return retorno
    .then((result) =>
      res.status(200).send("Cadastro Atualizada Com Sucesso!")
    )
    .catch((error) => res.status(400).json(error.message));

}

// Método para excluir um cadastro existente por ID;
apidelete(req, res) {
  // Obtém o parâmetro ID da requisição;
  const { id } = req.params;
  // Chama a função apiDelete() do modelo pessoaModel para excluir um cadastro com o ID fornecido;
  const retorno = pessoaModel.apiDelete(id);
  return retorno
    .then((result) =>
      res.status(200).send("Cadastro Deletado Com Sucesso!")
    )
    .catch((error) => res.status(400).json(error.message));
}

   /* => INTEGRAÇÃO FrontEnd x BackEnd. */

    // Método para visualizar o formulário de criação de um novo cadastro;
  viewCreate(req, res) {
    return res.status(200).render("./pessoa/pessoa_create", { title: "Adicionar Um Cadastro" });
  }
  
  // Método para listar todos os cadastros;
  viewReadList(req, res) {
    // Chama a função readList() do modelo pessoaModel para obter a lista de cadastros;
    const pessoaList = pessoaModel.readList();
    return pessoaList
      .then((result) =>
        result.length == 0
          ? res.status(404).render("./pessoa/pessoa_read", { title: "Cadastros", pessoas: result })
          : res.status(200).render("./pessoa/pessoa_read", { title: "Cadastros", pessoas: result })
      )
      .catch((error) => res.status(400).send(error.message));  
  }

  // Método para visualizar o formulário de atualização de um cadastro existente;
  viewUpdate(req, res) {
    // Obtém o parâmetro ID da requisição;
    const { id } = req.params;
    // Chama a função read() do modelo pessoaModel para obter um cadastro com o ID fornecido;
    const pessoa = pessoaModel.read(id);
    return pessoa
      .then((result) =>
        result.length == 0
          ? res.status(404).redirect("/")
          : res.status(200).render("./pessoa/pessoa_update", { title: "Atualizar Cadastro", pessoas: result })
      )
      .catch((error) => res.status(400).send(error.message));  
  }

  // Método para visualizar a página inicial;
  viewHomePage(req, res) {
    return res.status(200).render("./index", { title: "Página Inicial"});
  }

  // Método para criar um novo cadastro;
  create(req, res) {
    // Obtém os dados do novo cadastro do corpo da requisição;
    const newPessoa = req.body;
    // Chama a função create() do modelo pessoaModel para criar um novo cadastro;
    const pessoas = pessoaModel.create(newPessoa);
    return pessoas
      .then((result) => res.status(201).send("<script> alert('Cadastro Criado Com Sucesso!'); window.location='/pessoas' </script>"))
      .catch((error) => res.status(400).send(error.message));    
  }

  // Método para atualizar um cadastro existente por ID;
  update(req, res) {
    // Obtém o parâmetro ID da requisição;
    const { id } = req.params;
    // Obtém os dados atualizados do cadastro do corpo da requisição;
    const updatedPessoa = req.body;
    // Chama a função update() do modelo pessoaModel para atualizar o cadastro com o ID fornecido;
    const pessoas = pessoaModel.update(updatedPessoa, id);
    return pessoas
      .then((result) => res.status(200).send("<script> alert('Cadastro Atualizado Com Sucesso!'); window.location='../../pessoas' </script>"))
      .catch((error) => res.status(400).send(error.message));   
  }

  // Método para excluir uma vaga de emprego existente por ID
  delete(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Chama a função delete() do modelo jobModel para excluir a vaga de emprego com o ID fornecido
    const pessoas = pessoaModel.delete(id);
    return pessoas
      .then((result) => res.status(200).send("<script> alert('Cadastro Excluído Com Sucesso!'); window.location='../../pessoas' </script>"))
      .catch((error) => res.status(400).send(error.message));  
  }
}
// Exporta uma instância da classe pessoaController
module.exports = new pessoaController();
