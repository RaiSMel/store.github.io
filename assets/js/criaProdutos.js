const getLocalStorage = () => JSON.parse(localStorage.getItem('produtos'))
const setLocalStorage = (produtos) => localStorage.setItem('produtos', produtos) 

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
