import navListaAnimais from './modules/tabanimais.js';
import scrollSmooth from './modules/scrollSmooth.js';
import animacaoScroll from './modules/animacaoScroll.js';
import faq from './modules/faq.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initHorarioFuncionamento from './modules/horario-funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
import SlideNav from './modules/slide.js';

navListaAnimais();
scrollSmooth();
animacaoScroll();
faq();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initHorarioFuncionamento();
initFetchAnimais();
initFetchBitcoin();

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addControl('.custom-controls');