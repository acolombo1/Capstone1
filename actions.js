/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */

const btnHamburger = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const btnCloseMenu = document.getElementById('close-menu');
const menuItem = document.querySelectorAll('.list-item');

/* Events and their actions */
btnHamburger.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
});

btnCloseMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

for (let i = 0; i < menuItem.length; i++) {
  menuItem[i].addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });
}
