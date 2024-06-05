const express = require('express')

const app = express();

const port = 3000;

const router = require('./routers');

router(app, express);

app.listen(
    port,
    function (error) {
        if (error) {
            console.log("Ocorreu um erro ao rodar o servidor!");
            return;
        } else {
            console.log("Servidor rodando com sucesso!");
        }
    }
);