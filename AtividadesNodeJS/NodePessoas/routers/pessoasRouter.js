// Importa o módulo Router do framework Express
const Router = require("express").Router;

// Cria uma instância de um roteador do Express
// O roteador é usado para definir rotas e manipular requisições HTTP em uma aplicação Express
const router = Router();

// Importa o controlador de cadastro;
const pessoaController = require ('../controllers/pessoasController');

// Define uma rota GET para listar todas os cadastros;
router.get ("/pessoa", pessoaController.readList);

// Define uma rota GET para ler um cadastro específica por ID;
router.get ("/pessoa/:id", pessoaController.read);

// Define uma rota POST para criar um novo cadastro;
router.post ("/pessoa", pessoaController.create);

// Define uma rota PUT para atualizar um cadastro existente por ID;
router.put ("/pessoa/:id", pessoaController.update);

// Define uma rota DELETE para excluir um cadastro existente por ID;
router.delete("/pessoa/:id", pessoaController.delete);

module.exports = router;

