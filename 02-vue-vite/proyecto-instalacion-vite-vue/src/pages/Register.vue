<script>
import BaseButton from '../components/BaseButton.vue';
import BaseInput from '../components/BaseInput.vue';
import BaseLabel from '../components/BaseLabel.vue';

export default {
    name: 'Register',
    components: { BaseButton, BaseLabel, BaseInput }
}
</script>

<template>
    <h1 class="mb-4 text-3xl font-bold">Crear cuenta en DV Chat</h1>

    <form action="#">
        <div class="mb-2">
            <BaseLabel for="email">Email</BaseLabel>
            <BaseInput type="email" id="email" />
        </div>
        <div class="mb-2">
            <BaseLabel for="password">Contraseña</BaseLabel>
            <BaseInput type="password" name="password" id="password" />
        </div>

        <BaseButton>Crear Cuenta</BaseButton>
    </form>
</template>
