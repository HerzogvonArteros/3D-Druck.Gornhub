function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

window.onload = function () {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  // Set dropdown value correctly on load
  const selector = document.querySelector('.theme-switcher');
  if (selector) selector.value = savedTheme;
};