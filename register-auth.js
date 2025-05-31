import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

document.getElementById("register-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("register-message");

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    message.textContent = "✅ Registration successful!";
    message.style.color = "lightgreen";
  } catch (error) {
    message.textContent = `❌ ${error.message}`;
    message.style.color = "salmon";
  }
});
