/* Utilizando função: Crie um programa que leia um valor inicial A e exiba a sequência de valores do cálculo de A! e o seu resultado. 
    Ex: 5! = 5 X 4 X 3 X 2 X 1 = 120 */

const prompt = require('prompt-sync')();

function calcularFatorial(numero) {
    let resultado = 1;
    let sequencia = '';

    for (let i = numero; i > 0; i--) {
        resultado *= i;
        if (i !== 1) {
            sequencia += `${i} x `;
        } else {
            sequencia += `${i}`;
        }
    }
    return { resultado, sequencia };
}

const valorInicial = parseInt(prompt('Digite um número: '));
const { resultado, sequencia } = calcularFatorial(valorInicial);
console.log(`${valorInicial}! = ${sequencia} = ${resultado}`);