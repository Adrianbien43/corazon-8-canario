// Importar Firebase y los servicios necesarios
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Para Realtime Database
import { getAuth } from "firebase/auth"; // Para autenticación
import { getStorage } from "firebase/storage"; // Para almacenar archivos

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBY1_dusaHlIfTkrdUgvd5wHbyLdDVprZ8",
  authDomain: "chat-3d4d8.firebaseapp.com",
  databaseURL: "https://chat-3d4d8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chat-3d4d8",
  storageBucket: "chat-3d4d8.appspot.com", // Aquí corriges el error de storage
  messagingSenderId: "814987337472",
  appId: "1:814987337472:web:f62f9934f5d0a745f0dde5",
  measurementId: "G-RQTC04TNS5"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app); // Exportar la base de datos
export const auth = getAuth(app); // Exportar autenticación
export const storage = getStorage(app); // Exportar almacenamiento
export default app;
