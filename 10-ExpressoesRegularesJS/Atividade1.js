/* 1.  Crie um programa que leia os dados de um aluno: 
    nome, sobrenome, CPF (11 digitos), sexo (M-Masculino, F-Feminino, O-Outros), 
    data de nascimento, endereço e telefone (Formato (032) 0 0000-0000) e exiba no console. */

    const prompt = require('prompt-sync')();

    function validarCPF(cpf) {
        // Remover caracteres não numéricos
        cpf = cpf.replace(/\D/g, '');
    
        // Verificar se o CPF tem 11 dígitos e não consiste em uma sequência de dígitos iguais
        if (!/^\d{11}$/.test(cpf) || /^(.)\1+$/.test(cpf)) {
            return false;
        }
        return true;
    }
    
    function validarTelefone(telefone) {
        // Verificar se o telefone corresponde ao formato (DDD) X XXXX-XXXX
        const regexTelefone = /^\(\d{3}\) \d \d{4}-\d{4}$/;
        if (!regexTelefone.test(telefone)) {
            return false;
        }
        return true;
    }
    
    function validarSexo(sexo) {
        // Verificar se o sexo é M, F ou O (masculino, feminino ou outros)
        if (!/^[MmFfOo]$/.test(sexo)) {
            return false;
        }
        return true;
    }
    
    function validarDataNascimento(data) {
        // Verificar se a data corresponde ao formato DD/MM/AA
        const regexData = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!regexData.test(data)) {
            return false;
        }   
        return true;
    }
    
    try {
        const nome = prompt("Digite o nome do aluno: ");
        const sobrenome = prompt("Digite o sobrenome do aluno: ");
        const cpf = prompt("Digite o CPF do aluno (apenas números): ");
        const sexo = prompt("Digite o sexo do aluno (M-Masculino, F-Feminino, O-Outros): ");
        const dataNascimento = prompt("Digite a data de nascimento do aluno (DD/MM/AAAA): ");
        const endereco = prompt("Digite o endereço do aluno: ");
        const telefone = prompt("Digite o telefone do aluno (Formato (DDD) X XXXX-XXXX): ");
    
        // Validar dados
        if (!validarCPF(cpf)) {
            throw new Error("CPF inválido.");
        }
        if (!validarSexo(sexo)) {
            throw new Error("Sexo inválido. Use M para masculino, F para feminino ou O para outros.");
        }
        if (!validarDataNascimento(dataNascimento)) {
            throw new Error("Data de nascimento inválida. Use o formato DD/MM/AAAA.");
        }
        if (!validarTelefone(telefone)) {
            throw new Error("Telefone inválido. Use o formato (DDD) X XXXX-XXXX.");
        }
    
        // Exibir dados
        console.log("\nDados do Aluno:");
        console.log("Nome: ", nome);
        console.log("Sobrenome: ", sobrenome);
        console.log("CPF: ", cpf);
        console.log("Sexo: ", sexo.toUpperCase());
        console.log("Data de Nascimento: ", dataNascimento);
        console.log("Endereço: ", endereco);
        console.log("Telefone: ", telefone);
    } catch (erro) {
        console.log("Erro:", erro.message);
    }
    