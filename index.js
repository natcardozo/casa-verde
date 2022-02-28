const botaoCarrinho = document.querySelector(".cabecalho__carrinho");
const botaoFechar = document.querySelector(".carrinho__botao-fechar--ativo");
const carrinho = document.querySelector(".carrinho");

botaoCarrinho.addEventListener('click', () => {
    carrinho.classList.toggle('carrinho--ativo')
})

botaoFechar.addEventListener('click', () => {
    carrinho.classList.toggle('carrinho--ativo')
})
