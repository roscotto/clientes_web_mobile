<script>
import { chatSubscribeToMessages, chatSaveMessage } from "../services/chat";

export default {
  name: "Chat",
  data() { // data es una función que retorna un objeto
    return {
      messages: [],
      newMessage: {
        user: "",
        message: ""
      }
    }
  },
  // métodos del componente
  methods: {
    sendMessage() {
      chatSaveMessage({
        user: this.newMessage.user,
        message: this.newMessage.message
        // tambien se puede escribir como: ...this.newMessage
      })
      .then(() => {
        this.newMessage.message = ""; // limpiamos el campo de mensaje
      });
    }

  },

  mounted() {  //funcion del ciclo de vida, se ejecuta cuando el componente se monta 
    chatSubscribeToMessages(messages => {
      this.messages = messages;
    });

  }
};

</script>

<template>
  <h1>Intro a Firestore</h1>
  <p>Leyendo los mensajes del chat, en tiempo real</p>
  <div id="contenedor">
    <div id="caja-chat">
      <div id="chat"></div>
    </div>
    <form method="POST" action="#" id="form-chat" @submit.prevent="sendMessage">
      <div>
        <label for="user">Usuario:</label>
        <input id="user" type="text" name="user" v-model="newMessage.user" />
      </div>
      <div>
        <label for="message">Mensaje:</label>
        <textarea id="message" name="message" v-model="newMessage.message"></textarea>
      </div>
      <input type="submit" name="enviar" value="Enviar" />
    </form>
  </div>
  <div>
    <div v-for="message in messages">
      <div><b>Usuario:</b> {{ message.user }}</div>
      <div><b>Mensaje:</b> {{ message.message }}</div>
    </div>

  </div>
</template>
