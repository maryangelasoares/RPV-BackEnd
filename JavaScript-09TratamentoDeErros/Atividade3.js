/* 3. Utilizando tratamento de erros: Crie um programa que leia os dados de uma pessoa: 
nome, sobrenome, CPF (11 caracteres), sexo (M, F, O), data de nascimento (Formato Data), endereço e telefone.
Valide os dados recebidos e exiba no console. 
Utilize try-catch para lidar com o caso em que os dados não sejam informados no padrão correto 
e imprima uma mensagem de erro (gere uma exceção)  apropriada. */

const prompt = require('prompt-sync')();

// Função para validar o CPF
function validarCPF(cpf) {
    // Remover caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');

    // Verificar se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
        throw new Error("CPF deve conter 11 dígitos.");
    }

    // Verificar se todos os dígitos são iguais
    if (/^(\d)\1+$/.test(cpf)) {
        throw new Error("CPF inválido.");
    }

    // Algoritmo para verificar se o CPF é válido
    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.substring(9, 10))) {
        throw new Error("CPF inválido.");
    }

    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.substring(10, 11))) {
        throw new Error("CPF inválido.");
    }

    return true;
}

function validarData(data) {
    const regexData = /^\d{4}-\d{2}-\d{2}$/;
    if (!regexData.test(data)) {
        throw new Error("Formato de data inválido. Use o formato AAAA-MM-DD.");
    }
    return true;
}

function validarSexo(sexo) {
    if (!["M", "F", "O"].includes(sexo.toUpperCase())) {
        throw new Error("Sexo inválido. Use M para masculino, F para feminino ou O para outro.");
    }
    return true;
}

try {
    // Obter dados da pessoa
    const nome = prompt("Digite o nome: ");
    const sobrenome = prompt("Digite o sobrenome: ");
    const cpf = prompt("Digite o CPF (apenas números): ");
    const sexo = prompt("Digite o sexo (M, F ou O): ");
    const dataNascimento = prompt("Digite a data de nascimento (AAAA-MM-DD): ");
    const endereco = prompt("Digite o endereço: ");
    const telefone = prompt("Digite o telefone: ");

    // Validar dados
    validarCPF(cpf);
    validarSexo(sexo);
    validarData(dataNascimento);

    // Exibir dados
    console.log("\nDados da pessoa:");
    console.log("Nome:", nome);
    console.log("Sobrenome:", sobrenome);
    console.log("CPF:", cpf);
    console.log("Sexo:", sexo);
    console.log("Data de Nascimento:", dataNascimento);
    console.log("Endereço:", endereco);
    console.log("Telefone:", telefone);
} catch (erro) {
    console.log("Erro:", erro.message);
}

