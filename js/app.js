function adicionar() {
    let item = document.getElementById('produto').value;
    let partes = item.split(' - R$');
    let nomeProduto = partes[0];
    let valorProduto = parseInt(partes[1]);

    let quantidade = parseInt(document.getElementById('quantidade').value);

    // Verifica se a quantidade inserida pelo usuário é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Insira uma quantidade válida do produto.');
        return;
    }

    let listaProdutos = document.getElementById('lista-produtos');
    let produto = document.createElement('section');
    produto.classList.add('carrinho__produtos__produto');
    produto.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>`;
    listaProdutos.appendChild(produto);
    
        
    
        

}