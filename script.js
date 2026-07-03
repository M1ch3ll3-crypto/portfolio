// Pink Petals - Slow & Consistent on All Devices
const blossoms = document.querySelector('.blossoms');

function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.innerHTML = '🌸';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = Math.random() * 4 + 10 + 's'; // 10-14 seconds = super slow
    petal.style.opacity = Math.random() * 0.3 + 0.2;
    petal.style.fontSize = Math.random() * 3 + 10 + 'px';
    
    blossoms.appendChild(petal);
    
    setTimeout(() => {
        petal.remove();
    }, 14000);
}

// Only 1 petal every 1.5 seconds = very calm
setInterval(createPetal, 1500);
}

// Hamburger menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}
