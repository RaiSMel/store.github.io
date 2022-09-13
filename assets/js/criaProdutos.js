const getLocalStorage = () => JSON.parse(localStorage.getItem('produtos'))
const setLocalStorage = (produtos) => localStorage.setItem('produtos', JSON.stringify(produtos)) 
const botaoNovoItem = document.querySelector('.botao__novo-produto');

botaoNovoItem.addEventListener('click', (evento) => {

    evento.preventDefault();

    const nomeProduto = document.querySelector('#nome').value;
    const tiposProduto = document.querySelector('#tipos').value;
    const precoProduto = document.querySelector('#preco').value;
    const descricaoProduto = document.querySelector('#descricao').value;
    const urlProduto = document.querySelector('#url').value;

    novoProduto(tiposProduto, nomeProduto, precoProduto, descricaoProduto, urlProduto);

    window.location.href = 'index.html';

})

export const novoProduto = (tipo, nome, preco, descricao, url) => {
    const produtos = getLocalStorage();
    const produto = {
            'tipo': tipo,
            'nome': nome,
            'preco': preco,
            'descrição': descricao, 
            'url': url
    }


    if(tipo == 'calcas'){
        produtos.calcas.push(produto)
    }
    else if(tipo == 'camisas'){
        produtos.camisas.push(produto)
    }
    else{
        produtos.tenis.push(produto) 
    }
    setLocalStorage(produtos);
}
