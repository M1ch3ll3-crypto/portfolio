// Pink Petals - Moderate Speed for Aesthetic Vibe
const blossoms = document.querySelector('.blossoms');

function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.innerHTML = '🌸';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = Math.random() * 3 + 5 + 's'; // 5-8 seconds = slower
    petal.style.opacity = Math.random() * 0.5 + 0.4;
    petal.style.fontSize = Math.random() * 6 + 14 + 'px';
    
    blossoms.appendChild(petal);
    
    setTimeout(() => {
        petal.remove();
    }, 8000);
}

setInterval(createPetal, 600); // Spawn every 0.6s instead of 0.3s = less cluttered
