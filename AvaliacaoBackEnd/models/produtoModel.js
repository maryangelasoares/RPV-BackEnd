// Importa o módulo que contém a conexão com o banco de dados
const dbConnection = require("../db/dbConnection");

// Define a classe produtoModel para manipular operações relacionadas a produtos no banco de dados
class produtoModel {

  // Método para executar consultas SQL no banco de dados
  executeSQL(sql, parametros = "") {
    // Retorna uma Promise que representa a execução da consulta SQL
    return new Promise( function (resolve, reject) {
        
        // Executa a consulta SQL utilizando a conexão com o banco de dados e os parâmetros fornecidos
        dbConnection.query(sql, parametros, function (error, resposta) {
          // Se ocorrer um erro durante a execução da consulta, rejeita a Promise com o erro
          if (error) {
            return reject(error);
          }
          // Se a consulta for bem-sucedida, resolve a Promise com a resposta do banco de dados
          return resolve(resposta);
        });

      }
    );
  }

  readList() {
    const sql = "SELECT id, nome, quantidade, unidade_medida, preco, data_cadastro  FROM produtos"; 
    return this.executeSQL(sql); 
  }

  
  read(id) {
    const sql = "SELECT id, nome, quantidade, unidade_medida, preco, data_cadastro  FROM produtos WHERE id = ?"; // Consulta SQL para selecionar um produto por ID
    return this.executeSQL(sql, id); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para criar um novo produto no banco de dados
  create(newProduto) {
    const sql = "INSERT INTO produtos SET ?"; // Consulta SQL para inserir um produto na tabela de produtos
    return this.executeSQL(sql, newProduto); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para atualizar um produto existente por ID no banco de dados
  update(updatedProduto, id) {
    const sql = "UPDATE produtos SET ? WHERE id = ?"; // Consulta SQL para atualizar um produto  por ID
    return this.executeSQL(sql, [updatedProduto, id]); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para excluir uma vaga de emprego existente por ID no banco de dados
  delete(id) {
    const sql = "DELETE FROM produtos WHERE id = ?"; // Consulta SQL para excluir um produto por ID
    return this.executeSQL(sql, id); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

}

// Exporta uma instância da classe produtoModel para ser utilizada em outros arquivos do projeto
module.exports = new produtoModel();
