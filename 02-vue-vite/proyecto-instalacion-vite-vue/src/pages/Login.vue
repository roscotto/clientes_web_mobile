<script>
import BaseButton from '../components/BaseButton.vue';
import BaseInput from '../components/BaseInput.vue';
import BaseLabel from '../components/BaseLabel.vue';
import { login } from '../services/auth.js';

export default {
    name: 'Login',
    components: { BaseButton, BaseLabel, BaseInput },
    emits: ['login'],
    data() {
        return {
            loginLoading:false,
            form: {
                email: '',
                password: '',
            }
        }
    },
    methods: {
        doLogin() {
            this.loginLoading = true;

            login({
                //email: this.form.email,
                //password: this.form.password,
                ...this.form //copiar todo lo que tiene el objeto form
            })
            .then(user => {
                this.$emit('login', {...user});
            })
            .finally(() => {
                this.loginLoading = false;
            })
        }
    }
}

</script>

<template>
    <h1 class="mb-4 text-3xl font-bold">Ingresar a mi cuenta</h1>

    <form 
        action="#"
        @submit.prevent="doLogin">
        <div class="mb-2">
            <BaseLabel for="email">Email</BaseLabel>
            <BaseInput 
                type="email"
                id="email"
                v-model="form.email"
            />
        </div>
        <div class="mb-2">
            <BaseLabel for="password">Contraseña</BaseLabel>
            <BaseInput
                type="password"
                name="password"
                id="password"
                v-model="form.password"
            />
        </div>

        <BaseButton>Iniciar Sesión</BaseButton>
    </form>
</template>
