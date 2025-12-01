// script.js

// Select elements
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-navigation');
const navLinks = document.querySelectorAll('.nav-list a');

// Function to toggle menu
function toggleMenu() {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
  navToggle.setAttribute('aria-expanded', !expanded);
  nav.classList.toggle('nav-open');
}

// Close menu when a link is clicked
function closeMenuOnLinkClick() {
  nav.classList.remove('nav-open');
  navToggle.setAttribute('aria-expanded', false);
}

// Event listeners
navToggle.addEventListener('click', toggleMenu);
navLinks.forEach(link => link.addEventListener('click', closeMenuOnLinkClick));
