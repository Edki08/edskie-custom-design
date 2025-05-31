// background.js
const accessKey = "eV273GPF1rVF3NNrcidPzIu2qN1XIkW21O8OouuZFEw";

function setDynamicBackground() {
  fetch(`https://api.unsplash.com/photos/random?query=graphic,design,apparel&client_id=${accessKey}`)
    .then((response) => response.json())
    .then((data) => {
      document.body.style.backgroundImage = `url(${data.urls.full})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
    })
    .catch((error) => console.error("Error fetching Unsplash image:", error));
}

window.onload = setDynamicBackground;
