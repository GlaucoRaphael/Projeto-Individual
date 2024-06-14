var express = require("express");
var router = express.Router();

var pontuacaoController = require("../controllers/pontuacaoController");

router.post("/pontuar", function (req, res) {
    pontuacaoController.pontuar(req, res);
});

router.get("/buscar", function (req, res) {
    pontuacaoController.buscar(req, res);
});

router.get("/calculo", function (req, res) {
    pontuacaoController.calculo(req, res);
});

module.exports = router;

