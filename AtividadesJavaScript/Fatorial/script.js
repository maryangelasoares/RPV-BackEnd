function calcularFatorial() {
    
    const fatorial = parseInt(document.getElementById('fatorial').value);

    if (isNaN(fatorial) || fatorial < 0) {
        alert('Por favor, insira um número inteiro não negativo.');
        return;
    }

    let resultado = 1;
    let sequencia = '';

    for (let i = fatorial; i > 0; i--) {
        resultado *= i;
        if (i !== 1) {
            sequencia += `${i} x `;
        } else {
            sequencia += `${i}`;
        }
    }

    document.getElementById("resultado").innerHTML = `O fatorial de ${fatorial}! = ${sequencia} = ${resultado}`

}