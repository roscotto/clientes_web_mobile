<script>
import Loader from './Loader.vue';

export default {
    name: 'BaseButton',
    components: { Loader },
    props: {
        loading: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<template>
    <button
        class="bg-blue-700 text-white p-1.5 rounded-xl w-full hover:bg-blue-600 shadow-sm active:bg-blue-800 disabled:bg-blue-400 transition motion-reduce:transition-none motion-reduce:hover:transform-none "
        type="submit" name="enviar" value="Enviar" :disabled="loading">
        <template v-if="!loading">
            <slot>Enviar</slot>
        </template>
        <template v-else>
            <slot>
                <Loader />
            </slot>
        </template>
    </button>
</template>
