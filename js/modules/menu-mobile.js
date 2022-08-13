export default function initMenuMobile() {
    const btn = document.querySelector('[data-menu="button"]');
    const menuMobile = document.querySelector('[data-menu="list"]');

    btn.addEventListener('click', ativarMenuMobile);

    function ativarMenuMobile(event) {
        event.stopPropagation()
        menuMobile.classList.toggle('active');
        btn.classList.toggle('active');
    };

    const html = document.documentElement;
    html.addEventListener('click', handleClickOutside);

    function handleClickOutside(event) {
        event.stopPropagation();
        if (!event.target.classList.contains('active')) {
            menuMobile.classList.remove('active');
            btn.classList.remove('active');
        };

    };
};