const API_KEY = "eV273GPF1rVF3NNrcidPzIu2qN1XIkW21O8OouuZFEw";
const query = "tshirts,graphic,urban";
fetch(`https://api.unsplash.com/photos/random?query=${query}&client_id=${API_KEY}`)
  .then(res => res.json())
  .then(data => {
    document.body.style.backgroundImage = `url(${data.urls.full})`;
  });
