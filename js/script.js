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