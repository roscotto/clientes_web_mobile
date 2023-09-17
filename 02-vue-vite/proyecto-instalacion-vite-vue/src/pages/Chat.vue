<script>
import { chatSubscribeToMessages, chatSaveMessage } from "../services/chat";
import { dateToString } from "../helpers/date.js";
import BaseButton from "../components/BaseButton.vue";

export default {
    name: "Chat",
    data() {
        return {
            messages: [],
            newMessage: {
                user: "",
                message: ""
            }
        };
    },
    // métodos del componente
    methods: {
        // enviar mensaje
        sendMessage() {
            chatSaveMessage({
                user: this.newMessage.user,
                message: this.newMessage.message
                // tambien se puede escribir como: ...this.newMessage
            })
                .then(() => {
                this.newMessage.message = ""; // limpiamos el campo de mensaje
            });
        },
        // formatear la fecha
        formatDate(date) {
            return dateToString(date);
        }
    },
    mounted() {
        chatSubscribeToMessages(messages => {
            this.messages = messages;
        });
    },
    components: { BaseButton }
};

</script>

<template>
  <h1 class="mb-4 text-3xl font-bold">Intro a Firestore</h1>
  <p class="mb-3">Leyendo los mensajes del chat, en tiempo real</p>
  
  <div class="flex gap-4 justify-between">
    <div>
      <div 
        class="mb-2" 
        v-for="message in messages"
        :key="message.id"
      >
        <div><b>Usuario:</b> {{ message.user }}</div>
        <div><b>Mensaje:</b> {{ message.message }}</div>
        <div class="text-right"> {{ formatDate(message.created_at) }}</div>
      </div>
    </div>

    <div id="contenedor">
      <div id="caja-chat">
        <div id="chat"></div>
      </div>
      <form method="POST" action="#" id="form-chat" @submit.prevent="sendMessage">
        <div class="mb-2">
          <label class="block font-bold mb-1" for="user">Usuario:</label>
          <input  class="border border-gray-500 rounded p-2 w-full" id="user" type="text" name="user" v-model="newMessage.user" />
        </div>
        <div class="mb-2">
          <label class="block font-bold mb-1" for="message">Mensaje:</label>
          <textarea class="border border-gray-500 rounded p-2 w-full"  id="message" name="message" v-model="newMessage.message"></textarea>
        </div>
        
        <BaseButton>Enviar</BaseButton>

      </form>
    </div>
  </div>
</template>
