// ELEGANT PETALS - Professional & Subtle
let petalCount = 0;
const maxPetals = 8; // Never more than 8 petals on screen at once

function createPetal() {
  // Stop if too many petals already falling
  if (petalCount >= maxPetals) return;
  
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.style.left = Math.random() * 100 + 'vw';
  petal.style.animationDuration = Math.random() * 5 + 12 + 's'; // 12-17s VERY SLOW
  petal.innerHTML = '🌸';
  petal.style.fontSize = Math.random() * 6 + 10 + 'px'; // Smaller: 10-16px
  petal.style.opacity = Math.random() * 0.3 + 0.4; // More transparent: 40-70%
  petal.style.position = 'fixed';
  petal.style.top = '-50px';
  petal.style.zIndex = '1';
  petal.style.pointerEvents = 'none';
  
  document.body.appendChild(petal);
  petalCount++;
  
  // Remove petal and decrease count
  setTimeout(() => {
    petal.remove();
    petalCount--;
  }, 17000);
}

// Create petal every 2000ms = 1 petal every 2 seconds = ELEGANT
setInterval(createPetal, 2000);

// Hamburger menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Close menu when clicking a link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});
