// PARTE 1: Lista de perguntas e respostas
perguntas = [
    {
      "pergunta": "Qual tag HTML é semanticamente correta para representar o cabeçalho principal de um documento?",
      "respostas": [
        { "opcao": "<div> com id='header'", "correto": false },
        { "opcao": "<header>", "correto": true },
        { "opcao": "<top>", "correto": false }
      ]
    },
    {
      "pergunta": "Qual seletor CSS tem maior especificidade?",
      "respostas": [
        { "opcao": ".classe p", "correto": false },
        { "opcao": "p", "correto": false },
        { "opcao": "#id", "correto": true }
      ]
    },
    {
      "pergunta": "Qual método JavaScript é comumente usado para adicionar um novo elemento ao final de um array?",
      "respostas": [
        { "opcao": "push()", "correto": true },
        { "opcao": "append()", "correto": false },
        { "opcao": "addToEnd()", "correto": false }
      ]
    },
    {
      "pergunta": "Qual propriedade CSS é utilizada para controlar o espaçamento interno de um elemento?",
      "respostas": [
        { "opcao": "margin", "correto": false },
        { "opcao": "border", "correto": false },
        { "opcao": "padding", "correto": true }
      ]
    },
    {
      "pergunta": "Como você selecionaria todos os elementos com a classe 'destaque' usando JavaScript?",
      "respostas": [
        { "opcao": "document.getElementByClass('destaque')", "correto": false },
        { "opcao": "document.querySelectorAll('.destaque')", "correto": true },
        { "opcao": "document.selectClass('.destaque')", "correto": false }
      ]
    },
    {
      "pergunta": "Qual a diferença principal entre `display: block` e `display: inline-block` em CSS?",
      "respostas": [
        { "opcao": "Elementos block não ocupam toda a largura disponível.", "correto": false },
        { "opcao": "Elementos inline-block não permitem definir largura e altura.", "correto": false },
        { "opcao": "Elementos block iniciam uma nova linha, enquanto inline-block não.", "correto": true }
      ]
    },
    {
      "pergunta": "Qual evento JavaScript é disparado quando um usuário clica em um elemento?",
      "respostas": [
        { "opcao": "mouseover", "correto": false },
        { "opcao": "click", "correto": true },
        { "opcao": "hover", "correto": false }
      ]
    },
    {
      "pergunta": "Qual tag HTML é usada para criar uma lista ordenada?",
      "respostas": [
        { "opcao": "<ul>", "correto": false },
        { "opcao": "<dl>", "correto": false },
        { "opcao": "<ol>", "correto": true }
      ]
    },
    {
      "pergunta": "Qual propriedade CSS é usada para alterar a fonte do texto de um elemento?",
      "respostas": [
        { "opcao": "text-style", "correto": false },
        { "opcao": "font-family", "correto": true },
        { "opcao": "text-font", "correto": false }
      ]
    },
    {
      "pergunta": "O que é o DOM (Document Object Model)?",
      "respostas": [
        { "opcao": "Uma linguagem de programação para estilizar páginas web.", "correto": false },
        { "opcao": "Uma interface que permite que scripts acessem e atualizem o conteúdo, a estrutura e o estilo de um documento HTML ou XML.", "correto": true },
        { "opcao": "Um método para criar animações em CSS.", "correto": false }
      ]
    },
    {
      "pergunta": "Como você declararia uma variável que não pode ser reatribuída após a sua inicialização em JavaScript?",
      "respostas": [
        { "opcao": "var nome = 'valor';", "correto": false },
        { "opcao": "let nome = 'valor';", "correto": false },
        { "opcao": "const nome = 'valor';", "correto": true }
      ]
    },
    {
      "pergunta": "Qual propriedade CSS é utilizada para alinhar elementos flexíveis ao longo do eixo principal?",
      "respostas": [
        { "opcao": "align-items", "correto": false },
        { "opcao": "justify-content", "correto": true },
        { "opcao": "align-content", "correto": false }
      ]
    },
    {
      "pergunta": "Qual método JavaScript é usado para remover o último elemento de um array?",
      "respostas": [
        { "opcao": "shift()", "correto": false },
        { "opcao": "pop()", "correto": true },
        { "opcao": "splice()", "correto": false }
      ]
    },
    {
      "pergunta": "Qual atributo HTML é usado para definir estilos CSS diretamente em um elemento?",
      "respostas": [
        { "opcao": "class", "correto": false },
        { "opcao": "id", "correto": false },
        { "opcao": "style", "correto": true }
      ]
    },
    {
      "pergunta": "O que são pseudo-classes em CSS?",
      "respostas": [
        { "opcao": "Atributos adicionais para elementos HTML.", "correto": false },
        { "opcao": "Palavras-chave usadas para estilizar elementos em um estado específico.", "correto": true },
        { "opcao": "Funções JavaScript para manipular o estilo de elementos.", "correto": false }
      ]
    }
  ];
  
  
  // PARTE 2: Pegando os elementos do HTML
  const perguntaElemento = document.querySelector(".pergunta");
  const respostasElemento = document.querySelector(".respostas");
  const progressoElemento = document.querySelector(".progresso");
  const textoFinal = document.querySelector(".fim span");
  const conteudo = document.querySelector(".conteudo");
  const conteudoFinal = document.querySelector(".fim");
  
  // PARTE 3: Variáveis para controle do jogo
  let indiceAtual = 0; // Índice da pergunta atual
  let acertos = 0; // Contador de acertos
  
  // PARTE 4: Função para carregar uma nova pergunta
  function carregarPergunta() {
    progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
    const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
    perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta
  
    respostasElemento.innerHTML = ""; // Limpa as respostas anteriores
  
    // Percorre todas as respostas da pergunta atual
    for (let i = 0; i < perguntaAtual.respostas.length; i++) {
      // Pega a resposta atual com base no índice 'i'
      const resposta = perguntaAtual.respostas[i];
      // Cria um novo elemento 'button' (botão)
      const botao = document.createElement("button");
      // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
      botao.classList.add("botao-resposta");
      // Define o texto do botão com a opção de resposta (resposta.opcao)
      botao.innerText = resposta.opcao;
      // Adiciona um evento de clique no botão
      botao.onclick = function () {
        // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
        if (resposta.correto) {
          acertos = acertos + 1;
           // Incrementa o contador de acertos
          // acertos++; Outra forma de incrementar
        }
  
        // Avança para a próxima pergunta
        indiceAtual++;
  
        // Se ainda houver perguntas, carrega a próxima pergunta
        if (indiceAtual < perguntas.length) {
          carregarPergunta(); // Carrega a próxima pergunta
        } else {
          // Se não houver mais perguntas, finaliza o jogo
          finalizarJogo();
        }
      };
  
      // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
      respostasElemento.appendChild(botao);
    }
  }
  
  // PARTE 5: Função para mostrar a tela final
  function finalizarJogo() {
    textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
    conteudo.style.display = "none"; // Esconde as perguntas
    conteudoFinal.style.display = "flex"; // Mostra a tela final
  }
  
  // PARTE 6: Iniciando o jogo pela primeira vez
  carregarPergunta();
  