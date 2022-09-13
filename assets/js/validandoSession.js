export const validarSessao = () => {
    const sessao = sessionStorage.getItem('login');
    const produtosPag = document.querySelector('.novoProduto');

    if (sessao != null) {
        const novoItem = document.createElement('button');
        novoItem.classList.add('adicionarItens');

        novoItem.innerHTML = 'Novo Produto';

        produtosPag.appendChild(novoItem);

        redirecionarCriarNovoItem()
    }else{
        sessionStorage.clear();
    }
}

const redirecionarCriarNovoItem = () =>{
    const botaoNovoItem = document.querySelector('.adicionarItens')  
    
    botaoNovoItem.addEventListener('click', (evento) => {
        evento.preventDefault()

        window.location.href='novoProduto.html';
    })
} 
