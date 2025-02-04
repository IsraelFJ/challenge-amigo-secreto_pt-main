//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


// Função para adicionar um nome à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo'); 
    const nomeAmigo = inputAmigo.value.trim(); 

    if (nomeAmigo === "") {
        alert("Por favor, digite um nome válido."); 
        return;
    }

    const listaAmigos = document.getElementById('listaAmigos'); // Captura a lista de amigos
    const novoItem = document.createElement('li'); // Cria um novo item da lista
    novoItem.textContent = nomeAmigo; // Define o texto do item
    listaAmigos.appendChild(novoItem); // Adiciona o item à lista

    inputAmigo.value = ""; // Limpa o campo de input
}

// Função para sortear um nome aleatório
function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos'); // Captura a lista de amigos
    const itensAmigos = listaAmigos.getElementsByTagName('li'); // Obtém todos os itens da lista

    if (itensAmigos.length === 0) {
        alert("Adicione pelo menos um nome para sortear."); // Valida se há nomes na lista
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * itensAmigos.length); // Sorteia um índice aleatório
    const nomeSorteado = itensAmigos[indiceSorteado].textContent; // Obtém o nome sorteado

    const resultado = document.getElementById('resultado'); // Captura o elemento de resultado
    resultado.innerHTML = `<li>${nomeSorteado}</li>`; // Exibe o nome sorteado
}
