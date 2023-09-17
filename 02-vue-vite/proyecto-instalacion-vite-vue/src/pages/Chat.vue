<script>
import { chatSubscribeToMessages, chatSaveMessage } from "../services/chat";
import { dateToString } from "../helpers/date.js";
import BaseButton from "../components/BaseButton.vue";
import BaseLabel from "../components/BaseLabel.vue";
import BaseInput from "../components/BaseInput.vue";
import BaseTextArea from "../components/BaseTextArea.vue";
import Loader from "../components/Loader.vue";

export default {
  name: "Chat",
  data() {
    return {
      messagesLoading: true,
      messages: [],
      newMessageSaving: false,
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
      if(this.newMessageSaving) return; // si se está guardando, no hacer nada (para evitar que se envíe varias veces)
      this.newMessageSaving = true;
      chatSaveMessage({
        user: this.newMessage.user,
        message: this.newMessage.message
        // tambien se puede escribir como: ...this.newMessage
      })
        .then(() => {
          this.newMessage.message = ""; // limpiamos el campo de mensaje
          this.newMessageSaving = false;
        });
    },

    // formatear la fecha
    formatDate(date) {
      return dateToString(date);
    }
  },

  mounted() {
    this.messagesLoading = true;
    chatSubscribeToMessages(messages => {
      this.messages = messages;
      this.messagesLoading = false;
    });
  },
  components: { BaseButton, BaseLabel, BaseInput, BaseTextArea, Loader }
};

</script>

<template>
  <h1 class="mb-4 text-3xl font-bold">Intro a Firestore</h1>
  <p class="mb-3">Leyendo los mensajes del chat, en tiempo real</p>

  <div class="flex gap-4 justify-between">
    <div>
      <template v-if="messagesLoading">
        <Loader />
      </template>
      <template v-else-if="messages.length === 0">
        <p>No hay mensajes</p>
      </template>
      <div class="mb-2" v-for="message in messages" :key="message.id">
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
          <BaseLabel for="user">Usuario:</BaseLabel>
          <BaseInput id="user" type="text" name="user" v-model="newMessage.user" />

        </div>
        <div class="mb-2">
          <BaseLabel for="message">Mensaje:</BaseLabel>
          <BaseTextArea id="message" name="message" v-model="newMessage.message">
          </BaseTextArea>
        </div>

        <BaseButton 
          :loading="newMessageSaving"
        />

      </form>
    </div>
  </div>
</template>
