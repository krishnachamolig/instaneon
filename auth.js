// auth.js

// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import { firebaseConfig } from './firebase-config.js';  // Import Firebase config

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Register function
window.register = function() {
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-pass').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            alert("User registered!");
        })
        .catch(error => {
            alert("Error: " + error.message);
        });
};

// Login function
window.login = function() {
    const email = document.getElementById('log-email').value;
    const password = document.getElementById('log-pass').value;

    signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            alert("Logged in!");
        })
        .catch(error => {
            alert("Error: " + error.message);
        });
};

// Logout function
window.logout = function() {
    signOut(auth)
        .then(() => {
            alert("Logged out");
        })
        .catch(error => {
            alert("Error: " + error.message);
        });
};
