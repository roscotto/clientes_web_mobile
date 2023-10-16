// en este archivo definimos los servicios de firebase que vamos a utilizar en nuestra app y va a exportarlos para ser consumidos por otros servicios

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration 
// configuracion de variables de entorno
const firebaseConfig = {
  apiKey: "AIzaSyD0gxCvDjSluyWrNM-A8sv9NwmOhaEDOg4",
  authDomain: "clientes-web-2023-davinci.firebaseapp.com",
  projectId: "clientes-web-2023-davinci",
  storageBucket: "clientes-web-2023-davinci.appspot.com",
  messagingSenderId: "384231176118",
  appId: "1:384231176118:web:ab1d64647a3e8e70a1b317"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//Obtener la instancia de Firestore (referencia a la base de datos)
export const db = getFirestore(app);

// exporto app y db para que puedan ser consumidos por otros archivos

// Obtener la instancia de Auth (referencia a la autenticación)
export const auth = getAuth(app);