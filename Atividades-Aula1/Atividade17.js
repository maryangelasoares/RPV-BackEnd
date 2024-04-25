/* 17: Crie um programa que gera e escreve os números pares entre 0 e 50. No início da 30a iteração o sistema deve pular o laço de repetição. */

// Loop para gerar e escrever os números pares
for (let i = 0; i <= 50; i += 2) {
    // Verifica se é a 30ª iteração
    if (i === 30) {
        continue; // Pula para a próxima iteração
    }

    // Escreve o número par
    console.log(i);
}