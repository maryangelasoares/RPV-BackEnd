/*
// Importa o módulo "calculadora" que contém as funções relacionadas a operações matemáticas
var calculadora = require("./calculadora");

// Declaração de variáveis para valores a serem usados nas operações
var valor1, valor2;

// Atribuição de valores às variáveis
valor1 = 50;
valor2 = 10;

// Exibe a descrição da calculadora no console
console.log("\n" + calculadora.descricao);

// Atualiza a descrição da calculadora adicionando uma informação ao final
calculadora.descricao += "\nDesenvolvida por Jonatan Eugenio!\n";

// Exibe a descrição atualizada da calculadora no console
console.log("\n" + calculadora.descricao);

// Executa as operações matemáticas e exibe os resultados no console
console.log("Resultado Soma = " + calculadora.somar(valor1, valor2));
console.log("Resultado Subtracao = " + calculadora.subtrair(valor1, valor2));
console.log("Resultado Multiplicacao = " + calculadora.multiplicar(valor1, valor2));
console.log("Resultado Divisao = " + calculadora.dividir(valor1, valor2));
*/


/*
 *  ATIVIDADE 1
 *  Utilizando os conhecimentos adquiridos referente à módulos:
 *  Crie uma calculadora de IMC, passando como parametros peso e altura.
 * 
 * */


// Importa o módulo "calculadora" que contém as funções relacionadas a operações matemáticas
const calculadoraIMC = require("./calculadora_imc");

// Declaração de variáveis para valores a serem usados nas operações
let peso, altura;

// Atribuição de valores às variáveis
peso = 80;
altura = 1.80;

// Atualiza a descrição da calculadora adicionando uma informação ao final
calculadoraIMC.descricao += "\nDesenvolvida por Jonatan Eugenio!\n";

// Exibe a descrição atualizada da calculadora no console
console.log("\n" + calculadoraIMC.descricao);

// Executa as operações matemáticas e exibe os resultados no console
const retornoIMC = calculadoraIMC.calcularIMC(peso, altura);

if (retornoIMC.status) {
    console.log("IMC Cálculo = " + retornoIMC.calculo.toFixed(2));
    console.log("IMC Classificação = " + retornoIMC.classificacao);
    console.log("Resultado:\n" + retornoIMC.resultado);
} 
else {
    console.log("Ocorreu algum problema:\n" + retornoIMC.resultado);
}
