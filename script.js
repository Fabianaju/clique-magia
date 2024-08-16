// Alternância de tema claro/escuro
const themeIcon = document.getElementById('theme-icon');
themeIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.replace('bx-moon', 'bx-sun');
    } else {
        themeIcon.classList.replace('bx-sun', 'bx-moon');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.querySelector('.navigation ul');

    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        menuIcon.classList.toggle('active');
    });
});
