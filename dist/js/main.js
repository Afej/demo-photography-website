// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('#nav-menu');


// Set Initial State Of Menu
navMenu.style.display = 'none';

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    navMenu.style.display = 'block';

    // Set Menu State
    showMenu = true;
  } else {
    navMenu.style.display = 'none';

    // Set Menu State
    showMenu = false;
  }
}