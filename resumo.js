const botaoFinalizar = document.querySelector(".botao__finalizar");
const fundoEscuro = document.querySelector(".fundo-escuro");
const modal = document.querySelector(".modal");

botaoFinalizar.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.toggle('modal--ativo');
    fundoEscuro.classList.toggle('fundo-escuro--ativo');
})

let botaoCEP = document.querySelector(".botao--cep")

botaoCEP.addEventListener('click', function buscaCEP() {
    let cep = document.querySelector(".input--cep");
    let valorCEP = cep.value;
    let url = 'http://viacep.com.br/ws/' + valorCEP + '/json'
    let xhr = new XMLHttpRequest(); 
    
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() { 
        if (xhr.readyState == 4) { 
        if (xhr.status = 200) preencheCampos(JSON.parse(xhr.responseText)); } 
    } 
    xhr.send();
})

function preencheCampos(json) { 
    let logradouro = document.querySelector(".input--logradouro");
    let cidade = document.querySelector(".input--cidade");
    let estado = document.querySelector(".input--estado")

    logradouro.value = json.logradouro;
    cidade.value = json.localidade; 
    estado.value = json.uf; 
}