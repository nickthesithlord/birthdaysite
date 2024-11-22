// Fireworks animation logic
function createFirework() {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    
    // Random starting position for fireworks
    firework.style.left = Math.random() * 100 + 'vw';
    firework.style.top = Math.random() * 100 + 'vh';
    
    // Append the firework to the body (it will disappear after animation)
    document.getElementById('fireworks').appendChild(firework);
    
    // Remove firework after animation ends
    setTimeout(() => {
        firework.remove();
    }, 2000); // Match the duration of the animation
}

// Create fireworks every 1.5 seconds
setInterval(createFirework, 1500);
