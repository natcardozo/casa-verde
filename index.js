const botaoCarrinho = document.querySelector(".cabecalho__carrinho");
const botaoFechar = document.querySelector(".carrinho__botao-fechar--ativo");
const carrinho = document.querySelector("#carrinho");
const body = document.querySelector(".fundo-escuro");

botaoCarrinho.addEventListener('click', () => {
    carrinho.classList.toggle('carrinho--ativo')
    body.classList.toggle('fundo-escuro--ativo')
})

botaoFechar.addEventListener('click', () => {
    carrinho.classList.toggle('carrinho--ativo')
    body.classList.toggle('fundo-escuro--ativo')
})
