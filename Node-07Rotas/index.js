//Importando o módulo express para criação de aplicação web;
const express = require("express");

//Criando uma instância do meu aplicativo Web;
const app = express();

//Definindo a porta onde o aplicativo pega as requisiçoes;
const port = 3000;

//Importando o módulo Router do Framework express;
const Router = require("express").Router;

//Criando uma instância do roteador;
const router = Router();

//Criação das Rotas
//Para definit a rota, primeiramente eu identifico o método HTTP

//Rota GET para exibir uma lista com todas as vagas de emprego;
router.get(
    "/job" /* caminho */,
    function (req /*requisição*/, res /*resposta*/) /*função callnack*/ {
        res.send("Exibindo uma lista com vagas de emprego...");
    }
);

//"/job/:id" é a requisição;
//req.params.id eu pego o id;
// "/job/10" id é 10.

//Rota para exibir uma vaga de emprego específica por ID;
router.get(
    "/job/:id" /* caminho */,
    function (req /*requisição*/, res /*resposta*/) /*função callnack*/ {
        const id = req.params.id;
        res.send("Exibindo uma vaga de emprego específica por ID.ID = " + id + "...");
    }
);

//ROTA POST para criar uma nova vaga de emprego;
router.post(
    "/job" /* caminho */,
    function ( req /*requisição*/, res /*resposta*/) /*função callnack*/ {
        res.send("Criando uma nova vaga de emprego!");
    }
);

//ROTA PUT para atualizar uma nova vaga de emprego;
router.put(
    "/job/:id" /* caminho */,
    function(req /*requisição*/, res /*resposta*/) /*função callnack*/ {
        res.send("Atualizando uma vaga de emprego específica por ID. ID - " + id + "...");
    }
)

router.delete(
    "/job/:id" /* caminho */,
    function(req /*requisição*/, res /*resposta*/) /*função callnack*/{
        const { id } = req.params;
        res.send ("Excluindo uma vaga de emprego por ID. ID -" + id + "...");
    }
)

//Adicionando 
app.use(
    router
);

app.listen(
    port,
    function(erro){
        if (erro){
            console.log ("Ocorreu um erro ao rodar o servidor!");
            return;
      } else {
        console.log("Servidor rodando com sucesso!");
      }
    }
);