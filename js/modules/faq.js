export default function faq() {
    const perguntas = document.querySelectorAll('.faq-lista dt');
    const descricaoPerguntas = document.querySelectorAll('.faq-lista dd');

    descricaoPerguntas[0].classList.toggle('faq-lista-ativo');

    function mostrarDescricao(event) {
        const perguntaClicada = event.target;
        perguntaClicada.classList.toggle('faq-lista-ativo');
        perguntaClicada.nextElementSibling.classList.toggle('faq-lista-ativo');
    };

    perguntas.forEach(pergunta => pergunta.addEventListener('click', mostrarDescricao));
};