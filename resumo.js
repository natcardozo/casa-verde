const botaoFinalizar = document.querySelector(".botao__finalizar");
const fundoEscuro = document.querySelector(".fundo-escuro");
const modal = document.querySelector(".modal");

botaoFinalizar.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.toggle('modal--ativo');
    fundoEscuro.classList.toggle('fundo-escuro--ativo');
})