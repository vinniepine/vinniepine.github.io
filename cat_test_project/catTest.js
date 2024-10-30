// catTest.js

const perguntas = [
    {
        texto: "1. Primeiro, escolha um brinquedo com o qual brincar:",
        opcoes: [
            { imagem: 'cat-images/1st-toy.webp', categorias: { siamese: 1, branco: 1 } },
            { imagem: 'cat-images/2nd-toy.webp', categorias: { preto: 1, rajado: 1 } },
            { imagem: 'cat-images/3rd-toy.webp', categorias: { branco: 1, amarelo: 1 } },
            { imagem: 'cat-images/4th-toy.webp', categorias: { amarelo: 1, siamese: 1 } },
            { imagem: 'cat-images/5th-toy.webp', categorias: { cinza: 1, preto: 1 } },
            { imagem: 'cat-images/6th-toy.webp', categorias: { rajado: 1, calico: 1 } }
        ]
    },
    {
        texto: "2. Qual palavra associada a gato te chama mais a atenção?",
        opcoes: [
            { texto: "Caos", categorias: { preto: 1 } },
            { texto: "Miau", categorias: { calico: 1, amarelo: 1 } },
            { texto: "Felino", categorias: { cinza: 1 } },
            { texto: "Liteira", categorias: { rajado: 1 } },
            { texto: "Atum", categorias: { siamese: 1 } },
            { texto: "Patinha", categorias: { branco: 1 } }
        ]
    }, 
    {
        texto: "3. Qual seria o seu lugar favorito de tirar uma soneca?",
        opcoes: [
            { imagem: 'cat-images/spot1.webp', categorias: { cinza: 1 } },
            { imagem: 'cat-images/spot2.webp', categorias: { rajado: 1 } },
            { imagem: 'cat-images/spot3.webp', categorias: { preto: 1  } },
            { imagem: 'cat-images/spot4.webp', categorias: { amarelo: 1, calico: 1 } },
            { imagem: 'cat-images/spot5.webp', categorias: { siamese: 1 }},
            { imagem: 'cat-images/spot6.webp', categorias: { branco: 1 } }
        ]
    },
    {
        texto: "4. Escolha um sonho para se ter enquanto tira uma soneca",
        opcoes: [
            { texto: "Caçar um rato", categorias: { rajado: 1 } },
            { texto: "Comer várias guloseimas", categorias: { amarelo: 1 } },
            { texto: "Brincar com seu brinquedo favorito", categorias: { cinza: 1, calico: 1 } },
            { texto: "Passar horas sendo mimado por humanos", categorias: { siamese: 1 } },
            { texto: "Assassinato a sangue frio", categorias: { preto: 1 } },
            { texto: "Tirar uma soneca dentro da soneca, como em 'A Origem'", categorias: { branco: 1 } }
        ]
    },
    {
        texto: "5. Escolha uma cor",
        opcoes: [
            { imagem: 'cat-images/purple.png', categorias: { preto: 1 } },
            { imagem: 'cat-images/light-blue.png', categorias: { cinza: 1 } },
            { imagem: 'cat-images/green.png', categorias: { rajado: 1 } },
            { imagem: 'cat-images/yellow.png', categorias: { siamese: 1 } },
            { imagem: 'cat-images/red.png', categorias: { calico: 1 } },
            { imagem: 'cat-images/orange.png', categorias: { amarelo: 1 } },
            { imagem: 'cat-images/light-pink.png', categorias: {branco: 3} }
        ]
    },
    {
        texto: "6. Escolha um item para derrubar da mesa",
        opcoes: [
            { texto: "Uma caneta", categorias: { rajado: 1 } },
            { texto: "Um copo vazio", categoria: { amarelo: 1 } },
            { texto: "Um monte de pastas", categorias: { calico: 1 } },
            { texto: "um rolo de linha", categorias: { branco: 1 } },
            { texto: "Uma bolinha", categoria: { siamese: 1 } },
            { texto: "Uma vela acesa", categorias: { preto: 1 } },
            { texto: "Uma xícara quase cheia", categorias: {cinza: 1 } }

        ]
    }
];

let indicePerguntaAtual = 0;
let pontuacao = {
    preto: 0,
    branco: 0,
    rajado: 0,
    calico: 0,
    cinza: 0,
    amarelo: 0,
    siamese: 0
};

function mostrarPergunta() {
    const perguntaAtual = perguntas[indicePerguntaAtual];
    document.getElementById('question-text').textContent = perguntaAtual.texto;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = ''; // Limpa as opções anteriores

    const nextButton = document.getElementById('next-button');
    nextButton.style.display = 'none'; // Oculta o botão "Próxima"

    perguntaAtual.opcoes.forEach((opcao, index) => {
        const label = document.createElement('label');
        label.className = 'option-label'; // Classe para estilização no CSS
        label.style.margin = '10px';

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'resposta';
        input.value = index;

        if (opcao.imagem) {
            input.classList.add('hidden-radio'); // Adiciona a classe para ocultar
            const img = document.createElement('img');
            img.src = opcao.imagem;
            img.alt = "Opção de resposta";
            img.style.cursor = 'pointer';

            img.onclick = () => {
                input.checked = true;
                registrarResposta(index);
            };

            label.appendChild(input);
            label.appendChild(img);
            optionsContainer.appendChild(label);
        } else if (opcao.texto) {
            const textoSpan = document.createElement('span');
            textoSpan.textContent = opcao.texto;
            textoSpan.className = 'option-text'; // Classe para alinhamento do texto

            label.appendChild(input);
            label.appendChild(textoSpan);

            label.addEventListener('click', () => {
                input.checked = true;
                nextButton.style.display = 'inline-block';
            });

            optionsContainer.appendChild(label);
        }
    });
}

function registrarResposta(indexOpcao) {
    const categorias = perguntas[indicePerguntaAtual].opcoes[indexOpcao].categorias;
    for (let categoria in categorias) {
        pontuacao[categoria] += categorias[categoria];
    }

    indicePerguntaAtual++;
    if (indicePerguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

function proximaPergunta() {
    const respostaSelecionada = document.querySelector('input[name="resposta"]:checked');
    if (!respostaSelecionada) {
        alert('Por favor, selecione uma opção!');
        return;
    }

    const indexOpcao = parseInt(respostaSelecionada.value);
    registrarResposta(indexOpcao);
}

function mostrarResultado() {
    let maiorPontuacao = 0;
    let resultadoTexto;
    let resultadoImagem;
    let resultadoCategoria = '';

    for (let categoria in pontuacao) {
        if (pontuacao[categoria] > maiorPontuacao) {
            maiorPontuacao = pontuacao[categoria];
            resultadoCategoria = categoria;
        }
    }


    switch (resultadoCategoria) {
        case 'preto':
            resultadoImagem = "cat-images/black-cat.jpg";
            resultadoTexto = "<span class='highlight'>Você é um gato preto!</span>: misterioso, protetor e leal. Gatos pretos são frequentemente associados ao misticismo e à sabedoria. Eles têm uma personalidade intrigante e podem parecer reservados, mas, na realidade, são muito leais e protetores com aqueles que amam. Uma vez que se sentem seguros, mostram-se carinhosos e brincalhões.";
            break;
        case 'branco':
            resultadoImagem = "cat-images/white-cat.webp";
            resultadoTexto = "<span class='highlight'>Você é gato branco!</span>: sensível, afetuoso e independente. Gatos brancos são frequentemente considerados elegantes e sensíveis. Eles podem ser um pouco independentes e preferem explorar seu território, mas, ao mesmo tempo, mostram muito carinho quando se sentem à vontade. São companheiros tranquilos e discretos, que têm um jeito delicado e afetuoso.";
            break;
        case 'rajado': 
            resultadoImagem = "cat-images/tabby-cat.jpeg";
            resultadoTexto = "<span class='highlight'>Você é um gato rajado!</span>: Os gatos tigrados são aventureiros e estão sempre prontos para explorar. Sua natureza curiosa os torna ágeis e atentos ao ambiente ao redor, sempre prontos para brincar e investigar. Apesar de sua energia, são gatos carinhosos e adoram interagir com os donos.";
            break;
        case 'calico':  
            resultadoImagem = "cat-images/calico-cat.jpg";
            resultadoTexto = "<span class='highlight'>Você é um gato calico!</span>: Gatos tricolores são conhecidos por sua personalidade forte e independente. Eles gostam de fazer as coisas do seu jeito, mas também são muito carinhosos e protetores. Têm uma confiança inata e podem ser um pouco teimosos, mas sempre mostram carinho por aqueles com quem convivem.";
            break;
        case 'cinza':
            resultadoImagem = "cat-images/grey-cat.jpeg";
            resultadoTexto = "<span class='highlight'>Você é um gato cinza!</span>: Gatos cinzas, como o Azul Russo, são muitas vezes calmos e reservados, mas extremamente inteligentes. Eles tendem a ser cautelosos com desconhecidos, mas são muito leais aos seus donos e apreciam uma rotina tranquila. Essa natureza pacífica e sua lealdade tornam-os ótimos companheiros.";
            break;
        case 'amarelo':
            resultadoImagem = "cat-images/orange-cat.jpeg";
            resultadoTexto = "<span class='highlight'>Você é um gato amarelo!</span></span>: Gatos laranja são conhecidos por serem extremamente amigáveis e extrovertidos. Geralmente têm uma natureza descontraída e adoram atenção, sendo muito carinhosos com seus donos. Com um toque de humor, eles sempre conseguem arrancar risadas com suas travessuras.";
            break;
        case 'siamese':
            resultadoImagem = "cat-images/siamese-cat.jpeg";
            resultadoTexto = "<span class='highlight'>Você é um gato siamese</span>: Gatos siameses são altamente expressivos e adoram 'conversar' com seus donos. São extremamente leais e se apegam muito aos membros da família, demonstrando carinho de forma intensa. Podem ser exigentes em relação à atenção e gostam de estar sempre perto de quem amam.";
            break;
        default:
            resultadoTexto = "<span class='highlight'>Não conseguimos determinar o seu sabor de pizza!";
    }

    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <p>${resultadoTexto}</p>
        <img src="${resultadoImagem}" id="resultado-imagem" alt="Imagem do resultado">
    `;

    const reiniciarBtn = document.createElement('button');
    reiniciarBtn.textContent = 'Recomeçar';
    reiniciarBtn.onclick = reiniciarTeste;
    reiniciarBtn.style.marginTop = '20px';
    quizContainer.appendChild(reiniciarBtn);
}

function reiniciarTeste() {
    indicePerguntaAtual = 0;
    pontuacao = {
        preto: 0,
        branco: 0,
        rajado: 0,
        calico: 0,
        cinza: 0,
        amarelo: 0,
        siamese: 0
    };

    document.getElementById('quiz-container').innerHTML = `
        <h2>Que tipo de gato é você?</h2>
        <div class="question" id="question-text"></div>
        <div id="options-container"></div>
        <button id="next-button" onclick="proximaPergunta()">Próxima</button>
    `;

    mostrarPergunta();
}

// Inicializa o quiz exibindo a primeira pergunta
mostrarPergunta();
