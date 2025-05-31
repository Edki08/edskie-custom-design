// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBoQ7EFp1D1vpzUzNzzcP9H5ytcuMeOJVs",
  authDomain: "edskie-custom-design.firebaseapp.com",
  projectId: "edskie-custom-design",
  storageBucket: "edskie-custom-design.appspot.com",
  messagingSenderId: "664794472954",
  appId: "1:664794472954:web:1cf14f28c738439c488443",
  measurementId: "G-LG1GT0J7JD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
