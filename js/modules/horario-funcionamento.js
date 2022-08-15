export default function initHorarioFuncionamento() {
    const funcionamento = document.querySelector('[data-semana]');
    const diasFuncionamento = funcionamento.dataset.semana.split(', ').map(Number);
    const horarioFuncionamento = funcionamento.dataset.horario.split(', ').map(Number);

    const dataAtual = new Date()
    const diaDataAtual = dataAtual.getDay();
    const horaDataAtual = dataAtual.getHours();

    const diaSemanaAberto = diasFuncionamento.includes(diaDataAtual);
    const horarioAberto = horaDataAtual >= horarioFuncionamento[0] && horaDataAtual < horarioFuncionamento[1];

    if (diaSemanaAberto && horarioAberto) {
        funcionamento.classList.add('aberto');
    } else {
        funcionamento.classList.add('fechado');
    };
};