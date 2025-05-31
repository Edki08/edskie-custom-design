import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value.trim();
  const message = document.getElementById("login-message");

  try {
    await signInWithEmailAndPassword(auth, email, password);
    message.textContent = "✅ Login successful!";
    message.style.color = "lightgreen";
  } catch (error) {
    message.textContent = `❌ ${error.message}`;
    message.style.color = "salmon";
  }
});
