<script>
import BaseButton from '../components/BaseButton.vue';

export default {
    name: 'Register',
    components: { BaseButton }
}
</script>

<template>
    <h1 class="mb-4 text-3xl font-bold">Crear cuenta en DV Chat</h1>

    <form action="#">
        <div class="mb-2">
            <label for="email" class="block font-bold mb-1">Email</label>
            <input type="email" id="email" class="border border-gray-500 rounded p-2 w-full">
        </div>
        <div class="mb-2">
            <label for="password" class="block font-bold mb-1">Contraseña</label>
            <input type="password" name="password" id="password" class="border border-gray-500 rounded p-2 w-full">
        </div>
        <!-- <button type="submit" class="bg-blue-700 text-white p-1.5 rounded-xl w-full">Crear Cuenta</button> -->
        <BaseButton />
    </form>
</template>
