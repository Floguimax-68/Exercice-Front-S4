
let etudiants = [];
let partitions = [];

go(); /* appel de la fonction GO */


/* Fonction go() qui va stocker les donéées data de partitions
et etudiants en appelant la fonction Fatch DATA avec 
l'json en parametre */
async function go() {
    partitions = await fetchData("data/partitions.json");
    etudiants = await fetchData("data/etudiants.json");
    etudiants = triEtudiant(etudiants); /* appel de la fonction qui trie les étudiants */
    afficherEtudiants(etudiants); /* appel de la fonction qui affiche les étudiants */
}


/* fonction qui fetch les donées de l'json en patrametre */
async function fetchData(json) {
    const reponse = await fetch(json); /* en attente de la fin du fetch*/
    const data = await reponse.json(); /* en attente de la conversion du fetch en json */
    return data; /* retour des données (permet de restocker la data dans la variable initiale) */
}


/* fonction qui trie les étudiants par nom et prénom */
function triEtudiant(etudiants) {
    return etudiants.sort((a, b) => { /* retour de la donnée triée // parametre du .sort = a et b*/
        let nomCompletA = a.nom_disp + a.prenom; /* assemblage du nom et prénom A */
        let nomCompletB = b.nom_disp + b.prenom; /* assemblage du nom et prénom B */
        return nomCompletA.localeCompare(nomCompletB); /* retour de la donnee triée avec la méthode localeCompare qui compare les deux chaines de caractères */
    });
};


/* function qui va selectionner la div étudiant et afficher leur nom et prenom par ordre alphabétique */
function afficherEtudiants(etu) {
    let divEtudiant = document.querySelector(".etudiant");
    etu.forEach(Element => {
        divEtudiant.innerHTML += `<p>Nom: ${Element.nom_disp}</p>
                                  <p>Prénom: ${Element.prenom}</p>`
    });
}