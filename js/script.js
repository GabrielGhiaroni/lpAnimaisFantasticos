//LISTA ANIMAIS
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


//FAQ
const perguntas = document.querySelectorAll('.faq-lista dt');
const descricaoPerguntas = document.querySelectorAll('.faq-lista dd');

descricaoPerguntas[0].classList.toggle('faq-lista-ativo');

function mostrarDescricao(event) {
    const perguntaClicada = event.target;
    perguntaClicada.classList.toggle('faq-lista-ativo');
    perguntaClicada.nextElementSibling.classList.toggle('faq-lista-ativo');
};

perguntas.forEach(pergunta => pergunta.addEventListener('click', mostrarDescricao));


//SCROLL INTERNO SMOOTH
const linksInternos = document.querySelectorAll('.menu li:not(:last-child)');

function smoothScroll(event) {
    event.preventDefault();
    const href = event.target.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
};

linksInternos.forEach(link => link.addEventListener('click', smoothScroll));


//ANIMAÇÃO SCROLL
const sections = document.querySelectorAll('.js-scroll');
const windowMetade = window.innerHeight * 0.7


function animaScroll() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        if (sectionTop < 0) {
            section.classList.add('scroll-animation');
        };
    });
};

animaScroll();

window.addEventListener('scroll', animaScroll);