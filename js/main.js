// Select DOM Items

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu-simplified');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const logoGithub = document.querySelector('.logo_github');
const logoLinkedin = document.querySelector('.logo_linkedin');
// const toggleMenu = document.getElementById('toggleMenu');

// Set Initial State of Menu (First disabling simplified mode for JavaSript-disabled people.)
if (logoGithub != null && logoLinkedin != null) {
    logoGithub.classList.add('fab');
    logoGithub.classList.add('fa-github');
    logoGithub.classList.add('fa-2x');
    logoGithub.innerHTML = "";
    logoLinkedin.classList.add('fab');
    logoLinkedin.classList.add('fa-linkedin');
    logoLinkedin.classList.add('fa-2x');
    logoLinkedin.innerHTML = "";
};
// toggleMenu.style.visibility = 'hidden';
menu.classList.remove("menu-simplified");
menu.classList.add("menu");
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // Set Menu State
        showMenu = false;
    }
}