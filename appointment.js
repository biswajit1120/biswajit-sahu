import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const bookBtn = document.getElementById("bookBtn");

if (bookBtn) {
  bookBtn.onclick = async () => {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !date || !time) {
      alert("Please fill all required fields.");
      return;
    }

    try {

      await addDoc(collection(db, "appointments"), {
        name: name,
        email: email,
        date: date,
        time: time,
        message: message,
        status: "Pending",
        createdAt: serverTimestamp()
      });

      alert("✅ Appointment booked successfully!");

      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("date").value = "";
      document.getElementById("time").value = "";
      document.getElementById("message").value = "";

    } catch (error) {
      alert(error.message);
      console.error(error);
    }

  };
}
