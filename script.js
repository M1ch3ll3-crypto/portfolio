// Petals Animation
function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.style.left = Math.random() * 100 + 'vw';
  petal.style.animationDuration = Math.random() * 3 + 5 + 's'; // 5-8s slow fall
  petal.innerHTML = '🌸';
  petal.style.fontSize = Math.random() * 10 + 10 + 'px';
  document.body.appendChild(petal);
  
  setTimeout(() => {
    petal.remove();
  }, 8000);
}

// Create petals every 300ms
setInterval(createPetal, 300);

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
