class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = parseFloat(preco).toFixed(2);
    }

    addToTable() { // Método da classe Produto para adicionar o produto a uma tabela HTML
        const tabelas = document.getElementById('tabelasProdutos').getElementsByTagName('tbody')[0];
        const linhas = tabelas.insertRow();

        const nomeProduto = linhas.insertCell(0); // Insere uma nova célula (td) na nova linha, na primeira coluna (índice 0)
        const precoProduto = linhas.insertCell(1); // Insere uma nova célula (td) na nova linha, na segunda coluna (índice 1)
        nomeProduto.textContent = this.nome;
        precoProduto.textContent = `R$ ${this.preco}`;
    }
}

document.getElementById('form-Produtos').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('preco').value;

    const produto = new Produto(nome, preco);

    produto.addToTable(); // Chama o método addToTable() do objeto produto criado para adicionar o produto à tabela

    // Limpa os campos do formulário após adicionar o produto à tabela
    document.getElementById('form-Produtos').reset();
});

document.getElementById('LimparDados').addEventListener('click', function() {
    const tabela = document.getElementById('tabelasProdutos').getElementsByTagName('tbody')[0];
    tabela.innerHTML = '';
});


