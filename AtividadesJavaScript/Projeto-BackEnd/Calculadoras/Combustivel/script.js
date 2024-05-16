function calcularCusto() {
  let precoGasolina = parseFloat(document.getElementById("precoGasolina").value);
  let precoAlcool = parseFloat(document.getElementById("precoAlcool").value);
  let litrosAbastecidos = parseFloat(document.getElementById("litrosAbastecidos").value);

  if (isNaN(precoGasolina) || isNaN(precoAlcool) || isNaN(litrosAbastecidos)) {
    alert("Por favor, necessário digitar valores numéricos.");
    return;
  }

  if (precoGasolina < 0 || precoAlcool < 0 || litrosAbastecidos < 0) {
      alert("Os valores não podem ser negativos!");
      return;
  }

  let custoGasolina = precoGasolina * litrosAbastecidos;
  let custoAlcool = precoAlcool * litrosAbastecidos;

  let opcaoEconomica = custoGasolina < custoAlcool ? "Gasolina" : "Álcool";

  let resultado = "Custo da Gasolina: R$ " + custoGasolina.toFixed(2) + "<br>";
  resultado += "Custo do Álcool: R$ " + custoAlcool.toFixed(2) + "<br>";
  resultado += "Opção mais econômica: " + opcaoEconomica;
  document.getElementById("resultado").innerHTML = resultado;
}
