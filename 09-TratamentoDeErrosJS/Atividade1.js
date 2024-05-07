/* 1. Utilizando tratamento de erros: Crie um programa que receba dois números como parâmetros e retorna a divisão do primeiro pelo segundo.
Use try-catch para lidar com o caso em que o segundo número é zero 
e imprima uma mensagem de erro (gere uma exceção) apropriada. */

function divisao (a,b) {
    try {
        if (b === 0){
            throw new Error ('Não é possivél dividir por 0.');
        }
        return a/b;
    } catch (Error) {
        return Error.message;
    }
}

let resultado = divisao(10, 2);
console.log("Resultado da divisão:", resultado);

resultado = divisao(8, 0);
console.log("Resultado da divisão:", resultado);

