function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const heroId = (getRandomInt(731) + 1);

const scontrino = document.getElementById('scontrino');

fetch(`https://www.superheroapi.com/api.php/1474928416204523/${heroId}`)
  .then(response => response.json())
  .then((data) => {
    const bodyScontrino = () => {

        if (data.biography['full-name'] != '') {
            let pronoume;

        data.appearance.gender === 'Male'?  pronoume = 'his' : pronoume = 'her';

        return `<h1>Your SuperHero</h1>
        <h2 class="name">${data.name}</h2>
        <div class="infos">
        <p><span class="pronome">${pronoume}</span> real name is ${data.biography['full-name']}</p>
        <p><span class="pronome">${pronoume}</span> occupation is ${data.work.occupation} </p>
        </div>
        <img src="${data.image.url}" alt="${data.name}">
    `;
        } else {
            return `<h1>Your SuperHero</h1>
            <h2 class="name">${data.name}</h2>
            <div class="infos">
            <p>Occupation: ${data.work.occupation} </p>
            </div>
            <img src="${data.image.url}" alt="${data.name}">
        `; 
        }
    } 
    scontrino.innerHTML = bodyScontrino();
  });