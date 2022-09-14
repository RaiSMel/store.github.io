import { itens } from "./dados.js";

export const criarProduto = (nome, preco, url, id, tipo) => {
    
    const produtoItem = document.createElement('div');
    produtoItem.classList.add('produto__item')
    const produto = `
        <img src="${url}" class="produto__img">
        <p class="produto__nome produtos__textos">${nome}</p>
        <p class="produto__preco produtos__textos">${preco}</p>
        <a class="produto__ver produtos__textos" href="produto.html#${tipo}${id}">verificar produto</a>
    `;

    produtoItem.innerHTML = produto;
    return produtoItem;
}

export const carregarProduto = (itens, tipo) => {
    const produtos = document.querySelector(`[${tipo}]`);
    produtos.appendChild(itens)
}

export const verificarProdutosExistentes = () => {
    if(localStorage.getItem('produtos')){
      return '';
    }
    else
    {
       localStorage.setItem('produtos', JSON.stringify(itens))
    }
}

export const itensProdutos = JSON.parse(localStorage.getItem('produtos')) || itens