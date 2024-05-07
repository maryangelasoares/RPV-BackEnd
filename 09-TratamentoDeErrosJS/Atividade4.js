/* 4. Utilizando tratamento de erros: Crie um programa que leia a largura e o comprimento de um terreno retangular, 
calculando e mostrando a sua área em m² (largura x comprimento). 
O programa também deve mostrar a classificação desse terreno, de acordo com a lista abaixo: 
- Abaixo de 100m² = TERRENO POPULAR;
- Entre 100m² e 500m² = TERRENO MASTER; 
- Acima de 500m² = TERRENO VIP;
Utilize try-catch para lidar com o caso em que os dados (largura e comprimento) não sejam informados no padrão correto 
e imprima uma mensagem de erro (gere uma exceção)  apropriada. */

const prompt = require('prompt-sync')();

let largura, comprimento;

try {
    largura = parseFloat(prompt('Digite a largura de seu terreno em metros: '));
    comprimento = parseFloat(prompt('Digite o comprimento de seu terreno em metros: '));

    if (isNaN(largura) || isNaN(comprimento)) {
        throw new Error("Por favor, insira valores numéricos válidos.");
    }

    function calcularArea(largura, comprimento) {
        return largura * comprimento;
    }

    function classificarTerreno(area) {
        if (area <= 100) {
            return "Terreno Popular.";
        } else if (area > 100 && area <= 500) {
            return "Terreno Master.";
        } else if (area > 500) {
            return "Terreno Vip.";
        }
    }

    const area = calcularArea(largura, comprimento);
    const classificacao = classificarTerreno(area);

    console.log(`A área do terreno é ${area}m².`);
    console.log(`Classificação do seu terreno é: ${classificacao}`);
} catch (erro) {
    console.log("Erro:", erro.message);
}
