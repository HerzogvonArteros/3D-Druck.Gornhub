// theme.js

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    const selector = document.querySelector('.theme-switcher');
    if (selector) selector.value = theme;
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    const selector = document.querySelector('.theme-switcher');
    if (selector) selector.value = savedTheme;
}

// Init-Funktion global verfügbar machen
window.setTheme = setTheme;
window.initTheme = initTheme;

// Falls das Theme-Switcher-Element beim DOM-Ready schon vorhanden ist
document.addEventListener('DOMContentLoaded', initTheme);