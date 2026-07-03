// Pink Petals for Dark Blossom Theme - COS 106
const blossoms = document.querySelector('.blossoms');

function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.innerHTML = '🌸';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = Math.random() * 3 + 2 + 's';
    petal.style.opacity = Math.random() * 0.7 + 0.3;
    petal.style.fontSize = Math.random() * 8 + 12 + 'px';
    
    blossoms.appendChild(petal);
    
    setTimeout(() => {
        petal.remove();
    }, 5000);
}

setInterval(createPetal, 300);
