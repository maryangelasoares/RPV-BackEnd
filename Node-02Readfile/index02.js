let fs = require('fs');

fs.readFile('arquivo-02.txt', 'utf-8', function (erro, conteudoArquivo) {
    if (erro) {
        throw erro; // Corrigido aqui
    }
    console.log('Conteúdo do arquivo:\n' + conteudoArquivo);
});
