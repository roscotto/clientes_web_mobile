// las funciones que sirven para interactuar con el chat

import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";


//Leyendo datos de Firestore en tiempo real

//Obtener la referencia de la colección. La funcion collection() recibe dos parametros: la instancia de Firestore y el nombre de la colección (path)
const refChat = collection(db, 'chats');

export function chatSaveMessage(data) {
    // Grabar datos en Firestore
    // llamamos a la funcion addDoc() y le pasamos dos parametros: la referencia a la colección y un objeto con los datos a grabar
    // la funcion retorna una promesa, por lo que podemos encadenarle un .then() para saber cuando se grabaron los datos
    return addDoc(refChat, data);
}

export function chatSubscribeToMessages(callback) {
    //La funcion onSnapshot() recibe dos parametros: la referencia a la colección y un callback que se ejecuta cada vez que hay un cambio en la colección.

    onSnapshot(refChat, snapshot => {
        //transformamos el snapshot en un array de objetos con los datos de cada documento

        const data = snapshot.docs.map(doc => {
            return {
                user: doc.data().user,
                message: doc.data().message
            };
        });

        // Invocamos al callback y le pasamos el array de mensajes

        callback(data);
    })};
