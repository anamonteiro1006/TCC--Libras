const quizData = [
    // Nível 1
    [
        {
            question: "Qual é o sinal para 'Olá' em LIBRAS?",
            options: ["Aceno", "Mão fechada", "Ponto com dedo", "Palmas unidas"],
            answer: "Aceno"
        },
        {
            question: "Como se diz 'Sim' em LIBRAS?",
            options: ["Cabeça balançando", "Mão aberta", "Mão na cabeça", "Apontar"],
            answer: "Cabeça balançando"
        },
        {
            question: "Qual é o sinal para 'Não' em LIBRAS?",
            options: ["Mão fechada", "Mão aberta", "Mão balançando", "Dedo indicador"],
            answer: "Mão balançando"
        },
        {
            question: "Como se diz 'Obrigado' em LIBRAS?",
            options: ["Mão no peito", "Dedo apontando", "Mão para o lado", "Mão na cabeça"],
            answer: "Mão no peito"
        },
        {
            question: "Qual é o sinal para 'Por favor' em LIBRAS?",
            options: ["Mão na boca", "Mão aberta", "Mão na barriga", "Palmas unidas"],
            answer: "Mão na boca"
        }
    ],
    // Nível 2
    [
        {
            question: "Qual é o sinal para 'Casa' em LIBRAS?",
            options: ["Mão fechada em forma de telhado", "Mão aberta em forma de caixa", "Mão formando um quadrado", "Mão na cabeça"],
            answer: "Mão fechada em forma de telhado"
        },
        {
            question: "Como se diz 'Amigo' em LIBRAS?",
            options: ["Dois dedos cruzados", "Mão em punho", "Dois braços abertos", "Mãos se encontrando"],
            answer: "Mãos se encontrando"
        },
        {
            question: "Qual é o sinal para 'Comida' em LIBRAS?",
            options: ["Mão na boca", "Mão em movimento de colher", "Mão fechada", "Mão em círculo"],
            answer: "Mão em movimento de colher"
        },
        {
            question: "Como se diz 'Água' em LIBRAS?",
            options: ["Mão aberta em movimento", "Mão fazendo onda", "Mão fechada", "Mão apontando para baixo"],
            answer: "Mão aberta em movimento"
        },
        {
            question: "Qual é o sinal para 'Carro' em LIBRAS?",
            options: ["Mão em punho", "Mão fazendo movimento de dirigir", "Mão com dedo indicador", "Mão em forma de volante"],
            answer: "Mão fazendo movimento de dirigir"
        }
    ],
    // Nível 3
    [
        {
            question: "Como se diz 'Trabalho' em LIBRAS?",
            options: ["Mãos em movimento de martelo", "Mão no queixo", "Mão formando um 'T'", "Mão em punho"],
            answer: "Mãos em movimento de martelo"
        },
        {
            question: "Qual é o sinal para 'Feliz' em LIBRAS?",
            options: ["Mão no rosto", "Mão em movimento circular", "Mão levantando", "Mão fazendo sorriso"],
            answer: "Mão em movimento circular"
        },
        {
            question: "Como se diz 'Escola' em LIBRAS?",
            options: ["Mão fazendo livro", "Mão em forma de telhado", "Mão fazendo movimento de escrever", "Mão em círculo"],
            answer: "Mão fazendo movimento de escrever"
        },
        {
            question: "Qual é o sinal para 'Triste' em LIBRAS?",
            options: ["Mão em direção ao rosto", "Mão caída", "Mão em forma de coração", "Mão apertando"],
            answer: "Mão caída"
        },
        {
            question: "Como se diz 'Cidade' em LIBRAS?",
            options: ["Mãos fazendo movimento de andar", "Mãos em forma de prédio", "Mão em movimento circular", "Mão apontando para o céu"],
            answer: "Mãos em forma de prédio"
        }
    ],
    // Nível 4
    [
        {
            question: "Como se diz 'Saudade' em LIBRAS?",
            options: ["Mão no coração", "Mão aberta", "Mão em forma de 'S'", "Mão fazendo movimento para trás"],
            answer: "Mão no coração"
        },
        {
            question: "Qual é o sinal para 'Esperança' em LIBRAS?",
            options: ["Mão levantando para o céu", "Mão fazendo gesto de agarrar", "Mão em movimento circular", "Mão fazendo movimento de empurrar"],
            answer: "Mão levantando para o céu"
        },
        {
            question: "Como se diz 'Sonho' em LIBRAS?",
            options: ["Mão sobre os olhos", "Mão em movimento de deslizar", "Mão aberta em movimento", "Mão fazendo movimento de dormir"],
            answer: "Mão fazendo movimento de dormir"
        },
        {
            question: "Qual é o sinal para 'Liberdade' em LIBRAS?",
            options: ["Mão voando", "Mão levantada", "Mão abrindo", "Mão em forma de pássaro"],
            answer: "Mão abrindo"
        },
        {
            question: "Como se diz 'Desafios' em LIBRAS?",
            options: ["Mão em movimento de luta", "Mão fazendo movimento de escalar", "Mão em forma de 'D'", "Mão apontando para frente"],
            answer: "Mão fazendo movimento de escalar"
        }
    ]
];

let currentQuestionIndex = 0;
let score = 0;
let level = 0;

function loadQuestion() {
    const currentQuestion = quizData[level][currentQuestionIndex];
    const quizContainer = document.getElementById("quiz");
    
    quizContainer.innerHTML = `
        <div class="question">${currentQuestion.question}</div>
        <ul class="options">
            ${currentQuestion.options.map(option => `<li><button onclick="selectOption('${option}')">${option}</button></li>`).join('')}
        </ul>
    `;
    updateLevelDisplay();
}

function selectOption(option) {
    const currentQuestion = quizData[level][currentQuestionIndex];
    if (option === currentQuestion.answer) {
        score++;
    }
    
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData[level].length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const quizContainer = document.getElementById("quiz");
    let message;

    if (level === quizData.length - 1) {
        message = `Fim do quiz. Parabéns! Continue se esforçando!`;
    } else if (score === quizData[level].length) {
        message = "Parabéns! Você acertou todas as perguntas!";
        document.getElementById("nextButton").classList.remove("hidden");
    } else if (score >= 7) {
        message = `Você acertou ${score} de ${quizData[level].length} perguntas.`;
        document.getElementById("nextButton").classList.remove("hidden");
    } else {
        message = `Você acertou ${score} de ${quizData[level].length} perguntas. Tente novamente!`;
        document.getElementById("restartButton").classList.remove("hidden");
    }

    quizContainer.innerHTML = `<h2>${message}</h2>`;
}

function updateLevelDisplay() {
    const levelDisplay = document.getElementById("levelDisplay");
    levelDisplay.innerText = `Nível: ${level + 1}`; // Exibir o nível atual
}

document.getElementById("nextButton").onclick = () => {
    if (level < quizData.length - 1) {
        level++;
        currentQuestionIndex = 0;
        score = 0;
        loadQuestion();
    }
    document.getElementById("nextButton").classList.add("hidden");
    document.getElementById("restartButton").classList.add("hidden");
};

document.getElementById("restartButton").onclick = () => {
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
    document.getElementById("nextButton").classList.add("hidden");
    document.getElementById("restartButton").classList.add("hidden");
};

// Carregar a primeira pergunta
loadQuestion();

