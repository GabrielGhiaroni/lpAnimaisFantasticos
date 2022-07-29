//
//
//
//
//
const animaisImagem = document.querySelectorAll('.animais-lista li img');
const animaisDescricao = document.querySelectorAll('.animais-descricao section');

animaisDescricao[0].classList.add('ativo');

function ativarDescricao(index) {

    animaisDescricao.forEach(descricao => descricao.classList.remove('ativo'));
    animaisDescricao[index].classList.add('ativo');
};

animaisImagem.forEach((imagem, index) => {
    imagem.addEventListener('click', () => {
        ativarDescricao(index);
    });
});

const perguntas = document.querySelectorAll('.faq-lista dt');
const descricaoPerguntas = document.querySelectorAll('.faq-lista dd');

descricaoPerguntas[0].classList.toggle('faq-lista-ativo');

function mostrarDescricao(event) {
    const perguntaClicada = event.target;
    perguntaClicada.classList.toggle('faq-lista-ativo');
    perguntaClicada.nextElementSibling.classList.toggle('faq-lista-ativo');
};

perguntas.forEach(pergunta => pergunta.addEventListener('click', mostrarDescricao));