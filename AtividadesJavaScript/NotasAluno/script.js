function determinarSituacao() {
    let nome = document.getElementById("nome").value;
    let matricula = document.getElementById("matricula").value;
    let disciplina = document.getElementById("disciplina").value;
    let nota = parseFloat(document.getElementById("nota").value);

    if (isNaN(nota) || isNaN(matricula)) {
        alert ("Por favor, digite valores numéricos válidos de 0 a 100.");
        return;
    }

    let situacaoAluno = "";
    if (nota >= 60) {
        situacaoAluno = "você está aprovado";
    } else if (nota >= 50) {
        situacaoAluno = "você está em recuperação";
    } else {
        situacaoAluno = "infelizmente você não atingiu a nota necessária e está reprovado.";
    }

    document.getElementById("resultado").innerHTML = `Olá ${nome}. Referente a disciplina: ${disciplina}, ${situacaoAluno}.`;
}

