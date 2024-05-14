function calcularIMC() {
    let pesoInput = document.getElementById("peso");
    let alturaInput = document.getElementById("altura");
    let resultado = document.getElementById("resultado");

    let peso = parseFloat(pesoInput.value.replace(",", "."));
    let altura = parseFloat(alturaInput.value.replace(",", "."));

    if (isNaN(peso) || isNaN(altura)) {
       alert( "Por favor, digite valores numéricos válidos.");
        return;
    }
    // Calcular o IMC
    let imc = peso / (altura * altura);

    // Classificar o IMC
    let classificacao = "";
    if (imc < 18.5) {
        classificacao = "Abaixo do Peso.";
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Peso Normal.";
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = "Sobrepeso.";
    } else if (imc >= 30 && imc < 34.9) {
        classificacao = "Obesidade Grau I.";
    } else if (imc >= 35 && imc < 39.9) {
        classificacao = "Obesidade Grau II.";
    } else {
        classificacao = "Obesidade Grau III.";
    }

    // Exibir o resultado no elemento com id "resultado"
    document.getElementById("resultado").innerHTML = "Seu IMC é: " + imc.toFixed(2) + " - " + classificacao;
}