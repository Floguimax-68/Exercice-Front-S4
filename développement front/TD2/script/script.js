
let etudiants = [];
let partitions = [];

go();

async function go() {
    partitions = await fetchData("data/partitions.json");
    etudiants = await fetchData("data/etudiants.json");
    etudiants = triEtudiant(etudiants);
    afficherEtudiants(etudiants);
}

async function fetchData(url) {
    const reponse = await fetch(url);
    const data = await reponse.json();
    return data;
}

function triEtudiant(etudiants) {
//tri etudiant par nom et prenom

    return etudiants.sort((a, b) => {
        let nomCompletA = a.nom_disp + a.prenom;
        let nomCompletB = b.nom_disp + b.prenom;
        return nomCompletA.localeCompare(nomCompletB);
    });

};

function afficherEtudiants(etu) {
let divEtudiant = document.querySelector(".etudiant");
etu.forEach(Element => {
    divEtudiant.innerHTML += `<p>Nom: ${Element.nom_disp}</p>
                                  <p>Prénom: ${Element.prenom}</p>`
      }); 
}