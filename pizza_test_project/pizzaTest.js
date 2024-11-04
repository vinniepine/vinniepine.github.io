// script.js
const perguntas = [
    {
        texto: "1. O que você prefere fazer no tempo livre?",
        opcoes: [
            { texto: "Relaxar assistindo TV", categorias:       { margherita: 3, frango: 2, calabresa: 1 } },
            { texto: "Sair com amigos", categorias:             { calabresa: 3, abacaxiComLombo: 2, portuguesa: 1 } },
            { texto: "Praticar esportes", categorias:           { frango: 3, portuguesa: 2, bacon: 1 } },
            { texto: "Fazer compras", categorias:               { abacaxiComLombo: 3, quatroQueijos: 2, margherita: 1} },
            { texto: "Ler", categorias:                         { quatroQueijos: 3, margherita: 2, portuguesa: 1 } },
            { texto: "Jogar video-games", caregorias:           { bacon: 3, calabresa: 2, quatroQueijos: 1 } }
        ]
    },
    {
        texto: "2. Qual sua bebida favorita?",
        opcoes: [
            { texto: "Café", categorias:            { margherita: 3, calabresa: 2, margherita: 1 } },
            { texto: "Chá", categorias:             { quatroQueijos: 3, margherita: 2,  abacaxiComLombo: 1} },
            { texto: "Refrigerante", categorias:    { calabresa: 3, frango: 2, quatroQueijos: 1 } },
            { texto: "Suco", categorias:            { frango: 3, margherita: 2, quatroQueijos: 1 } },
            { texto: "Cerveja", categorias:         { bacon: 3, abacaxiComLombo: 2, portuguesa: 1 } },
            { texto: "Energético", categorias:      { abacaxiComLombo: 3, calabresa: 2, bacon: 1} }
        ]
    },
    {
        texto: "3. Qual é a sua música preferida para ouvir?",
        opcoes: [
            { texto: "Rock / Metal / Indie", categorias:         { frango: 3, bacon: 2, calabresa: 1 } },
            { texto: "Pop / Rap / K-Pop,", categorias:           { calabresa: 3, frango: 2, portuguesa: 1 } },
            { texto: "Eletrônica / House / ", categorias:        { abacaxiComLombo: 3, quatroQueijos: 2, frango: 1 } },
            { texto: "Clássica / Instrumental", categorias:      { margherita: 3, quatroQueijos: 2, abacaxiComLombo: 1 } },
            { texto: "Sertanejo / Country / Folk", categorias:   { bacon: 3, calabresa: 2, portuguesa: 1 }},
            { texto: "Jazz / Blues / Soul", categorias:          { quatroQueijos: 3, frango: 2, margherita: 1 } }
        ]
    },
    {
        texto: "4. Qual tipo de filme você mais gosta?",
        opcoes: [
            { texto: "Comédia", categorias:     { frango: 3, calabresa: 2, abacaxiComLombo: 1, } },
            { texto: "Ação", categorias:        { calabresa: 3, bacon: 2, quatroQueijos: 1 } },
            { texto: "Drama", categorias:       { quatroQueijos: 3, frango: 2, margherita: 1 } },
            { texto: "Terror", categorias:      { bacon: 3, quatroQueijos: 2, bacon: 1 } },
            { texto: "Suspense", categorias:    { portuguesa: 3, bacon: 2, calabresa: 1} },
            { texto: "Fantasia", categorias:    { abacaxiComLombo: 3, portuguesa: 2, frango: 1} }
        ]
    },
    {
        texto: "5. Qual é o seu animal de estimação preferido?",
        opcoes: [
            { texto: "Gato", categorias:        { margherita: 3, frango: 2, bacon: 1 } },
            { texto: "Cachorro", categorias:    { calabresa: 3, bacon: 2, portuguesa: 1 } },
            { texto: "Peixe", categorias:       { abacaxiComLombo: 3, portuguesa: 2, frango: 1  } },
            { texto: "Hamster", categorias:     { frango: 3, margherita: 2, abacaxiComLombo: 1 } },
            { texto: "Coelho", categorias:      { quatroQueijos: 3, abacaxiComLombo: 2, margherita: 1 } },
            { texto: "Pássaro", categorias:     { portuguesa: 3, quatroQueijos: 2, calabresa: 1 }}
        ]
    },
    {
        texto: "6. Como você se comporta na festa?",
        opcoes: [
            { texto: "Sempre sou o primeiro a aparecer", categorias:        { portuguesa: 3, frango: 2, bacon: 1} },
            { texto: "Chego atrasado, mas sempre chego", categoria:         { abacaxiComLombo: 3, quatroQueijos: 2, calabresa: 1} },
            { texto: "Eu é quem organizo a festa", categorias:              { calabresa: 3, abacaxiComLombo: 2, frango: 1 } },
            { texto: "Não chego cedo, mas sou o último a sair", categorias: { quatroQueijos: 3, bacon: 2, abacaxiComLombo: 1} },
            { texto: "Que festa? Ninguém me convidou...", categoria:        { frango: 3, margherita: 2, portuguesa: 1 } },
            { texto: "Dependendo da festa, nem vou", categorias:            { margherita: 3, portuguesa: 2, frango: 1} }

        ]
    },
    {
        texto: "7. Qual é a sua estação do ano favorita?",
        opcoes: [
            { texto: "Verão", categorias:           { abacaxiComLombo: 3, margherita: 2, bacon: 1 } },
            { texto: "Inverno", categorias:         { quatroQueijos: 3, frango: 2, calabresa: 1 } },
            { texto: "Primavera", categorias:       { margherita: 3, portuguesa: 2, quatroQueijos: 1 } },
            { texto: "Outono", categorias:          { calabresa: 3, abacaxiComLombo: 2, frango: 1 } },
            { texto: "Todas", categorias:           { bacon: 3, portuguesa: 2, margherita: 1 } },
            { texto: "Nenhuma", categorias:         { portuguesa: 3, bacon: 2, quatroQueijos: 1 } }
        ]
    }, 
    {
        texto: "8. O que você prefere comer no café da manhã?",
        opcoes: [
        { texto: "Pão com manteiga", categorias:            { frango: 3, margherita: 2, bacon: 1 } },
         { texto: "Frutas e iogurte", categorias:           { abacaxiComLombo: 3, portuguesa: 2, quatroQueijos: 1 } },
         { texto: "Panquecas", categorias:                  { quatroQueijos: 3, calabresa: 2, margherita: 1 } },
         { texto: "Café e bolo", categorias:                { calabresa: 3, bacon: 2, portuguesa: 1 } },
         { texto: "Não costumo tomar café", categorias:     { portuguesa: 3, quatroQueijos: 2, frango: 1 } },
         { texto: "Suco e biscoitos", categorias:           { margherita: 3, calabresa: 2, abacaxiComLombo: 1 } }
        ]
    },
    {
        texto: "9. Qual seria o seu destino de férias ideal?",
        opcoes: [
         { texto: "Praia", categorias:              { abacaxiComLombo: 3, frango: 2, calabresa: 1 } },
         { texto: "Montanhas", categorias:          { portuguesa: 3, margherita: 2, bacon: 1 } },
         { texto: "Cidade histórica", categorias:   { margherita: 3, portuguesa: 2, quatroQueijos: 1 } },
         { texto: "Camping", categorias:            { bacon: 3, abacaxiComLombo: 2, portuguesa: 1 } },
         { texto: "Cidade grande", categorias:      { quatroQueijos: 3, quatroQueijos: 2, abacaxiComLombo: 1 } },
         { texto: "Campo", categorias:              { frango: 3, bacon: 2, margherita: 1 } }
    ]
    },
    {
    texto: "10. Qual desses seria um hobby seu?",
    opcoes: [
        { texto: "Cozinhar", categorias:    { quatroQueijos: 3, calabresa: 2, bacon: 1 } },
        { texto: "Desenhar", categorias:    { calabresa: 3, frango: 2, abacaxiComLombo: 1 } },
        { texto: "Fotografia", categorias:  { bacon: 3, portuguesa: 2, calabresa: 1 } },
        { texto: "Jardinagem", categorias:  { abacaxiComLombo: 3, margherita: 2, portuguesa: 1 } },
        { texto: "Costura", categorias:     { margherita: 3, abacaxiComLombo: 2, quatroQueijos: 1 } },
        { texto: "Escrever", categorias:    { frango: 3, margherita: 2, margherita: 1 } }
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
    abacaxiComLombo: 0,
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
    let resultadoImagem;
    switch (resultadoCategoria) {
        case 'margherita':
            resultadoImagem = "pizza-images/pizza-margherita.jpg";
            resultadoTexto = "<span class='highlight'>Você é uma Pizza Margherita</span>: simples, clássica e elegante: você é uma pessoa bastante direta, que não gosta de complicações nas suas escolhas.";
            break;
        case 'calabresa':
            resultadoImagem = "pizza-images/pizza-de-calabresa.jpg";
            resultadoTexto = "<span class='highlight'>Você é uma Pizza Calabresa</span>: popular, tradicional e intensa. Você é uma pessoa super companheira, não falta em nenhuma reunião de amigos.";
            break;
        case 'quatroQueijos': 
            resultadoImagem = "pizza-images/Pizza-Quatro-Queijos.jpg";
            resultadoTexto = "<span class='highlight'>Você é uma Pizza Quatro Queijos</span>: sofisticada e cheia de sabor. Você é uma pessoa que gosta de experienciar tudo que a vida oferece.";
            break;
        case 'portuguesa':  
            resultadoImagem = "pizza-images/pizza-portuguesa.jpg";
            resultadoTexto = "<span class='highlight'>Você é uma Pizza Portuguesa</span>: versátil e rica em ingredientes. Você é uma pessoa que está sempre pronta. Topa qualquer rolê;";
            break;
        case 'frango':
            resultadoImagem = "pizza-images/pizza-francatupiry.webp";
            resultadoTexto = "<span class='highlight'>Você é uma Pizza de Frango com Catupiry</span>: confortável e acolhedora! Você é uma pessoa carinhosa. É bom ouvinte e todos gostam de ter você por perto.";
            break;
        case 'abacaxiComLombo':
            resultadoImagem = "pizza-images/havaiana.jpg";
            resultadoTexto = "<span class='highlight'>Você é uma Pizza de Abacaxi com Lombo</span></span>: doce e salgado, uma combinação ousada e surpreendente. Você é um amigo que gosta muito de experimentar coisas diferentes.";
            break;
        case 'bacon':
            resultadoImagem = "pizza-images/bacon-pizza.jpg";
            resultadoTexto = "<span class='highlight'>Você é uma Pizza de Bacon</span>: cheia de personalidade e sabor marcante! Você é uma pessoa forte e persistente. Gosta de se manter fiel ao que acredita.";
            break;
        default:
            resultadoTexto = "<span class='highlight'>Não conseguimos determinar o seu sabor de pizza!";
    }

    // Atualiza o conteúdo da seção do quiz para exibir o resultado
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
    <style>
    #quiz-container {
    display: grid;
    justify-items: center; /* Centraliza a imagem e o texto horizontalmente */
    text-align: center; /* Centraliza o texto dentro do contêiner */
    }  
    </style>
    <p>${resultadoTexto}</p>
    <img src="${resultadoImagem}" id="resultado-imagem" alt="Imagem do resultado" style="width: 400px; display: block; margin-top: 10px;">`;
    

    // Adiciona o botão de reinício
    const reiniciarBtn = document.createElement('button');
    reiniciarBtn.textContent = 'Recomeçar';
    reiniciarBtn.onclick = reiniciarTeste;
    reiniciarBtn.style.marginTop = '20px';
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
        abacaxiComLombo: 0,
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