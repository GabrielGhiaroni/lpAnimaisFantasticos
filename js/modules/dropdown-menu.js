export default function initDropdownMenu() {
    const dropDownMenus = document.querySelectorAll('[data-dropdown]');

    dropDownMenus.forEach(menu => {
        ['click', 'touchstart'].forEach(evento => menu.addEventListener(evento, ativarDropDownMenu));
    });

    function ativarDropDownMenu(event) {
        event.preventDefault();
        event.stopPropagation();
        const ul = this.children[1];
        ul.classList.add('ativo');
        fecharDropDownMenu(ul);
    };

    function fecharDropDownMenu(element) {
        const html = document.documentElement;
        html.addEventListener('click', handleClickOutside);

        function handleClickOutside(event) {
            event.stopPropagation();
            const classListEvent = event.target.classList;
            if (!event.target.classList.contains('ativo')) {
                element.classList.remove('ativo');
            };
        };
    };
};