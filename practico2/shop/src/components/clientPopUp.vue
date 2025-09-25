<template>
    <v-fade-transition>
        <v-alert
            title="¡Exito!"
            type="success"
            v-show="popUp"
            class="position-fixed"
        >
            ¡Bienvenido/a {{client}}!

        </v-alert>
    </v-fade-transition>
</template>

<script setup>
    import { defineProps, defineEmits, watch} from 'vue';
    import { ALERT_DURATION } from '@/config/config';

    const props = defineProps({
        popUp: Boolean,
        client: String
    })


    const emit = defineEmits(['update:popUp'])

    function closePopUp()
    {
      emit('update:popUp', false)
    }

    watch(
        () => props.popUp,
        (val) => 
        {
            if (val) 
            {
                setTimeout(closePopUp, ALERT_DURATION)
            }
        }
    )
</script>