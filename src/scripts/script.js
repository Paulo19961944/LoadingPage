document.addEventListener('DOMContentLoaded', async () => {
    setTimeout(showPage, 7500); // Espera 7.5 segundos antes de chamar a função showPage
});

// Função que mostra a página
const showPage = () => {
    const refreshElement = document.getElementById('refresh'); // Elemento de Refresh
    const loadElement = document.getElementById('load'); // Elemento de Load
    const loadText = document.getElementById('loadText'); // Título do Elemento de Load
    
    refreshElement.classList.add('show-element'); // Mostra o Elemento
    loadElement.classList.add('hide-element'); // Esconde o Elemento
    loadText.classList.add('hide-element'); // Esconde o Elemento
}

// Adiciona evento no botão de Refresh
document.getElementById('refreshBtn').addEventListener('click', () => {
    window.location.reload(); // Recarrega a Página
});