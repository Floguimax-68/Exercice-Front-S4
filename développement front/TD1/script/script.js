window.addEventListener('keydown', touche);
window.addEventListener('keyup', stop);
let lehmann = document.querySelector(".lehmann")
let posiX = 0;
let posiY = 0;
let x = 0;
let y = 0;




let interval1 = setInterval(bouge, 16);
function touche(event) {
    switch (event.key) {
        case 'ArrowUp':
            posiY = -10;
            break;
        case 'ArrowDown':
            posiY = 10;
            break;
        case 'ArrowRight':
            posiX = 10;
            break;
        case 'ArrowLeft':
            posiX = -10;
            break;
    }
}

function stop(event) {
    switch (event.key) {
        case 'ArrowUp':
            posiY = 0;
            break;
        case 'ArrowDown':
            posiY = 0;
            break;
        case 'ArrowRight':
            posiX = 0;
            break;
        case 'ArrowLeft':
            posiX = 0;
            break;
    }
}
// function stop() {
//     clearInterval(interval1); Buggez si plusieur touche appuyées
// }

function bouge() {
    x += posiX;
    y += posiY;
    lehmann.style.transform = `translate(${x}px, ${y}px)`;
}