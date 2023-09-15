<script>
import Chat from "./pages/Chat.vue";

export default {
  name: "App",
  components: {
    Chat,
  },
};
</script>

<template>
  <!--
    Acá va a venir el renderizado de las rutas cuando agreguemos Vue Router.
    Mientras tanto vamos a renderizar la "vista" del chat
    -->
  <div class="container m-auto p-4">
    <Chat />
  </div>
</template>
