const dbConnection = require("../database/dbConnection");

class pessoaModel {

    // Método para executar consultas SQL no banco de dados
    executeSQL(sql, parameters = "") {
        // Retorna uma Promise que representa a execução da consulta SQL
        return new Promise(function (resolve, reject) {

            // Executa a consulta SQL utilizando a conexão com o banco de dados e os parâmetros fornecidos
            dbConnection.query(sql, parameters, function (error, resposta) {
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

    /* => INTEGRAÇÃO API. */

    // Método para obter a lista de todas as vagas de emprego no banco de dados
    apireadlist() {
        const sql = "SELECT id, nome, idade, cidade FROM pessoas"; // Consulta SQL para selecionar todas as vagas de emprego
        return this.executeSQL(sql); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
    }

    // Método para obter uma vaga de emprego específica por ID no banco de dados
    apiread(id) {
        const sql = "SELECT id, nome, idade, cidade FROM pessoas WHERE id = ?"; // Consulta SQL para selecionar uma vaga de emprego por ID
        return this.executeSQL(sql, id); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
    }

    // Método para criar uma nova vaga de emprego no banco de dados
    apicreate(newPessoa) {
        const sql = "INSERT INTO pessoas SET ?"; // Consulta SQL para inserir uma nova vaga de emprego
        return this.executeSQL(sql, newPessoa); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
    }

    // Método para atualizar uma vaga de emprego existente por ID no banco de dados
    apiupdate(updatedPessoa, id) {
        const sql = "UPDATE pessoas SET ? WHERE id = ?"; // Consulta SQL para atualizar uma vaga de emprego por ID
        return this.executeSQL(sql, [updatedPessoa, id]); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
    }

    // Método para excluir uma vaga de emprego existente por ID no banco de dados
    apidelete(id) {
        const sql = "DELETE FROM pessoas WHERE id = ?"; // Consulta SQL para excluir uma vaga de emprego por ID
        return this.executeSQL(sql, id); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
    }


    /* => INTEGRAÇÃO FrontEnd x BackEnd. */
    

    // Método para obter a lista de todas as vagas de emprego no banco de dados
    readList() {
        const sql = "SELECT id, nome, idade, cidade FROM pessoas"; // Consulta SQL para selecionar todas as vagas de emprego
        return this.executeSQL(sql); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
    }

    // Método para obter uma vaga de emprego específica por ID no banco de dados
    read(id) {
        const sql = "SELECT id, nome, idade, cidade FROM pessoas WHERE id = ?"; // Consulta SQL para selecionar uma vaga de emprego por ID
        return this.executeSQL(sql, id); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
    }

    // Método para criar uma nova vaga de emprego no banco de dados
    create(newPessoa) {
        const sql = "INSERT INTO pessoas (nome, idade, cidade) VALUES (?, ?, ?)"; // Consulta SQL corrigida para inserir uma nova vaga de emprego
        const values = [newPessoa.name, newPessoa.idade, newPessoa.city]; // Valores a serem inseridos na consulta SQL
        return this.executeSQL(sql, values); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
    }

    // Método para atualizar uma vaga de emprego existente por ID no banco de dados
    update(updatedPessoa, id) {
        const sql = "UPDATE pessoas SET nome = ?, cidade = ? WHERE id = ?"; // Consulta SQL para atualizar uma vaga de emprego por ID
        const values = [updatedPessoa.name, updatedPessoa.city, id]; // Valores a serem inseridos na consulta SQL
        return this.executeSQL(sql, values); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
    }

    // Método para excluir uma vaga de emprego existente por ID no banco de dados
    delete(id) {
        const sql = "DELETE FROM pessoas WHERE id = ?"; // Consulta SQL para excluir uma vaga de emprego por ID
        return this.executeSQL(sql, id); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
    }

}

module.exports = new pessoaModel();