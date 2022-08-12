export default function initTooltip() {

    const tooltips = document.querySelectorAll('[data-tooltip]');

    tooltips.forEach(tooltip => tooltip.addEventListener('mouseover', onMouseOver));

    function onMouseOver(event) {
        const tooltipBox = criarTooltip(this);

        this.addEventListener('mouseleave', onMouseLeave);
        onMouseLeave.tooltipBox = tooltipBox;
        onMouseLeave.element = this;

        this.addEventListener('mousemove', onMouseMove);
        onMouseMove.tooltipBox = tooltipBox;
    };

    const onMouseLeave = {
        handleEvent() {
            this.tooltipBox.remove();
            this.element.removeEventListener('mouseleave', onMouseLeave);
            this.element.removeEventListener('mousemove', onMouseMove);
        }
    };

    const onMouseMove = {
        handleEvent(event) {
            this.tooltipBox.style.top = event.pageY + 20 + 'px';
            this.tooltipBox.style.left = event.pageX + 20 + 'px';
        }
    };

    function criarTooltip(elementoEvento) {
        const tooltipBox = document.createElement('div');
        tooltipBox.classList.add('tooltip');
        const text = elementoEvento.getAttribute('aria-label');
        tooltipBox.innerText = text;
        document.body.appendChild(tooltipBox);
        return tooltipBox;
    };

};

initTooltip();