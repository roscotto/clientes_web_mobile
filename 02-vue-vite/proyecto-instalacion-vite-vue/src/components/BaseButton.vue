<script>
export default {
    name: 'BaseButton',
}
</script>

<template>
    <button class="bg-blue-700 text-white p-1.5 rounded-xl w-full hover:bg-blue-600 shadow-sm active:bg-blue-800 transition motion-reduce:transition-none motion-reduce:hover:transform-none " type="submit" name="enviar" value="Enviar">
    
        <slot>Enviar</slot>
    </button>
</template>
