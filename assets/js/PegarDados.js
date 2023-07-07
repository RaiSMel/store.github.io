export const PegarItem = () => {

    // Possível colocar RegEx para selecionar apenas os números
    // , com isso, aumentar o número de produtos sem quebrar o site
    let url = document.URL
    let categoriaId = url.match(/(#\w*)/)
    let tamanho = categoriaId[0].length
    let categoria = categoriaId[0].slice(1, tamanho - 1)
    let id = categoriaId[0].slice(tamanho - 1, tamanho)

    return [categoria, id]
}

export const getLocalStorage = () => JSON.parse(localStorage.getItem('produtos'))
export const setLocalStorage = (produtos) => localStorage.setItem('produtos', JSON.stringify(produtos)) 
