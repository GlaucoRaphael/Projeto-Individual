create database vom_kriege;
use vom_kriege;
drop database vom_kriege;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45)
);

select * from usuario;

insert into usuario values
(default, 'glauco' ,'aktglauco0935@gmail.com', '123456');

create table quiz(
idQuiz int primary key,
quantidadePerguntas int
);

insert into quiz values
(1, 5);

create table pontuacao(
idPontuacao int auto_increment,
acertos int,
fkQuiz int,
constraint fkQuizPontuacao foreign key (fkQuiz)
references quiz(idQuiz),
fkUsuario int,
constraint fkUsuarioPontuacao foreign key (fkUsuario)
references usuario(idUsuario),
primary key(idPontuacao,fkQuiz, fkUsuario)
); 

select truncate(avg(acertos),1) as media from pontuacao
union 
select truncate(count(acertos), 0) as maximo from pontuacao where acertos = 4;

select * from quiz;

select * from pontuacao;