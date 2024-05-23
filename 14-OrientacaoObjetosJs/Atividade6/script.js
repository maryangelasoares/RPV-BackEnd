const tipoPessoaElement = document.getElementById('tipoPessoa');
const dadosFisicaElement = document.getElementById('dadosFisica');
const dadosJuridicaElement = document.getElementById('dadosJuridica');
const nomeElement = document.getElementById('nome');
const tipoPessoaValueElement = document.getElementById('tipoPessoa');
const logradouroElement = document.getElementById('logradouro');
const numeroElement = document.getElementById('numero');
const bairroElement = document.getElementById('bairro');
const cepElement = document.getElementById('cep');
const municipioElement = document.getElementById('municipio');
const estadoElement = document.getElementById('estado');
const telefoneElement = document.getElementById('telefone');
const cpfElement = document.getElementById('cpf');
const dataNascimentoElement = document.getElementById('dataNascimento');
const sexoElement = document.getElementById('sexo');
const cnpjElement = document.getElementById('cnpj');
const tipoContaElement = document.getElementById('tipoConta');
const resultadoDiv = document.getElementById('resultado');

tipoPessoaElement.addEventListener('change', function () {
    //add uma troca ao evento (No caso se é PF ou PJ);
    const tipoPessoa = this.value;
    dadosFisicaElement.style.display = tipoPessoa === 'Fisica' ? 'block' : 'none';
    dadosJuridicaElement.style.display = tipoPessoa === 'Fisica' ? 'none' : 'block';
});

function abrirConta() {
    const nome = nomeElement.value;
    const tipoPessoa = tipoPessoaValueElement.value;
    const logradouro = logradouroElement.value;
    const numero = numeroElement.value;
    const bairro = bairroElement.value;
    const cep = cepElement.value;
    const municipio = municipioElement.value;
    const estado = estadoElement.value;
    const telefone = telefoneElement.value;

    let cliente; //dados aprsentados ao clicar em "Abrir Conta."
    if (tipoPessoa === 'Fisica') {
        const cpf = cpfElement.value;
        const dataNascimento = dataNascimentoElement.value;
        const sexo = sexoElement.value;
        cliente = {
            nome,
            tipoPessoa,
            endereco: { logradouro, numero, bairro, cep, municipio, estado },
            telefone,
            cpf,
            dataNascimento,
            sexo
        };
    } else {
        const cnpj = cnpjElement.value;
        cliente = {
            nome,
            tipoPessoa,
            endereco: { logradouro, numero, bairro, cep, municipio, estado },
            telefone,
            cnpj
        };
    }

    const tipoConta = tipoContaElement.value; 
    resultadoDiv.innerHTML = `<h3>Cliente:</h3> 
                              <p>Nome: ${cliente.nome}</p>
                              <p>Tipo: ${cliente.tipoPessoa}</p>
                              <p>Endereço: ${logradouro}, ${numero} - ${bairro}, ${cep}, ${municipio}, ${estado}</p>
                              <p>Telefone: ${telefone}</p>`;

    if (tipoPessoa === 'Fisica') { //Ao selecionar o tipo de pessoa: PF ou PJ.
        resultadoDiv.innerHTML += `<p>CPF: ${cliente.cpf}</p>
                                   <p>Data de Nascimento: ${cliente.dataNascimento}</p>
                                   <p>Sexo: ${cliente.sexo}</p>`;
    } else {
        resultadoDiv.innerHTML += `<p>CNPJ: ${cliente.cnpj}</p>`;
    }

    if (tipoConta === 'Poupanca') {
        resultadoDiv.innerHTML += `<h3>Conta Poupança</h3>`;
        const saldoInicial = prompt("Digite o saldo inicial da conta poupança:");
        const saldo = parseFloat(saldoInicial);
        const rendimento1Ano = saldo * Math.pow((1 + 0.03), 12) - saldo; //01 Ano;
        const rendimento2Anos = saldo * Math.pow((1 + 0.03), 24) - saldo; //02 Anos;
        const rendimento5Anos = saldo * Math.pow((1 + 0.03), 60) - saldo; //03 Anos.
        resultadoDiv.innerHTML += `<p>Rendimento em 1 ano: R$${rendimento1Ano.toFixed(2)}</p>
                                   <p>Rendimento em 2 anos: R$${rendimento2Anos.toFixed(2)}</p>
                                   <p>Rendimento em 5 anos: R$${rendimento5Anos.toFixed(2)}</p>`;
    } else {
        resultadoDiv.innerHTML += `<h3>Conta Corrente</h3>`;
        const saldoInicial = prompt("Digite o saldo inicial da conta corrente:");
        const saldo = parseFloat(saldoInicial);
        let numeroSaques = 0;
        for (let i = 0; i < 5; i++) {
            const valorSaque = prompt("Digite o valor do saque " + (i+1) + ":");
            const saque = parseFloat(valorSaque);
            if (numeroSaques >= 2) {
                const taxa = saque * 0.0175;
                saque += taxa;
            }
            if (saldo >= saque) {
                saldo -= saque;
                numeroSaques++;
                resultadoDiv.innerHTML += `<p>Saque ${i+1}: R$${valorSaque} (Taxa: R$${(saque - parseFloat(valorSaque)).toFixed(2)}) - Saldo atual: R$${saldo.toFixed(2)}</p>`;
            } else {
                resultadoDiv.innerHTML += `<p>Saque ${i+1}: Saldo insuficiente</p>`;
                break;
            }
        }
    }
}
