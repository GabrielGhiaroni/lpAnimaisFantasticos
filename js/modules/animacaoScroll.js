export default function animacaoScroll() {

    const sections = document.querySelectorAll('[data-anime="scroll"]');
    const windowMetade = window.innerHeight * 0.8


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

};