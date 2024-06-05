const fs = require('fs');
const readline = require('readline');

// Cria uma interface para ler a entrada do usuário via console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta ao usuário para escrever algo
rl.question('Escreva algo para ser salvo no arquivo: ', (input) => {
    // Escreve o input do usuário no arquivo 'arquivo-02.txt'
    fs.writeFile('arquivo-02.txt', input, (err) => {
        if (err) {
            console.error('Erro ao escrever no arquivo:', err);
            rl.close();
            return;
        }

        // Lê o conteúdo do arquivo e imprime no console
        fs.readFile('arquivo-02.txt', 'utf-8', (err, data) => {
            if (err) {
                console.error('Erro ao ler o arquivo:', err);
                rl.close();
                return;
            }

            console.log('Conteúdo do arquivo:\n' + data);
            rl.close();
        });
    });
});
