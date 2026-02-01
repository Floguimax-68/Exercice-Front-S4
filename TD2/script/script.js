let canva = document.getElementById("canvas-test");
var ctx = canva.getContext("2d");
let W;
let H;

tailleDuCanva();

window.requestAnimationFrame(affichage);
window.addEventListener("resize", tailleDuCanva);

function tailleDuCanva() {
    W = window.innerWidth;
    H = window.innerHeight;
    canva.width = W;
    canva.height = H;
    largeur_rect = window.innerWidth * 0.2;
    hauteur_rect = window.innerHeight * 0.08;
}

function affichage() {
    ctx.fillRect(5, 5, largeur_rect - 5, hauteur_rect);
     ctx.fillStyle = "white";
    ctx.fillRect(largeur_rect + 5 * 1, 5, largeur_rect, hauteur_rect);
     ctx.fillStyle = "blue";
    ctx.fillRect(largeur_rect * 2 + 5 * 2, 5, largeur_rect, hauteur_rect);
     ctx.fillStyle = "red";
    ctx.fillRect(largeur_rect * 3 + 5 * 3, 5, largeur_rect, hauteur_rect);
     ctx.fillStyle = "yellow";
    ctx.fillRect(largeur_rect * 4 + 5 * 4, 5, largeur_rect, hauteur_rect);
     ctx.fillStyle = "pink";
    window.requestAnimationFrame(affichage);

}