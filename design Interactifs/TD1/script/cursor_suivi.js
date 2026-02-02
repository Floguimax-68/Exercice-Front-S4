const particule = document.querySelector(".particule");

// Position actuelle de la particule
let px = 100;
let py = 100;

// Position de la souris
let mx = 100;
let my = 100;

// Vitesse
let vX = 0;
let vY = 0;

// Gain proportionnel (plus il est grand, plus la particule accélère)
const gain = 0.1;

document.addEventListener("mousemove", (event) => {
    mx = event.clientX;
    my = event.clientY;
});

// Timer : 60 fois par seconde
setInterval(() => {

    // Distance entre particule et souris
    let dx = mx - px;
    let dy = my - py;

    // Vitesse proportionnelle à la distance
    vX = dx * gain;
    vY = dy * gain;

    // Mise à jour de la position
    px += vX;
    py += vY;

    // Application au DOM
    particule.style.left = px + "px";
    particule.style.top = py + "px";

}, 1000 / 60); // 60 FPS
