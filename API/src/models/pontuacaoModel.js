var database = require("../database/config")

function pontuar(fkUsuario, acertos) {
    var instrucao = `
    INSERT INTO pontuacao (acertos, fkQuiz ,fkUsuario) VALUES ('${acertos}', 1,'${fkUsuario}')
    `
    return database.executar(instrucao);
}

function buscar(){
    var instrucao = `
    select acertos, nome from pontuacao join usuario on idUsuario = fkUsuario; 
    `
    return database.executar(instrucao)
}

function calculo(){
    var instrucao = `
    select truncate(avg(acertos),1) as media from pontuacao
    union 
    select truncate(count(acertos), 0) as maximo from pontuacao where acertos = 4;  `
    return database.executar(instrucao)
}

module.exports = {
    pontuar,
    buscar,
    calculo
}