// app.js

// Load background dynamically
import './background.js';

// Load continuous music player
import './music.js';

// Firebase config
import './firebase-config.js';

// Smooth falling shirts
function createFloatingShirt() {
  const shirt = document.createElement("div");
  shirt.classList.add("falling-shirt");
  shirt.innerText = "👕";

  // Random horizontal position
  shirt.style.left = Math.random() * window.innerWidth + "px";

  // Random animation duration and delay
  const duration = 8 + Math.random() * 5; // 8–13 seconds
  const delay = Math.random() * 5;

  shirt.style.animation = `fall ${duration}s linear ${delay}s infinite`;
  shirt.style.opacity = Math.random() * 0.5 + 0.5;

  document.body.appendChild(shirt);

  // Remove after complete fall
  setTimeout(() => shirt.remove(), (duration + delay) * 1000);
}

setInterval(createFloatingShirt, 500); // More natural interval
