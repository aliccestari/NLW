const perguntas = [
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "let myVar;",
        "const myVar;",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para imprimir algo no console em JavaScript?",
      respostas: [
        "log()",
        "print()",
        "console.log()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual destes é um operador de comparação em JavaScript?",
      respostas: [
        "==",
        "===",
        "&=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função de `typeof` em JavaScript?",
      respostas: [
        "Para verificar o tipo de dados de uma variável.",
        "Para atribuir um tipo de dados a uma variável.",
        "Para converter uma variável para um tipo de dados específico.",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método `addEventListener` faz em JavaScript?",
      respostas: [
        "Remove um evento de um elemento HTML.",
        "Adiciona um evento a um elemento HTML.",
        "Altera o estilo de um elemento HTML.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador de atribuição em JavaScript?",
      respostas: [
        "=",
        "==",
        ":=",
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para converter uma string em um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "toFloat()",
        "parseInteger()",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método `push()` faz em JavaScript?",
      respostas: [
        "Remove o último elemento de um array.",
        "Adiciona um elemento ao início de um array.",
        "Adiciona um elemento ao final de um array.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador `&&` em JavaScript?",
      respostas: [
        "Operador de concatenação de strings.",
        "Operador de comparação de igualdade estrita.",
        "Operador lógico de 'E' (AND).",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "shift()",
        "splice()",
      ],
      correta: 0
    },
  ];
  
  // o simbolo de # significa q esta procurando pelo ID da tag
  const quiz = document.querySelector('#quiz')
  
  //transforma tudo q tem no documento em JavaScript
  const template = document.querySelector('template')
  
  //objeto, tipo de dados Set, não pode ter informaçoes repetidas
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //para cada item de perguntas
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
        // arrow function
        dt.querySelector('input').onchange = (event) => 
        {
          const estaCorreta = event.target.value == item.correta
  
          corretas.delete(item)
          if(estaCorreta)
          {
            corretas.add(item)
          }
         
          mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        } 
  
  
        quizItem.querySelector('dl').appendChild(dt)
    }
  
  //remove o primeiro elemento 
   quizItem.querySelector('dl dt').remove()
  
  //coloca a pergunta na tela
   quiz.appendChild(quizItem)
  }