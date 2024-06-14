create database PessoasDatabase;

use PessoasDatabase;

CREATE TABLE Pessoas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  idade int NOT NULL,
  cidade varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO Pessoas (nome, idade, cidade) VALUES
('João Silva', 30, 'São Paulo'),
('Maria Oliveira', 25, 'Rio de Janeiro'),
('Carlos Souza', 40, 'Belo Horizonte'),
('Ana Pereira', 35, 'Curitiba');


select * from Pessoas;