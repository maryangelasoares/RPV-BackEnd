CREATE DATABASE GerenciamentoProdutos;

CREATE TABLE produtos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  quantidade INT NOT NULL,
  unidade_medida ENUM('UN', 'CT', 'CX', 'DZ', 'PA', 'PC', 'PT', 'RL') NOT NULL,
  preco DECIMAL(10,2) NOT NULL,
  data_cadastro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO produtos (nome, quantidade, unidade_medida, preco)
VALUES ('Camiseta', 10, 'PC', 20.00);


SELECT * FROM produtos;