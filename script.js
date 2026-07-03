// Petals Animation - SLOW AND ELEGANT
function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.style.left = Math.random() * 100 + 'vw';
  petal.style.animationDuration = Math.random() * 4 + 8 + 's'; // 8-12s VERY SLOW fall
  petal.innerHTML = '🌸';
  petal.style.fontSize = Math.random() * 8 + 12 + 'px';
  petal.style.opacity = Math.random() * 0.4 + 0.6; // Some more transparent
  document.body.appendChild(petal);
  
  setTimeout(() => {
    petal.remove();
  }, 12000); // Remove after 12s
}

// Create petals every 800ms = MUCH SLOWER SPAWN
setInterval(createPetal, 800);

// Hamburger menu toggle - THIS MAKES THE ☰ WORK
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Close menu when you click a link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});
