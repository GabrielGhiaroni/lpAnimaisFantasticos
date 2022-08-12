export default function initDropdownMenu() {
    const dropDownMenus = document.querySelectorAll('[data-dropdown]');

    dropDownMenus.forEach(menu => {
        ['click', 'touchstart'].forEach(evento => menu.addEventListener(evento, ativarDropDownMenu));
    });

    function ativarDropDownMenu(event) {
        event.stopPropagation();
        const ul = this.children[1];
        ul.classList.toggle('ativo');
        fecharDropDownMenu(ul);
    };

    function fecharDropDownMenu(element) {
        const html = document.documentElement;
        html.addEventListener('click', handleClickOutside);

        function handleClickOutside(event) {
            event.stopPropagation();
            if (!event.target.classList.contains('ativo')) {
                element.classList.remove('ativo');
            };
        };
    };
};