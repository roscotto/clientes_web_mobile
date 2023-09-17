<script>
import BaseButton from '../components/BaseButton.vue';
import BaseLabel from '../components/BaseLabel.vue';

export default {
    name: 'Login',
    components: { BaseButton, BaseLabel }
}
</script>

<template>
    <h1 class="mb-4 text-3xl font-bold">Ingresar a mi cuenta</h1>

    <form action="#">
        <div class="mb-2">
            <BaseLabel for="email">Email</BaseLabel>
            <input type="email" id="email" class="border border-gray-500 rounded p-2 w-full">
        </div>
        <div class="mb-2">
            <BaseLabel for="password">Contraseña</BaseLabel>
            <input type="password" name="password" id="password" class="border border-gray-500 rounded p-2 w-full">
        </div>
       
        <BaseButton>Iniciar Sesión</BaseButton>
    </form>
</template>
