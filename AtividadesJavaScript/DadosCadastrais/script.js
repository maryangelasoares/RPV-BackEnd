function dadosCadastro() {

    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let cpf = document.getElementById('cpf').value;
    let sexo = document.getElementById('sexo').value;
    let data = document.getElementById('data').value;
    let endereco = document.getElementById('endereco').value;
    let phone = document.getElementById('phone').value;

    if (!/^\d+$/.test(cpf)) {
        alert('Por favor, digite apenas números no campo CPF.');
        return;
    }

    if (nome === '' || sobrenome === '' || cpf === '' || sexo === '' || data === '' || endereco === '' || phone === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    document.getElementById("resultado").innerHTML = `Oie, ${nome} ${sobrenome}.
            CPF: ${cpf};
            Sexto: ${sexo};
            Data de Nascimento: ${data};
            Endereço Cadastrdo: ${endereco};
            Telefone Cadastrado: ${phone}.
    `;
}

