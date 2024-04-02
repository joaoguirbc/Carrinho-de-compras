let valorTotal;

limpar()

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

    // Exibe o produto adicionado no carrinho
    let listaProdutos = document.getElementById('lista-produtos');
    let produto = document.createElement('section');
    produto.classList.add('carrinho__produtos__produto');
    produto.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>`;
    listaProdutos.appendChild(produto);
    
    valorTotal += (valorProduto * quantidade);
    // Atualiza o valor do carrinho de compras
    document.getElementById('valor-total').textContent = `R$${valorTotal}`;

    document.getElementById('quantidade').value = 0
}

function limpar() {
    valorTotal = 0;         // Reseta o valor total para 0

    document.getElementById('valor-total').textContent = `R$${valorTotal}`;        // Atualiza o valor do carrinho de compras

    document.getElementById('lista-produtos').innerHTML = '';         // Remove os elementos do carrinho de compras
}

