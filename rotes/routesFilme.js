// Depencias requidas
const express = require("express");
const ControllerFilme = require("../controlles/ControllerFilme");
const router = express.Router();
// Criação das rotas
router.get("/cadastrar", ControllerFilme.cadastrarFilme);
router.post("/cadastrar", ControllerFilme.filmeCreate);
router.get("/", ControllerFilme.listarFilmes);
router.get("/update/:id_filme", ControllerFilme.UpdateFilme);
router.post("/update", ControllerFilme.FilmeUptade);
router.post("/remover", ControllerFilme.RemoverFilme);

module.exports = router;
