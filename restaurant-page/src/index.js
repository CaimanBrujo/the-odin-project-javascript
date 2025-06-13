import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function clearContent() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
}

function setTabListeners() {
    const homeBtn = document.querySelector('#home-btn');
    const menuBtn = document.querySelector('#menu-btn');
    const contactBtn = document.querySelector('#contact-btn');

    homeBtn.addEventListener('click', () => {
        clearContent();
        loadHome();
    });

    menuBtn.addEventListener('click', () => {
        clearContent();
        loadMenu();
    });

    contactBtn.addEventListener('click', () => {
        clearContent();
        loadContact();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadHome();
    setTabListeners();
});
