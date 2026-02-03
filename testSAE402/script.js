const preloader = document.getElementById('preloader');
const soundInsert = document.getElementById('sound-insert');
const soundTurn = document.getElementById('sound-turn');
const soundOpen = document.getElementById('sound-open');

const hidePreloader = () => {
    preloader.classList.add('is-hidden');
    setTimeout(() => {
        preloader.remove();
    }, 900);
};

const playSound = (audio) => {
    if (!audio) {
        return;
    }
    audio.currentTime = 0;
    audio.play().catch(() => {});
};

window.addEventListener('load', () => {
    setTimeout(() => playSound(soundInsert), 900);
    setTimeout(() => playSound(soundTurn), 2000);
    setTimeout(() => playSound(soundOpen), 2500);
    setTimeout(hidePreloader, 3200);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
        const targetId = anchor.getAttribute('href');
        if (!targetId || targetId === '#') {
            return;
        }
        const target = document.querySelector(targetId);
        if (target) {
            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const escapeGrid = document.getElementById('escape-grid');
const conceptInput = document.getElementById('concept');

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

const slugify = (value) => value.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

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
            difficultyClass: `difficulty-${slugify(difficulty)}`,
        });
    }
    return concepts;
};

const concepts = buildConcepts();

const renderConcepts = () => {
    if (!escapeGrid) {
        return;
    }
    escapeGrid.innerHTML = concepts
        .map(
            (concept) => `
            <article class="escape-card ${concept.difficultyClass}">
                <img class="escape-image" src="${concept.image}" alt="${concept.title}">
                <h4>${concept.title}</h4>
                <p class="escape-meta">${concept.type} • ${concept.duration} • ${concept.price}€</p>
                <div class="escape-tags">
                    <span>${concept.difficulty}</span>
                    <span>${concept.genre}</span>
                </div>
                <a class="btn ghost" href="detail.html?id=${concept.id}">Voir le détail</a>
            </article>
        `
        )
        .join('');
};

const filterButtons = document.querySelectorAll('.filter-btn');
const applyFilter = (filterClass) => {
    const cards = document.querySelectorAll('.escape-card');
    cards.forEach((card) => {
        if (filterClass === 'all' || card.classList.contains(filterClass)) {
            card.classList.remove('is-hidden');
        } else {
            card.classList.add('is-hidden');
        }
    });
};

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        filterButtons.forEach((btn) => btn.classList.remove('is-active'));
        button.classList.add('is-active');
        applyFilter(button.dataset.filter);
    });
});

const escapeForm = document.getElementById('escape-form');
if (escapeForm) {
    escapeForm.addEventListener('submit', (event) => {
        event.preventDefault();
        escapeForm.reset();
        conceptInput.value = '';
        alert('Merci ! Votre pré-inscription est enregistrée.');
    });
}

renderConcepts();
