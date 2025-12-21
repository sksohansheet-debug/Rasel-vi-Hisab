import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCStzciZf209vQU2OB9ryQHIoERm2gBwkU",
  authDomain: "rasel-vi.firebaseapp.com",
  databaseURL: "https://rasel-vi-default-rtdb.firebaseio.com",
  projectId: "rasel-vi",
  storageBucket: "rasel-vi.firebasestorage.app",
  messagingSenderId: "343245468524",
  appId: "1:343245468524:web:23faa2b3f7f21833a63949",
  measurementId: "G-F94S95MCB3"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
