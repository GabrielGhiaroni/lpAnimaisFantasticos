export default function scrollSmooth() {
    const linksInternos = document.querySelectorAll('.menu a[data-scroll="smooth"]');

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
};