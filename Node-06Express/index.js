const express = require("express");

//Criar uma instância do aplicativo express
const app = express();

const port = 3000;

app.listen(
    port,
    function (erro) {
        if (erro) {
            console.log("Ocorreu um erro ao rodar o servidor!");
        } else {
            console.log("Servidor rodando com sucesso!");
        }
    }
);