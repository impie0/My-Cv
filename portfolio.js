document.addEventListener('DOMContentLoaded', () => {
    const readMoreButtons = document.querySelectorAll('.read-more');
    const backButtons = document.querySelectorAll('.back');
    const fullDescriptions = document.querySelectorAll('.full-description');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-target');
            document.getElementById(target).style.display = 'block';
            window.scrollTo({
                top: document.getElementById(target).offsetTop,
                behavior: 'smooth'
            });
        });
    });

    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-target');
            document.getElementById(target).style.display = 'none';
        });
    });
});