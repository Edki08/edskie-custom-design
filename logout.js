// logout.js
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { firebaseConfig } from "./firebase-config.js";

// Initialize Firebase if not already initialized
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Call this function on logout button click
export function logoutUser() {
  signOut(auth)
    .then(() => {
      window.location.href = "login.html";
    })
    .catch((error) => {
      console.error("Logout error:", error);
    });
}
