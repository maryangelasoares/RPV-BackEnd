class PessoasDataBase {
  
    // Método para inicializar a conexão com o banco de dados e iniciar o processo de criação do banco e da tabela;
    initConnection(connection) {
      this.connection = connection; // Armazena a conexão passada como argumento;
      this.initDatabase(); // Chama o método para inicializar o banco de dados;
    }
  
    // Método para inicializar o banco de dados;
    initDatabase() {
      // Conecta ao banco de dados utilizando a conexão fornecida;
      this.connection.connect((error) => {
        if (error) {
          console.log("Ocorreu um ERRO ao Conectar no Banco De Dados..."); // Exibe uma mensagem de erro se a conexão falhar;
          console.log(error.message); // Exibe o erro detalhado;
          return;
        }
        console.log("Banco de Dados Conectado Com Sucesso..."); // Exibe uma mensagem de sucesso se a conexão for bem-sucedida;
        });
        } 
      }
        // Exporta uma instância da classe JobDatabase para ser utilizada em outros arquivos do projeto;
        module.exports = new PessoasDataBase ();
  