let valorTotal;
let carrinho = {}; // Objeto para armazenar os produtos no carrinho

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

    // Verifica se o produto já está no carrinho
    if (carrinho.hasOwnProperty(nomeProduto)) {
        carrinho[nomeProduto].quantidade += quantidade; // Incrementa a quantidade do produto existente no carrinho
    } else {
        carrinho[nomeProduto] = {quantidade: quantidade, valor: valorProduto}; // Adiciona um novo produto ao carrinho
    }

    exibirProdutosNoCarrinho();

    valorTotal += (valorProduto * quantidade);
    // Atualiza o valor do carrinho de compras
    document.getElementById('valor-total').textContent = `R$${valorTotal}`;
    document.getElementById('quantidade').value = 0
}

function exibirProdutosNoCarrinho() {
    let listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = '';

    for (const produto in carrinho) {
        let produtoHTML = document.createElement('section');
        produtoHTML.classList.add('carrinho__produtos__produto');
        produtoHTML.innerHTML = `<span class="texto-azul">${carrinho[produto].quantidade}x</span> ${produto} <span class="texto-azul">R$${carrinho[produto].valor}</span>`;
        listaProdutos.appendChild(produtoHTML);
    }
}

function limpar() {
    valorTotal = 0;         // Reseta o valor total para 0
    carrinho = {};          // Limpa o carrinho

    document.getElementById('valor-total').textContent = `R$${valorTotal}`;        // Atualiza o valor do carrinho de compras

    document.getElementById('lista-produtos').innerHTML = '';         // Remove os elementos do carrinho de compras
}

