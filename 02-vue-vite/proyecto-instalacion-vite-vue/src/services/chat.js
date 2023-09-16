// las funciones que sirven para interactuar con el chat

import { addDoc, collection, onSnapshot, serverTimestamp, query, orderBy } from "firebase/firestore";
import { db } from "./firebase";
import { dateToString } from "../helpers/date";

//Leyendo datos de Firestore en tiempo real

//Obtener la referencia de la colección. La funcion collection() recibe dos parametros: la instancia de Firestore y el nombre de la colección (path)
const refChat = collection(db, 'chats');

export function chatSaveMessage(data) {
    // Grabar datos en Firestore
    // llamamos a la funcion addDoc() y le pasamos dos parametros: la referencia a la colección y un objeto con los datos a grabar
    // la funcion retorna una promesa, por lo que podemos encadenarle un .then() para saber cuando se grabaron los datos

    return addDoc(refChat, {
        ...data, //
        created_at: serverTimestamp(), // le pide a Firebase que agregue la fecha y hora del servidor
    });
}

export function chatSubscribeToMessages(callback) {
    //La funcion onSnapshot() recibe dos parametros: la referencia a la colección y un callback que se ejecuta cada vez que hay un cambio en la colección.

    // ordenar mensajes por su fecha de creación
    // funcion query() recibe dos parametros: la referencia a la colección y una lista de condiciones de filtrado y ordenamiento
    const q = query(refChat, orderBy('created_at'));

    onSnapshot(q, snapshot => {
        //transformamos el snapshot en un array de objetos con los datos de cada documento

        const data = snapshot.docs.map(doc => {
            return {
                user: doc.data().user,
                message: doc.data().message,
                created_at: doc.data().created_at.toDate(),
            };
        });

        // Invocamos al callback y le pasamos el array de mensajes

        callback(data);
    })};

