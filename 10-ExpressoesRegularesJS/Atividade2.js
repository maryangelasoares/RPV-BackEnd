/* 2.  Crie um programa que leia o número de alunos de uma turma. 
    Após isso, o programa deve ler as notas das 2 avaliações de cada aluno e calcular e exibir: 
    o nome, a média de cada aluno e se o aluno foi aprovado ou reprovado. 
    Considere como média para aprovação 60 pontos ou mais.  */

    const prompt = require('prompt-sync')();

    function calcularMedia(nota1, nota2) {
      return (parseFloat(nota1) + parseFloat(nota2)) / 2;
    }
    
    function verificarAprovacao(media) {
      return media >= 60 ? 'Aprovado' : 'Reprovado';
    }
    
    const numAlunos = parseInt(prompt('Digite o número de alunos na turma: '));
    
    if (isNaN(numAlunos) || numAlunos <= 0) {
      console.log('Número inválido de alunos.');
    } else {
      const alunos = [];
    
      const nomeRegex = /^[a-zA-ZÀ-ú\s']+$/;
    
      for (let i = 0; i < numAlunos; i++) {
        let nome = '';
        do {
          nome = prompt(`Digite o nome do aluno ${i + 1}: `);
          if (!nome.match(nomeRegex)) {
            console.log('Nome inválido. Por favor, insira apenas letras.');
          }
        } while (!nome.match(nomeRegex));
    
        const nota1 = parseFloat(prompt(`Digite a nota da avaliação 1 do aluno ${nome}: `));
        const nota2 = parseFloat(prompt(`Digite a nota da avaliação 2 do aluno ${nome}: `));
    
        const media = calcularMedia(nota1, nota2);
        const situacao = verificarAprovacao(media);
        alunos.push({ nome, media, situacao });
      }
    
      console.log('\nResultados:');
      alunos.forEach(aluno => {
        console.log(`Nome: ${aluno.nome} | Média: ${aluno.media.toFixed(2)} | Situação: ${aluno.situacao}`);
      });
    }
    
