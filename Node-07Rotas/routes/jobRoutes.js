// importando o módulo Router do framework express
const express = require("express");
const router = express.Router();

// Criação das Rotas
// Para definir a rota, primeiramente eu identifico o método HTTP

// Rota GET para exibir uma lista com todas as vagas de emprego
router.get("/job" /* caminho */, 
           function(req /* requisicao */, res /* resposta */){
            res.send("Exibindo uma lista com vagas de emprego...")
           }
);

// Rota GET para exibir uma vaga específica de emprego por ID
router.get("/job/:id" /* caminho */, 
           function(req /* requisicao */, res /* resposta */){
            const { id } = req.params;
            res.send("Exibindo uma vaga de emprego específica por ID. ID = " + id + "...")
           }
);

// Rota POST  para criar uma nova vaga de emprego
router.post("/job" /* caminho */, 
           function(req /* requisicao */, res /* resposta */){
            res.send("Criando uma nova vaga de emprego...")
           }
);

// Rota PUT para atualizar uma vaga de emprego específica por ID
router.put("/job/:id" /* caminho */, 
           function(req /* requisicao */, res /* resposta */){
            const { id } = req.params;
            res.send("Atualizando uma vaga de emprego específica por ID. ID = " + id + "...")
           }
);

// Rota DELETE para excluir uma vaga específica de emprego por ID
router.delete("/job/:id" /* caminho */, 
           function(req /* requisicao */, res /* resposta */){
            const { id } = req.params;
            res.send("Excluindo uma vaga de emprego específica por ID. ID = " + id + "...")
           }
);

module.exports = router;
