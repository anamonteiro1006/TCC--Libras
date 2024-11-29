// nome aparece no ola

function exibirSaudacao() {
  // Obtém os parâmetros da URL
  const urlParams = new URLSearchParams(window.location.search);
  // Obtém o valor do parâmetro 'nome'
  const nome = urlParams.get('nome');
  // Exibe a saudação com o nome
  document.getElementById('saudacao').textContent = `Olá, ${nome}!`;
}
window.onload = exibirSaudacao;

//  nome aparece no ola 

// //login 
// function fazerLogin(){
//     const email = document.getElementById("email").value;
//     const senha = document.getElementById("senha").value;


//     fetch('http://localhost:3000/pessoas/')
//     .then(response => response.json())
//     .then(data =>{
      
//         //Função callback. Parâmetro find para procurar.
//         const pessoa = data.find(p => p.
//             email === email && p.senha == senha);

//             if(pessoa){
//                 window.location.href = "index.html";
//             }else{
//                 alert("Cadastro não encontrado!");
//             }
//     })
// }
// //


// //cadastro

// //Função que envia Cadastro  ao servidor
// function enviarCadastro(){
//     const nome = document.getElementById("nome").value;
//     const idade = document.getElementById("idade").value;
//     const email = document.getElementById("email").value;
//     const senha = document.getElementById("senha").value;
//     const confsenha = document.getElementById("confsenha").value;


//     //confere se as senhas são iguais
//     if(senha==confsenha){

//         //Para envio dos dados para o servidor, utilizamos o método fetch
//         fetch('http://localhost:3000/pessoas',{
//             method: 'POST' ,

//             headers:{
//                 'Content-Type':
//                 'application/json'
//             },
//             body: JSON.stringify({
//                 nome: nome, idade: idade, email: email, senha: senha, 
//             })
//         })
//         .then(response => response.json())

//         //pós o cadastro, volta para a tela de login
//         window.location.href = "home.html";

//     }else{
//         alert("As senhas inseridas não são iguais");
//     }
 
// }

///

//loginADM
function fazerLoginADM(){
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;


  fetch('http://localhost:3000/admin/')
  .then(response => response.json())
  .then(data =>{
      
      //Função callback. Parâmetro find para procurar.
      const pessoa = data.find(p => p.
          email === email && p.senha == senha);

          if(pessoa){
              window.location.href = "admin.html";
          }else{
              alert("Cadastro não encontrado!");
          }
  })
}
//

// criar
  function postar_criar() {
      var nome_digitado = document.getElementById("nome").value;
      var url_digitada = document.getElementById("imagem").value;

      fetch("http://localhost:3000/funcionarios", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              nome: nome_digitado,
              foto: url_digitada, // Corrigi o campo para corresponder ao JSON original
              area: "desconhecida" // Adicione um valor padrão ou modifique conforme necessário
          }),
      }).then(response => response.json())
        .then(data => console.log("Funcionario criado:", data))
        .catch(error => console.error("Erro ao criar funcionario:", error));
  }


  // read 
  
  function ler_funcionarios() {
      fetch("http://localhost:3000/funcionarios")
          .then(response => response.json())
          .then(data => {
              const container = document.getElementById("funcionarios-list");
              container.innerHTML = ""; // Limpar lista atual

              data.forEach(funcionario => {
                  const div = document.createElement("div");
                  div.innerHTML = `
                      <img src="${funcionario.foto}" style="width: 200px; height: 200px;">
                      <p>${funcionario.nome}</p>
                  `;
                  container.appendChild(div);
              });
          })
          .catch(error => console.error("Erro ao ler funcionarios:", error));
  }

  // Chamar a função para carregar funcionários na inicialização da página
  document.addEventListener("DOMContentLoaded", ler_funcionarios);

  //update

  function atualizar_funcionario() {
      var id = document.getElementById("id-atualizar").value;
      var nome_digitado = document.getElementById("nome-atualizar").value;
      var url_digitada = document.getElementById("imagem-atualizar").value;

      fetch(`http://localhost:3000/funcionarios/${id}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              nome: nome_digitado,
              foto: url_digitada,
              area: "desconhecida" // Adicione um valor padrão ou modifique conforme necessário
          }),
      }).then(response => response.json())
        .then(data => console.log("Funcionario atualizado:", data))
        .catch(error => console.error("Erro ao atualizar funcionario:", error));
  }

//delete
  function deletar_funcionario() {
      var id = document.getElementById("id-deletar").value;

      fetch(`http://localhost:3000/funcionarios/${id}`, {
          method: "DELETE",
      }).then(response => response.json())
        .then(data => console.log("Funcionario deletado:", data))
        .catch(error => console.error("Erro ao deletar funcionario:", error));
  }

  // identificacao

  fetch('contas.json').then(resposta => resposta.json()).then(corpo => {
      console.log(corpo);
    
      // Acessa o funcionário
      const func1 = corpo.funcionarios[0];
      document.getElementById('imagem').innerHTML = func1.image;
      document.getElementById('nome').innerHTML = func1.nome;
      document.getElementById('cargo').innerHTML = func1.cargo;
    
      // Adiciona evento de clique na imagem do funcionário
      document.querySelector('#imagem img').onclick = function() {
        const videoUrl = this.getAttribute('data-video');
        document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
      };
    
      // 
      const func2 = corpo.funcionarios[1];
      document.getElementById('imagem2').innerHTML = func2.image;
      document.getElementById('nome2').innerHTML = func2.nome;
      document.getElementById('cargo2').innerHTML = func2.cargo;
    
      // 
      document.querySelector('#imagem2 img').onclick = function() {
        const videoUrl = this.getAttribute('data-video');
        document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
      };

      // 
      const func3 = corpo.funcionarios[2];
      document.getElementById('imagem3').innerHTML = func3.image;
      document.getElementById('nome3').innerHTML = func3.nome;
      document.getElementById('cargo3').innerHTML = func3.cargo;
    
      // 
      document.querySelector('#imagem3 img').onclick = function() {
        const videoUrl = this.getAttribute('data-video');
        document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
      };
      // 
      const func4 = corpo.funcionarios[3];
      document.getElementById('imagem4').innerHTML = func4.image;
      document.getElementById('nome4').innerHTML = func4.nome;
      document.getElementById('cargo4').innerHTML = func4.cargo;
    
      // 
      document.querySelector('#imagem4 img').onclick = function() {
        const videoUrl = this.getAttribute('data-video');
        document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
      };
      // 
      const func5 = corpo.funcionarios[4];
      document.getElementById('imagem5').innerHTML = func5.image;
      document.getElementById('nome5').innerHTML = func5.nome;
      document.getElementById('cargo5').innerHTML = func5.cargo;
    
      // 
      document.querySelector('#imagem5 img').onclick = function() {
        const videoUrl = this.getAttribute('data-video');
        document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
      };

      
const func6 = corpo.funcionarios[5];
document.getElementById('imagem6').innerHTML = func6.image;
document.getElementById('nome6').innerHTML = func6.nome;
document.getElementById('cargo6').innerHTML = func6.cargo;


document.querySelector('#imagem6 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};


 
const func7 = corpo.funcionarios[6];
document.getElementById('imagem7').innerHTML = func7.image;
document.getElementById('nome7').innerHTML = func7.nome;
document.getElementById('cargo7').innerHTML = func7.cargo;


document.querySelector('#imagem7 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};


const func8 = corpo.funcionarios[7];
document.getElementById('imagem8').innerHTML = func8.image;
document.getElementById('nome8').innerHTML = func8.nome;
document.getElementById('cargo8').innerHTML = func8.cargo;


document.querySelector('#imagem8 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};
const func9 = corpo.funcionarios[8];
document.getElementById('imagem9').innerHTML = func9.image;
document.getElementById('nome9').innerHTML = func9.nome;
document.getElementById('cargo').innerHTML = func9.cargo;


document.querySelector('#imagem9 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};

const func10 = corpo.funcionarios[9];
document.getElementById('imagem10').innerHTML = func10.image;
document.getElementById('nome10').innerHTML = func10.nome;
document.getElementById('cargo10').innerHTML = func10.cargo;


document.querySelector('#imagem10 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};


const func11 = corpo.funcionarios[10];
document.getElementById('imagem11').innerHTML = func11.image;
document.getElementById('nome11').innerHTML = func11.nome;
document.getElementById('cargo11').innerHTML = func11.cargo;


document.querySelector('#imagem11 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};


const func12 = corpo.funcionarios[11];
document.getElementById('imagem12').innerHTML = func12.image;
document.getElementById('nome12').innerHTML = func12.nome;
document.getElementById('cargo12').innerHTML = func12.cargo;


document.querySelector('#imagem12 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};


const func13 = corpo.funcionarios[12];
document.getElementById('imagem13').innerHTML = func13.image;
document.getElementById('nome13').innerHTML = func13.nome;
document.getElementById('cargo13').innerHTML = func13.cargo;


document.querySelector('#imagem13 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};


const func14 = corpo.funcionarios[13];
document.getElementById('imagem14').innerHTML = func14.image;
document.getElementById('nome14').innerHTML = func14.nome;
document.getElementById('cargo14').innerHTML = func14.cargo;


document.querySelector('#imagem14 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};




const func15 = corpo.funcionarios[14];
document.getElementById('imagem15').innerHTML = func15.image;
document.getElementById('nome15').innerHTML = func15.nome;
document.getElementById('cargo15').innerHTML = func15.cargo;


document.querySelector('#imagem15 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};


const func16 = corpo.funcionarios[15];
document.getElementById('imagem16').innerHTML = func16.image;
document.getElementById('nome16').innerHTML = func16.nome;
document.getElementById('cargo16').innerHTML = func16.cargo;


document.querySelector('#imagem16 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};


const func17 = corpo.funcionarios[16];
document.getElementById('imagem17').innerHTML = func17.image;
document.getElementById('nome17').innerHTML = func17.nome;
document.getElementById('cargo17').innerHTML = func17.cargo;


document.querySelector('#imagem17 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};






const func18 = corpo.funcionarios[17];
document.getElementById('imagem18').innerHTML = func18.image;
document.getElementById('nome18').innerHTML = func18.nome;
document.getElementById('cargo18').innerHTML = func18.cargo;


document.querySelector('#imagem18 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};



const func19 = corpo.funcionarios[18];
document.getElementById('imagem19').innerHTML = func19.image;
document.getElementById('nome19').innerHTML = func19.nome;
document.getElementById('cargo19').innerHTML = func19.cargo;        
document.querySelector('#imagem19 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};


const func20 = corpo.funcionarios[19];
document.getElementById('imagem20').innerHTML = func20.image;
document.getElementById('nome20').innerHTML = func20.nome;
document.getElementById('cargo20').innerHTML = func20.cargo;


document.querySelector('#imagem20 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};




const func21 = corpo.funcionarios[20];
document.getElementById('imagem21').innerHTML = func21.image;
document.getElementById('nome21').innerHTML = func21.nome;
document.getElementById('cargo21').innerHTML = func21.cargo;


document.querySelector('#imagem21 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};



const func22 = corpo.funcionarios[21];
document.getElementById('imagem22').innerHTML = func22.image;
document.getElementById('nome22').innerHTML = func22.nome;
document.getElementById('cargo22').innerHTML = func22.cargo;


document.querySelector('#imagem22 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};

const func23 = corpo.funcionarios[22];
document.getElementById('imagem23').innerHTML = func23.image;
document.getElementById('nome23').innerHTML = func23.nome;
document.getElementById('cargo23').innerHTML = func23.cargo;


document.querySelector('#imagem23 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};




const func24 = corpo.funcionarios[23];
document.getElementById('imagem24').innerHTML = func24.image;
document.getElementById('nome24').innerHTML = func24.nome;
document.getElementById('cargo24').innerHTML = func24.cargo;


document.querySelector('#imagem24 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};


const func25 = corpo.funcionarios[24];
document.getElementById('imagem25').innerHTML = func25.image;
document.getElementById('nome25').innerHTML = func25.nome;
document.getElementById('cargo25').innerHTML = func25.cargo;


document.querySelector('#imagem25 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};


const func26 = corpo.funcionarios[25];
document.getElementById('imagem26').innerHTML = func26.image;
document.getElementById('nome26').innerHTML = func26.nome;
document.getElementById('cargo26').innerHTML = func26.cargo;


document.querySelector('#imagem26 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};




const func27 = corpo.funcionarios[26];
document.getElementById('imagem27').innerHTML = func27.image;
document.getElementById('nome27').innerHTML = func27.nome;
document.getElementById('cargo27').innerHTML = func27.cargo;


document.querySelector('#imagem27 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};


const func28 = corpo.funcionarios[27];
document.getElementById('imagem28').innerHTML = func28.image;
document.getElementById('nome28').innerHTML = func28.nome;
document.getElementById('cargo28').innerHTML = func28.cargo;


document.querySelector('#imagem28 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};


const func29 = corpo.funcionarios[28];
document.getElementById('imagem29').innerHTML = func29.image;
document.getElementById('nome29').innerHTML = func29.nome;
document.getElementById('cargo29').innerHTML = func29.cargo;


document.querySelector('#imagem29 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};

const func30 = corpo.funcionarios[29];
document.getElementById('imagem30').innerHTML = func30.image;
document.getElementById('nome30').innerHTML = func30.nome;
document.getElementById('cargo30').innerHTML = func30.cargo;


document.querySelector('#imagem30 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};



const func31 = corpo.funcionarios[30];
document.getElementById('imagem31').innerHTML = func31.image;
document.getElementById('nome31').innerHTML = func31.nome;
document.getElementById('cargo31').innerHTML = func31.cargo;


document.querySelector('#imagem31 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};



const func32 = corpo.funcionarios[31];
document.getElementById('imagem32').innerHTML = func32.image;
document.getElementById('nome32').innerHTML = func32.nome;
document.getElementById('cargo32').innerHTML = func32.cargo;


document.querySelector('#imagem32 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};


const func33 = corpo.funcionarios[32];
document.getElementById('imagem33').innerHTML = func33.image;
document.getElementById('nome33').innerHTML = func33.nome;
document.getElementById('cargo33').innerHTML = func33.cargo;


document.querySelector('#imagem33 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};



const func34 = corpo.funcionarios[33];
document.getElementById('imagem34').innerHTML = func34.image;
document.getElementById('nome34').innerHTML = func34.nome;
document.getElementById('cargo34').innerHTML = func34.cargo;


document.querySelector('#imagem34 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};


const func35 = corpo.funcionarios[34];
document.getElementById('imagem35').innerHTML = func35.image;
document.getElementById('nome35').innerHTML = func35.nome;
document.getElementById('cargo35').innerHTML = func35.cargo;


document.querySelector('#imagem35 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};




const func36 = corpo.funcionarios[35];
document.getElementById('imagem36').innerHTML = func36.image;
document.getElementById('nome36').innerHTML = func36.nome;
document.getElementById('cargo36').innerHTML = func36.cargo;


document.querySelector('#imagem36 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;  };


const func37 = corpo.funcionarios[36];
document.getElementById('imagem37').innerHTML = func37.image;
document.getElementById('nome37').innerHTML = func37.nome;
document.getElementById('cargo37').innerHTML = func37.cargo;


document.querySelector('#imagem37 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};


const func38 = corpo.funcionarios[37];
document.getElementById('imagem38').innerHTML = func38.image;
document.getElementById('nome38').innerHTML = func38.nome;
document.getElementById('cargo38').innerHTML = func38.cargo;


document.querySelector('#imagem38 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};





const func39 = corpo.funcionarios[38];
document.getElementById('imagem39').innerHTML = func39.image;
document.getElementById('nome39').innerHTML = func39.nome;
document.getElementById('cargo39').innerHTML = func39.cargo;


document.querySelector('#imagem39 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};




const func40 = corpo.funcionarios[39];
document.getElementById('imagem40').innerHTML = func40.image;
document.getElementById('nome40').innerHTML = func40.nome;
document.getElementById('cargo40').innerHTML = func40.cargo;

document.querySelector('#imagem40 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};



const func41 = corpo.funcionarios[40];
document.getElementById('imagem41').innerHTML = func41.image;
document.getElementById('nome41').innerHTML = func41.nome;
document.getElementById('cargo41').innerHTML = func41.cargo;


document.querySelector('#imagem41 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};



const func42 = corpo.funcionarios[41];
document.getElementById('imagem42').innerHTML = func42.image;
document.getElementById('nome42').innerHTML = func42.nome;
document.getElementById('cargo42').innerHTML = func42.cargo;


document.querySelector('#imagem42 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};



const func43 = corpo.funcionarios[42];
document.getElementById('imagem43').innerHTML = func43.image;
document.getElementById('nome43').innerHTML = func43.nome;
document.getElementById('cargo43').innerHTML = func43.cargo;


document.querySelector('#imagem43 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`; };

const func44 = corpo.funcionarios[43];
document.getElementById('imagem44').innerHTML = func44.image;
document.getElementById('nome44').innerHTML = func44.nome;
document.getElementById('cargo44').innerHTML = func44.cargo;


document.querySelector('#imagem44 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};


const func45 = corpo.funcionarios[44];
document.getElementById('imagem45').innerHTML = func45.image;
document.getElementById('nome45').innerHTML = func45.nome;
document.getElementById('cargo45').innerHTML = func45.cargo;


document.querySelector('#imagem45 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};

const func46 = corpo.funcionarios[45];
document.getElementById('imagem46').innerHTML = func46.image;
document.getElementById('nome46').innerHTML = func46.nome;
document.getElementById('cargo46').innerHTML = func46.cargo;


document.querySelector('#imagem46 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};


const func47 = corpo.funcionarios[46];
document.getElementById('imagem47').innerHTML = func47.image;
document.getElementById('nome47').innerHTML = func47.nome;
document.getElementById('cargo47').innerHTML = func47.cargo;


document.querySelector('#imagem47 img').onclick = function() {
const videoUrl = this.getAttribute('data-video'); document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};


const func48 = corpo.funcionarios[47];
document.getElementById('imagem48').innerHTML = func48.image;
document.getElementById('nome48').innerHTML = func48.nome;
document.getElementById('cargo48').innerHTML = func48.cargo;


document.querySelector('#imagem48 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};

const func49 = corpo.funcionarios[48]; 
document.getElementById('imagem49').innerHTML = func49.image;
document.getElementById('nome49').innerHTML = func49.nome;
document.getElementById('cargo49').innerHTML = func49.cargo;


document.querySelector('#imagem49 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};

const func50 = corpo.funcionarios[49];
document.getElementById('imagem50').innerHTML = func50.image;
document.getElementById('nome50').innerHTML = func50.nome;
document.getElementById('cargo50').innerHTML = func50.cargo;


document.querySelector('#imagem50 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};



const func51 = corpo.funcionarios[50];
document.getElementById('imagem51').innerHTML = func51.image;
document.getElementById('nome51').innerHTML = func51.nome;
document.getElementById('cargo51').innerHTML = func51.cargo;


document.querySelector('#imagem51 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};


const func52 = corpo.funcionarios[51];
document.getElementById('imagem52').innerHTML = func52.image;
document.getElementById('nome52').innerHTML = func52.nome;
document.getElementById('cargo52').innerHTML = func52.cargo;


document.querySelector('#imagem52 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};


const func53 = corpo.funcionarios[52];
document.getElementById('imagem53').innerHTML = func53.image;
document.getElementById('nome53').innerHTML = func53.nome;
document.getElementById('cargo53').innerHTML = func53.cargo;


document.querySelector('#imagem53 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};



const func54 = corpo.funcionarios[53];
document.getElementById('imagem54').innerHTML = func54.image;
document.getElementById('nome54').innerHTML = func54.nome;
document.getElementById('cargo54').innerHTML = func54.cargo;


document.querySelector('#imagem54 img').onclick = function() {
const videoUrl = this.getAttribute('data-video');
document.getElementById('video').innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
};

    });
    
  

const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads')); // Servir a pasta de uploads como estática

// Configuração do multer para upload de arquivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = 'uploads/';
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath);
        }
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + '-' + file.originalname;
        cb(null, uniqueName);
    }
});
const upload = multer({ storage });

// Banco de dados simulado
const mensagensDBPath = './mensagens.json';

function carregarMensagens() {
    if (fs.existsSync(mensagensDBPath)) {
        return JSON.parse(fs.readFileSync(mensagensDBPath, 'utf8'));
    }
    return [];
}

function salvarMensagens(mensagens) {
    fs.writeFileSync(mensagensDBPath, JSON.stringify(mensagens, null, 4));
}

// Endpoint para listar todas as mensagens
app.get('/mensagens', (req, res) => {
    const mensagens = carregarMensagens();
    res.json(mensagens);
});

// Endpoint para criar uma nova mensagem
app.post('/mensagens', upload.single('anexo'), (req, res) => {
    const mensagens = carregarMensagens();

    const novaMensagem = {
        id: mensagens.length + 1,
        usuario: req.body.usuario,
        mensagem: req.body.mensagem,
        anexo: req.file ? `/uploads/${req.file.filename}` : null,
    };

    mensagens.push(novaMensagem);
    salvarMensagens(mensagens);

    res.status(201).json(novaMensagem);
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
