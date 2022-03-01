const botaoCarrinho = document.querySelector(".cabecalho__carrinho");
const botaoFechar = document.querySelector(".carrinho__botao-fechar--ativo");
const carrinho = document.querySelector("#carrinho");
const fundo = document.querySelector(".fundo-escuro");

botaoCarrinho.addEventListener('click', () => {
    carrinho.classList.toggle('carrinho--ativo')
    fundo.classList.toggle('fundo-escuro--ativo')
})

botaoFechar.addEventListener('click', () => {
    carrinho.classList.toggle('carrinho--ativo')
    fundo.classList.toggle('fundo-escuro--ativo')
})

fundo.addEventListener('click', () => {
    carrinho.classList.toggle('carrinho--ativo')
    fundo.classList.toggle('fundo-escuro--ativo')
})
