
import { criarProduto, carregarProduto, itensProdutos, verificarProdutosExistentes } from "./carregaProdutos.js"
import { redirecionarCriarNovoItem, validarSessao } from "./validandoSession.js";

verificarProdutosExistentes();
validarSessao();
redirecionarCriarNovoItem();



const imprimirTipos = (produtos) =>
{
produtos.camisas.forEach(produto => {
carregarProduto(criarProduto(produto.nome, produto.preco, produto.url, produto.id, produto.tipo),'produtos__camisas');
});

produtos.calcas.forEach(produto => {
    carregarProduto(criarProduto(produto.nome, produto.preco, produto.url, produto.id, produto.tipo),'produtos__calcas');
});

produtos.tenis.forEach(produto => {
    carregarProduto(criarProduto(produto.nome, produto.preco, produto.url, produto.id, produto.tipo),'produtos__tenis');
});

}

imprimirTipos(itensProdutos);