import { verificarProdutosExistentes } from "./carregaProdutos.js"
import { getLocalStorage } from "./PegarDados.js"
import { PegarItem } from "./PegarDados.js"

verificarProdutosExistentes()

const CriarProduto = () => {
    let produto = PegarItem()

    let principal = document.querySelector(".principal")
    let produtoSelecionado = JSON.parse(localStorage.getItem('produtos'))[produto[0]][produto[1] - 1]
    principal.innerHTML = `
    <section class="produto-selecionado">

        <img src="${produtoSelecionado.url}" alt="${produtoSelecionado.nome}" class="imagem">
        <a class="editar" href="editar.html#${produtoSelecionado.tipo + produtoSelecionado.id}">🛠</a>
        <div class="conteudo">
            <h3 class="nome">${produtoSelecionado.nome}</h3>
            <p class="avaliacao">★★★★☆</p>
            <p class="descricao">${produtoSelecionado.descricao}</p>
            <p class="preco">${produtoSelecionado.preco}</p>
            <button class="comprar">Comprar</button>
        </div>
    </section>`

    let produtos = document.createElement('section');
    produtos.classList.add('produtos');

    let outrosProdutos = getLocalStorage()[produto[0]]
    let tamanho = 0;
    outrosProdutos.forEach(produto => {
        if ((produtoSelecionado['id'] != produto['id']) && (tamanho < 4)) {

            let item = document.createElement('div')
            item.classList.add('produto')

            item.innerHTML = `
            <img src="${produto.url}" alt="${produto.nome}" class="imagem">
            <h3 class="nome">${produto.nome}</h3>
            <p class="avaliacao">★★★★☆</p>
            <p class="preco">${produto.preco}</p>
            <a class="direcionar" href="produto.html#${produto.tipo}${produto.id}">Verificar produto</a>`

            produtos.appendChild(item)
            tamanho++
        }


    })
    principal.appendChild(produtos)
    let links = document.querySelectorAll(".direcionar")
    links.forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(CriarProduto, 50)
        })
    })


}


CriarProduto()


