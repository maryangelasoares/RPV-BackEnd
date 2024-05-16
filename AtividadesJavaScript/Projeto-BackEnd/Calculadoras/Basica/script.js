function pressionar(valor) {
    document.getElementById('display').value += valor;
}

function limpar() {
    document.getElementById('display').value = '';
}

function calcular() {
    var expression = document.getElementById('display').value;
    try {
        var result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Erro na expressão!');
        limpar();
    }
}

