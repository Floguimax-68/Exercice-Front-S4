let btn_affichage = document.querySelector(".btn-affichage");
let 
btn_affichage.addEventListener("click", getData);

// Une autre manière d'attendre le retour de la réponse lors d'un fetch
async function getData() {
    let data = await fetch("cursor_suivi.html");
    let contenu_curseur_html = await data.text();
    document.querySelector(".contenu").innerHTML = contenu_curseur_html;
    cursorSuivi();
}

function supp_contenu(){

}