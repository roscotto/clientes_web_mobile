<script>
export default {
    name: 'BaseTextArea',
    props: ['modelValue'], // el valor que se va a recibir
    emits: ['update:modelValue'], // el evento que se va a emitir
}
</script>

<template>
    <textarea 
        class="border border-gray-500 rounded p-2 w-full" 
        :value = "modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    >     
    </textarea>
</template>