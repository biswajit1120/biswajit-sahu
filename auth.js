import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "./firebase.js";

// Sign Up
const signupBtn = document.getElementById("signupBtn");
if (signupBtn) {
  signupBtn.onclick = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully!");
      const params = new URLSearchParams(window.location.search);
const redirect = params.get("redirect") || "index.html";
window.location.href = redirect;
    } catch (e) {
      alert(e.message);
    }
  };
}

// Login
const loginBtn = document.getElementById("loginBtn");
if (loginBtn) {
  loginBtn.onclick = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful!");
       const params = new URLSearchParams(window.location.search);
  const redirect = params.get("redirect") || "index.html";
      window.location.href = redirect;
    } catch (e) {
      alert(e.message);
    }
  };
}

// Logout
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.onclick = async () => {
    await signOut(auth);
    window.location.href = "login.html";
  };
}

// Protect pages
onAuthStateChanged(auth, (user) => {
  const protectedPages = [
    "lt-panel.html",
    "ht-panel.html",
    "apfc-panel.html",
    "autocad-sld.html"
  ];

  const page = window.location.pathname.split("/").pop();

  if (protectedPages.includes(page) && !user) {
    window.location.href = "login.html";
  }
});
