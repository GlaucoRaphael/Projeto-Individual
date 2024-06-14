var pontuarModel = require("../models/pontuacaoModel");

function buscar(req, res) {

        pontuarModel.buscar()
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length > 0) {
                        console.log(resultado);
                        res.json(
                            resultado
                        );
                    } else {
                        console.log ('Nenhum resultado encontrado');
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar a busca! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

    var pontuarModel = require("../models/pontuacaoModel");

function calculo(req, res) {

        pontuarModel.calculo()
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length > 0) {
                        console.log(resultado);
                        res.json(
                            resultado
                        );
                    } else {
                        console.log ('Nenhum resultado encontrado');
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar ao realizar um calculo! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


function pontuar(req, res) {
    var acertos = req.body.acertosServer
    var idUsuario = req.body.idServer
    console.log('ID NO CONTROLLER É: ' + idUsuario)

    pontuarModel.pontuar(idUsuario ,acertos)
        .then(
            function (resultado) {
                res.status(200).json(resultado)
            }
        )
}

module.exports = {
    pontuar,
    buscar,
    calculo
}