const Router = require("express").Router;

const router = Router();

const pessoaController = require ('../controllers/pessoasController');

/* => INTEGRAÇÃO API. */

router.get ("/api/pessoas", pessoaController.apireadlist);

router.get ("/api/pessoas/:id", pessoaController.apiread);

router.post ("/api/pessos", pessoaController.apicreate);

router.put ("/api/pessoas/:id", pessoaController.apiupdate);

router.delete("/api/pessoas/:id", pessoaController.apidelete);

/* => INTEGRAÇÃO FrontEnd x BackEnd. */

router.get("/pessoas/create", pessoaController.viewCreate);

router.get("/pessoas", pessoaController.viewReadList);

router.get("/pessoas/update/:id", pessoaController.viewUpdate);

router.get("/", pessoaController.viewHomePage);

router.post("/pessoas", pessoaController.create);

router.post("/pessoas/:id", pessoaController.update);

router.get("/pessoas/delete/:id", pessoaController.delete);

module.exports = router;