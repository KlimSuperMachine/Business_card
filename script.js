let page = document.querySelector('.page');
let button = document.querySelector('.theme-button');

button.onclick = function () {
  page.classList.toggle('dark-theme');

  if (page.classList.contains('dark-theme')) {
    button.textContent = 'и ночь...';
  } else { button.textContent = 'и день...' }
};