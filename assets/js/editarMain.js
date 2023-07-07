import { PegarItem, getLocalStorage, setLocalStorage } from './PegarDados.js';

const botoesFormulario = document.querySelectorAll('.formulario-editar .botao');
const botoesConfirmar = document.querySelectorAll('.confirmar .botao');
const confirmar = document.querySelector('.confirmar');
const divProdutos = document.querySelector('.confirmar .produtos');

let categoriaId = PegarItem();
let produtoSelecionado = getLocalStorage()[categoriaId[0]][categoriaId[1]-1];

const EditarValores = (valores) => {
    console.log(produtoSelecionado)
    let novosValores = {
        'id': produtoSelecionado.id,
        'tipo': valores.tipo,
        'nome': valores.nome,
        'preco': valores.preco,
        'descricao': valores.descricao, 
        'url': valores.url
    };

    let produtos = getLocalStorage();
    produtos[valores.tipo].splice(produtoSelecionado['id']-1, 1, novosValores)
    console.log(produtos);
    setLocalStorage(produtos);
}

const PegarValores = () => {
    let item = {
        nome: document.querySelector('[data-nome]').value,
        tipo: document.querySelector('[data-tipo]').value,
        preco: document.querySelector('[data-preco]').value,
        descricao: document.querySelector('[data-descricao]').value,
        url: document.querySelector('[data-url]').value
    }
    
    return item;

}

const IniciarValores = () => {
    
    let item = {
        nome: document.querySelector('[data-nome]'),
        tipo: document.querySelector('[data-tipo]'),
        preco: document.querySelector('[data-preco]'),
        descricao: document.querySelector('[data-descricao]'),
        url: document.querySelector('[data-url]')
    }

console.log(produtoSelecionado.descricao)

    item.nome.value = produtoSelecionado.nome
    item.tipo.value = produtoSelecionado.tipo
    item.preco.value = produtoSelecionado.preco
    item.descricao.value = produtoSelecionado.descricao
    item.url.value = produtoSelecionado.url
}

// Botões do formulário

botoesFormulario.forEach(botao => {
    botao.addEventListener('click', (e) =>{
        e.preventDefault();

        if(botao.classList[1] == "editar"){
            botoesConfirmar[0].style.display = "inline-block";
            divProdutos.innerHTML = "";
            divProdutos.appendChild( criarItem(produtoSelecionado))
            divProdutos.appendChild( criarItem(PegarValores()))


        }else if(botao.classList[1] == "excluir"){
            botoesConfirmar[1].style.display = "inline-block";
            divProdutos.innerHTML = "";
            divProdutos.appendChild( criarItem(produtoSelecionado))

        }else{
            history.back();
        }

        confirmar.style.display = "flex";
    })
})


// Botões do pop up

botoesConfirmar.forEach(botao => {
    botao.addEventListener('click', (e) =>{
        e.preventDefault();
        
        if(botao.id == "botao--cancelar"){
            botoesConfirmar[0].style.display = "none";
            botoesConfirmar[1].style.display = "none";
            confirmar.style.display = "none";
        }
        else if(botao.id == "botao--excluir"){
            let semItemExcluido = getLocalStorage()
            let contador = 1;
        
            semItemExcluido[categoriaId[0]].splice(categoriaId[1]-1, 1)
            
            semItemExcluido[categoriaId[0]].forEach(item => {
                item.id = contador;
                contador++;
            })
            
            setLocalStorage(semItemExcluido) 
            alert('Item excluido com sucesso!!')
            window.location.href = "index.html"
        }
        else if(botao.id == "botao--editar"){
            EditarValores(PegarValores())
            alert("Produtos foram alterados com sucesso!")
            confirmar.style.display = "none"
        }
    })
})

// criação da div dos produto para deixa exposto

const criarItem = (produto) => { 

    let item = document.createElement('div');
    item.classList.add('produto');

    item.innerHTML =    
    `   <img src="${produto.url}" alt="${produto.nome}" class="imagem">
        <div class="conteudo">
            <h3 class="nome">${produto.nome}</h3>
            <p class="avaliacao">★★★★☆</p>
            <p class="descricao">${produto.descricao}</p>
            <p class="preco">${produto.preco}</p>
        </div>
    `;

    return item;
}

IniciarValores();