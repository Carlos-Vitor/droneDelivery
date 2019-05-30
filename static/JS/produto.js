let container = document.querySelector('#popup');
let fundo = document.querySelector('.fundoPopup');
let botao = document.querySelector('#detalhe');
let botao2 = document.querySelector('#voltar')

botao.onclick = abrirPopup;
botao2.onclick = fecharPopup;

function abrirPopup(){
    container.style.display = 'flex';
    fundo.style.display = 'flex';
}

function fecharPopup(){
    container.style.display = 'none';
    fundo.style.display = 'none';
}