const hamburger = document.querySelector('.hamburger');
const nav_list = document.querySelector('.nav-list');

function toggleMenu() {
  hamburger.classList.toggle('open');
  nav_list.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);
nav_list.addEventListener('click', toggleMenu);

function closeMenu(event) {
      if (event.target.classList.contains('.nav-link')) {
        hamburger.classList.remove('open');
        nav_list.classList.remove('open');
   }
}
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((el) => el.addEventListener('click', closeMenu));
