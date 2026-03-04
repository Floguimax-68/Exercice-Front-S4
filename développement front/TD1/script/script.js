const data_Cont = document.querySelector('.data-cont');

fetch('data.json')
    .then(reponse => reponse.json())
    .then(data => {
        data.forEach(phrase => {
            data_Cont.innerHTML += `<div>phrase dans le json : ${phrase}</div>`;
        });
    })


    