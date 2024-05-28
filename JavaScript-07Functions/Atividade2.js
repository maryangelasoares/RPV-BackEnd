/* 2. Utilizando função: Crie um programa que leia a largura e o comprimento de um terreno 
retangular, calculando e mostrando a sua área em m² (largura x comprimento). 
O programa também deve mostrar a classificação desse terreno, de acordo com a lista abaixo: 
- Abaixo de 100m² = TERRENO POPULAR 
- Entre 100m² e 500m² = TERRENO MASTER 
- Acima de 500m² = TERRENO VIP. */

const prompt = require('prompt-sync')();

let largura = prompt('Digita a largura de seu terreno em metros: ');
let comprimento = prompt('Digite o comprimento de seu terreno em metros: ');

function calcularArea(largura, comprimento) {
    return largura * comprimento;
};

function classificarTerreno(area) {
    if (area <= 100) {
       return "Terreno Popular.";
    } if (area > 100 && area <= 500) {
       return "Terreno Master.";
    } if (area > 500) {
       return "Terreno Vip.";
    }
}

area = calcularArea(largura, comprimento);
const classificacao = classificarTerreno(area);

console.log(`A área do terreno é ${area}m². `);
console.log(`Classificação do seu terreno é: ${classificacao}`);


