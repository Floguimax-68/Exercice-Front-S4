const difficulties = ['Facile', 'Intermédiaire', 'Difficile', 'Expert'];
const types = ['Parcours urbain', 'Forêt', 'Plage', 'Montagne', 'Parc historique', 'Village'];
const genres = ['Mystère', 'Aventure', 'Survie', 'Historique', 'Fantastique', 'Enquête', 'Éco-quest'];
const durations = ['60 min', '75 min', '90 min', '120 min'];
const descriptions = [
    "Une boussole ancienne et une carte cryptée vous guident à travers les ruelles, là où chaque détail est un indice.",
    "Un orage approche. Résolvez les énigmes avant la tombée de la nuit pour réactiver le phare oublié.",
    "Le village cache un secret. Déverrouillez les étapes d'un rituel oublié pour briser la malédiction.",
    "Une équipe de chercheurs a disparu. Retrouvez leurs traces à travers la forêt et découvrez ce qu'ils ont vu.",
    "Le gardien du parc vous confie une mission : protéger les artefacts avant l'arrivée d'une tempête.",
    "Un message radio perdu traverse les collines. Localisez la source et ouvrez l'abri verrouillé.",
    "Une route ancienne, des repères gravés, et un trésor qui n'attend que l'ultime combinaison.",
    "La cité engloutie refait surface. Chaque énigme révèle un fragment de la vérité cachée.",
    "Le temps s'accélère. Créez une chaîne d'indices pour stabiliser le portail et revenir à temps.",
    "Un carnet de terrain révèle des codes naturels : suivez-les pour déverrouiller le sanctuaire.",
];

const buildConcepts = () => {
    const concepts = [];
    for (let i = 1; i <= 50; i += 1) {
        const difficulty = difficulties[i % difficulties.length];
        const type = types[i % types.length];
        const genre = genres[i % genres.length];
        const duration = durations[i % durations.length];
        const price = 22 + (i % 6) * 6 + (difficulty === 'Expert' ? 12 : 0);
        const title = `Mission ${i.toString().padStart(2, '0')} — ${genre}`;
        const description = descriptions[i % descriptions.length];
        const imageIndex = (i % 6) + 1;
        concepts.push({
            id: i,
            title,
            difficulty,
            type,
            genre,
            duration,
            price,
            description,
            image: `assets/escape-0${imageIndex}.svg`,
        });
    }
    return concepts;
};

const concepts = buildConcepts();
const params = new URLSearchParams(window.location.search);
const id = Number(params.get('id')) || 1;
const concept = concepts.find((item) => item.id === id) || concepts[0];

const title = document.getElementById('detail-title');
const subtitle = document.getElementById('detail-subtitle');
const description = document.getElementById('detail-description');
const meta = document.getElementById('detail-meta');
const image = document.getElementById('detail-image');

if (title) title.textContent = concept.title;
if (subtitle) subtitle.textContent = `${concept.type} • ${concept.duration}`;
if (description) description.textContent = concept.description;
if (meta) {
    meta.innerHTML = `
        <span>${concept.difficulty}</span>
        <span>${concept.genre}</span>
        <span>${concept.price}€</span>
    `;
}
if (image) {
    image.src = concept.image;
}
