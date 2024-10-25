// script.js
const perguntas = [
    {
        texto: "1. O que você prefere fazer no tempo livre?",
        opcoes: [
            { texto: "Relaxar assistindo TV", categorias: { margherita: 3, frango: 2, calabresa: 1 } },
            { texto: "Sair com amigos", categorias: { calabresa: 3, abacaxiComPresunto: 2, portuguesa: 1 } },
            { texto: "Praticar esportes", categorias: {frango: 3, portuguesa: 2, bacon: 1 } },
            { texto: "Fazer compras", categorias: {abacaxiComPresunto: 3, quatroQueijos: 2, margherita: 1} },
            { texto: "Ler", categorias: { quatroQueijos: 3, margherita: 2, portuguesa: 1 } },
            { texto: "Jogar video-games", caregorias: { bacon: 3, calabresa: 2, quatroQueijos: 1 } }
        ]
    },
    {
        texto: "2. Qual sua bebida favorita?",
        opcoes: [
            { texto: "Café", categorias: { margherita: 3, calabresa: 2, margherita: 1 } },
            { texto: "Chá", categorias: { quatroQueijos: 3, margherita: 2,  abacaxiComPresunto: 1} },
            { texto: "Refrigerante", categorias: { calabresa: 3, frango: 2, quatroQueijos: 1 } },
            { texto: "Suco", categorias: { frango: 3, margherita: 2, quatroQueijos: 1 } },
            { texto: "Cerveja", categorias: { bacon: 3, abacaxiComPresunto: 2, portuguesa: 1 } },
            { texto: "Energético", categorias: { abacaxiComPresunto: 3, calabresa: 2, bacon: 1} }
        ]
    },
    {
        texto: "3. Qual é a sua música preferida para ouvir?",
        opcoes: [
            { texto: "Rock / Metal / Indie", categorias: { frango: 3, bacon: 2, calabresa: 1 } },
            { texto: "Pop / Rap / K-Pop,", categorias: { calabresa: 3, frango: 2, portuguesa: 1 } },
            { texto: "Eletrônica / House / ", categorias: { abacaxiComPresunto: 3, quatroQueijos: 2, frango: 1 } },
            { texto: "Clássica / Instrumental", categorias: { margherita: 3, quatroQueijos: 2, abacaxiComPresunto: 1 } },
            { texto: "Sertanejo / Country / Folk", categorias: { bacon: 3, calabresa: 2, portuguesa: 1 }},
            { texto: "Jazz / Blues / Soul", categorias: { quatroQueijos: 3, frango: 2, margherita: 1 } }
        ]
    },
    {
        texto: "4. Qual tipo de filme você mais gosta?",
        opcoes: [
            { texto: "Comédia", categorias: { frango: 3, calabresa: 2, abacaxiComPresunto: 1, } },
            { texto: "Ação", categorias: { calabresa: 3, bacon: 2, quatroQueijos: 1 } },
            { texto: "Drama", categorias: { quatroQueijos: 3, frango: 2, margherita: 1 } },
            { texto: "Terror", categorias: { bacon: 3, quatroQueijos: 2, bacon: 1 } },
            { texto: "Suspense", categorias: { portuguesa: 3, bacon: 2, calabresa: 1} },
            { texto: "Fantasia", categorias: {abacaxiComPresunto: 3, portuguesa: 2, frango: 1} }
        ]
    },
    {
        texto: "5. Qual é o seu animal de estimação preferido?",
        opcoes: [
            { texto: "Gato", categorias: { margherita: 3, quatroQueijos: 2, bacon: 1 } },
            { texto: "Cachorro", categorias: { calabresa: 3, frango: 2, portuguesa: 1 } },
            { texto: "Peixe", categorias: { abacaxiComPresunto: 3, portuguesa: 2, frango: 1  } },
            { texto: "Hamster", categorias: { frango: 3, margherita: 2, abacaxiComPresunto: 1 } },
            { texto: "Coelho", categorias: { quatroQueijos: 3, abacaxiComPresunto: 2, margherita: 1 } },
            { texto: "Pássaro", categorias: { portuguesa: 3, quatroQueijos: 2, calabresa: 1 }}
        ]
    }
];

let indicePerguntaAtual = 0;
let pontuacao = {
    margherita: 0,
    calabresa: 0,
    quatroQueijos: 0,
    portuguesa: 0,
    frango: 0,
    abacaxiComPresunto: 0,
    bacon: 0
};

function mostrarPergunta() {
    const perguntaAtual = perguntas[indicePerguntaAtual];
    document.getElementById('question-text').textContent = perguntaAtual.texto;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = ''; // Limpa as opções anteriores

    // Adiciona as opções da pergunta atual
    perguntaAtual.opcoes.forEach((opcao, index) => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="radio" name="resposta" value="${index}"> ${opcao.texto}`;
        optionsContainer.appendChild(label);
        optionsContainer.appendChild(document.createElement('br'));
    });

    // Mostra o botão "Próxima"
    document.getElementById('next-button').style.display = 'inline-block';
}

function proximaPergunta() {
    const respostaSelecionada = document.querySelector('input[name="resposta"]:checked');
    if (!respostaSelecionada) {
        alert('Por favor, selecione uma opção!');
        return;
    }

    // Atualiza a pontuação com base na opção selecionada
    const indexOpcao = parseInt(respostaSelecionada.value);
    const categorias = perguntas[indicePerguntaAtual].opcoes[indexOpcao].categorias;
    for (let categoria in categorias) {
        pontuacao[categoria] += categorias[categoria];
    }

    // Avança para a próxima pergunta
    indicePerguntaAtual++;

    if (indicePerguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    // Encontra a categoria com a maior pontuação
    let maiorPontuacao = 0;
    let resultadoCategoria = '';

    for (let categoria in pontuacao) {
        if (pontuacao[categoria] > maiorPontuacao) {
            maiorPontuacao = pontuacao[categoria];
            resultadoCategoria = categoria;
        }
    }

    // Define o texto do resultado com base na categoria
    let resultadoTexto;
    switch (resultadoCategoria) {
        case 'margherita':
            resultadoTexto = "Você é uma Pizza Margherita: simples, clássica e elegante: você é uma pessoa bastante direta, que não gosta de complicações nas suas escolhas.";
            break;
        case 'calabresa':
            resultadoTexto = "Você é uma Pizza Calabresa: popular, tradicional e intensa. Você é uma pessoa super companheira, não falta em nenhuma reunião de amigos.";
            break;
        case 'quatroQueijos':
            resultadoTexto = "Você é uma Pizza Quatro Queijos: sofisticada e cheia de sabor. Você é uma pessoa que gosta de experienciar tudo que a vida oferece.";
            break;
        case 'portuguesa':
            resultadoTexto = "Você é uma Pizza Portuguesa: versátil e rica em ingredientes. Você é uma pessoa que está sempre pronta. Topa qualquer rolê;";
            break;
        case 'frango':
            resultadoTexto = "Você é uma Pizza de Frango com Catupiry: confortável e acolhedora! Você é uma pessoa carinhosa. É bom ouvinte e todos gostam de ter você por perto.";
            break;
        case 'abacaxiComPresunto':
            resultadoTexto = "Você é uma Pizza de Abacaxi com presunto: doce e salgado, uma combinação ousada e surpreendente. Você é um amigo que gosta muito de coisa exóticas e estrangeiras.";
            break;
        case 'bacon':
            resultadoTexto = "Você é uma Pizza de Bacon: cheia de personalidade e sabor marcante! Você é uma pessoa forte e persistente. Gosta de se manter fiel ao que acredita.";
            break;
        default:
            resultadoTexto = "Não conseguimos determinar o seu sabor de pizza!";
    }

    // Atualiza o conteúdo da seção do quiz para exibir o resultado
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `<p>${resultadoTexto}</p>`;

    // Adiciona o botão de reinício
    const reiniciarBtn = document.createElement('button');
    reiniciarBtn.textContent = 'Recomeçar';
    reiniciarBtn.onclick = reiniciarTeste;
    quizContainer.appendChild(reiniciarBtn);
}

function reiniciarTeste() {
    // Reseta as variáveis
    indicePerguntaAtual = 0;
    pontuacao = {
        margherita: 0,
        calabresa: 0,
        quatroQueijos: 0,
        portuguesa: 0,
        frango: 0,
        abacaxiComPresunto: 0,
        bacon: 0
    };

    // Restaura o conteúdo original da seção do quiz
    document.getElementById('quiz-container').innerHTML = `
        <h2>Qual sabor de pizza é você?</h2>
        <div class="question" id="question-text"></div>
        <div id="options-container"></div>
        <button id="next-button" onclick="proximaPergunta()">Próxima</button>
    `;

    // Exibe novamente a primeira pergunta
    mostrarPergunta();
}

// Inicializa o quiz exibindo a primeira pergunta
mostrarPergunta();