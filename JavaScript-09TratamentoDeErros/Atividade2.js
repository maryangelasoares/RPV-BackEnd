/* 2. Utilizando tratamento de erros: Crie um programa que receba um array de números e um índice como argumentos e retorna o elemento do array no índice especificado. 
Utilize try-catch para lidar com o caso em que o índice fornecido está fora dos limites do array 
e imprima uma mensagem de erro (gere uma exceção) apropriada. */

function getElementoPorIndice (frutas, indice) {
    try {
        if (indice < 0 || indice >= frutas.length) {
            throw new Error("O índice está fora dos limites do array.");
        }
        return frutas[indice];
    } catch (Error) {
        return Error.message;
    }
}

const frutas = ["Maçã", "Banana", "Pera", "Uva", "Morango"];
let indice = 3;
let elemento = getElementoPorIndice(frutas, indice);
console.log("Elemento no índice", indice, ":", elemento);

indice = 6;
elemento = getElementoPorIndice(frutas, indice);
console.log("Elemento no índice", indice, ":", elemento);