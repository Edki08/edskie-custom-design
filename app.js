function createShirtEmoji() {
  const emoji = document.createElement("div");
  emoji.classList.add("falling-shirt");
  emoji.innerText = "👕";

  // Start at a random horizontal position
  emoji.style.left = `${Math.random() * 100}vw`;

  // Random animation duration and speed
  const duration = 6 + Math.random() * 6; // between 6–12 seconds
  emoji.style.animationDuration = `${duration}s`;

  // Add slight drift using random rotation angle and animation delay
  emoji.style.animationDelay = `${Math.random() * 3}s`;
  emoji.style.transform = `rotate(${Math.random() * 360}deg)`;

  document.body.appendChild(emoji);

  // Remove after animation ends
  setTimeout(() => emoji.remove(), duration * 1000);
}

setInterval(createShirtEmoji, 500);
