// URL do "backend" simulado
const urlBackend = 'http://localhost:3000/mensagens';

// Função para buscar as mensagens do servidor
function buscarMensagens() {
    fetch(urlBackend)
        .then(response => response.json())
        .then(data => {
            exibirMensagens(data);
        })
        .catch(error => {
            console.error('Erro ao buscar mensagens:', error);
        });
}

// Função para exibir todas as mensagens e respostas no fórum
function exibirMensagens(mensagens) {
    const quadroDeMensagens = document.getElementById("quadroDeMensagens");
    quadroDeMensagens.innerHTML = ''; // Limpa o quadro antes de exibir novas mensagens

    mensagens.forEach(msg => {
        const mensagemContainer = document.createElement("div");
        mensagemContainer.classList.add("mensagem-container");

        // Mensagem principal
        mensagemContainer.innerHTML = `
            <div class="mensagem">
                <p><strong>${msg.usuario}:</strong></p>
                <p>${msg.mensagem}</p>
            </div>
            <button class="responder-btn" onclick="exibirCampoResposta(${msg.id})">Responder</button>
            <div class="resposta" style="display: none;" id="resposta-${msg.id}">
                <textarea class="resposta-input" placeholder="Digite sua resposta aqui..."></textarea>
                <button class="enviar-btn" onclick="enviarResposta(${msg.id})">Enviar</button>
            </div>
        `;

        // Exibir respostas associadas à mensagem
        if (msg.respostas && msg.respostas.length > 0) {
            msg.respostas.forEach(resposta => {
                const respostaDiv = document.createElement("div");
                respostaDiv.classList.add("resposta");
                respostaDiv.innerHTML = `<strong>Resposta:</strong> ${resposta}`;
                mensagemContainer.appendChild(respostaDiv);
            });
        }

        quadroDeMensagens.appendChild(mensagemContainer);
    });
}

// Função para exibir o campo de resposta ao clicar em "Responder"
function exibirCampoResposta(mensagemId) {
    const respostaDiv = document.getElementById(`resposta-${mensagemId}`);
    respostaDiv.style.display = respostaDiv.style.display === "none" ? "block" : "none";
}

// Função para enviar uma nova mensagem ao servidor
document.getElementById("formularioMensagem").addEventListener("submit", function(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const mensagem = document.getElementById("mensagem").value;

    fetch(urlBackend, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usuario, mensagem, respostas: [] }),
    })
        .then(response => response.json())
        .then(() => {
            buscarMensagens(); // Recarrega as mensagens para incluir a nova
        })
        .catch(error => {
            console.error('Erro ao enviar mensagem:', error);
        });

    document.getElementById("formularioMensagem").reset(); // Limpa o formulário
});

// Função para enviar uma resposta para o backend
function enviarResposta(mensagemId) {
    const respostaInput = document.querySelector(`#resposta-${mensagemId} .resposta-input`);
    const resposta = respostaInput.value;

    if (resposta.trim()) {
        // Primeiro, buscamos a mensagem atual no backend
        fetch(`${urlBackend}/${mensagemId}`)
            .then(response => response.json())
            .then(mensagem => {
                // Adicionamos a nova resposta ao array de respostas
                const novasRespostas = [...mensagem.respostas, resposta];

                // Atualizamos a mensagem no backend com as novas respostas
                return fetch(`${urlBackend}/${mensagemId}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ respostas: novasRespostas }),
                });
            })
            .then(() => {
                buscarMensagens(); // Recarrega todas as mensagens
            })
            .catch(error => {
                console.error('Erro ao enviar resposta:', error);
            });

        // Limpa o campo de resposta e o oculta
        respostaInput.value = '';
        document.getElementById(`resposta-${mensagemId}`).style.display = 'none';
    }
}

// Carrega as mensagens quando a página é carregada
buscarMensagens();



