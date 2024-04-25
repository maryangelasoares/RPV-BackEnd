/* 16: Crie um programa que gera e escreve os números ímpares entre 0 e 50. No início da 30a iteração o sistema deve sair do laço de repetição. */

// Inicializa a contagem de iterações
let iteracao = 0;

// Loop para gerar e escrever os números ímpares
for (let i = 1; i <= 50; i += 2) {
    // Verifica se atingiu a 30ª iteração
    if (iteracao === 30) {
        break; // Sai do loop
    }

    // Escreve o número ímpar
    console.log(i);

    // Incrementa a contagem de iterações
    iteracao++;
}
