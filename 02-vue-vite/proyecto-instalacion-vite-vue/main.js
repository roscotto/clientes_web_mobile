// Import the functions you need from the SDKs you need

// import { chatSaveMessage, chatSubscribeToMessages } from "./src/services/chat";


// const salida = document.getElementById('salida');
// const formChat = document.getElementById('form-chat');
// const user = document.getElementById('user');
// const msj = document.getElementById('msj');

// formChat.addEventListener('submit', function (ev) {
//   ev.preventDefault();
//   const data = {
//     user: user.value,
//     message: msj.value
//   }


//   // Grabar datos en Firestore
//   // llamamos a la funcion addDoc() y le pasamos dos parametros: la referencia a la colección y un objeto con los datos a grabar
//   // la funcion retorna una promesa, por lo que podemos encadenarle un .then() para saber cuando se grabaron los datos

//   chatSaveMessage(data)
//     .then(() => {
//       user.value = '';
//       msj.value = '';
//     });

// })


// // Escuchar los cambios en la base de datos
// // messages = [{user: '', message: ''}]
// chatSubscribeToMessages((messages) => {
//   salida.innerHTML = messages.map(message =>
//                `<div>
//                     <div><b>Usuario: </b> ${message.user}</div>
//                     <div><b>Mensaje: </b> ${message.message}</div>
//                 </div>`).join('');
// });



// Creamos una aplicacion de Vue
import './src/main.css'; // Importamos el css
import { createApp } from 'vue';
import App from './src/App.vue';
import router from './src/router/router'; // Importamos el router de Vue

const app = createApp(App);

// Agregamos el router a la aplicación
app.use(router);

// Montamos la aplicacion en el elemento con id app

app.mount('#app');