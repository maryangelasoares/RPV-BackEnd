// Importa o módulo Router do framework Express
const Router = require("express").Router;

const router = Router();

const produtoController = require("../controllers/produtoController");

router.get("/produtos", produtoController.readList);

router.get("/produtos/:id", produtoController.read);

router.post("/produtos", produtoController.create);

router.put("/produtos/:id", produtoController.update);

router.delete("/produtos/:id", produtoController.delete);

module.exports = router;
