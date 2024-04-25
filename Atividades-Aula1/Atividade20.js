/* 20: Crie um programa que efetue a soma de todos os números ímpares que são múltiplos de três e que se encontram no conjunto dos números de 1 até 100. */

let soma = 0;

// Itera sobre os números de 1 até 100
for (let i = 1; i <= 100; i++) {
    // Verifica se o número é ímpar e múltiplo de três
    if (i % 2 !== 0 && i % 3 === 0) {
        soma += i; // Adiciona o número à soma total
    }
}

// Exibe a soma dos números ímpares que são múltiplos de três
console.log("A soma dos números ímpares múltiplos de três de 1 até 100 é: " + soma);




