function calcularArea(){
    let larguraInput = document.getElementById("largura");
    let comprimentoInput = document.getElementById("comprimento");
    let resultado = document.getElementById("resultado");

    let largura = parseFloat(larguraInput.value.replace(",", "."));
    let comprimento = parseFloat(comprimentoInput.value.replace(",", "."));
    
    if (isNaN(largura) || isNaN(comprimento)) {
        alert("Por favor, necessário digitar valores numéricos.");
        return;
    }

    if (largura <= 0 || comprimento <= 0) {
        alert("Valor inválido. Peso e altura devem ser valores positivos .");
        return;
    }

    let area = largura * comprimento;

    let classificacao = "";
    if (area <= 100) {
        classificacao = "Terreno Popular."
    } else if (area > 100 && area <= 500) {
        classificacao =  "Terreno Master.";
    } else if (area > 500) {
        classificacao = "Terreno Vip.";
    }

    document.getElementById("resultado").innerHTML = "Sua terreno é de " + area + " m². " +  classificacao;
}
