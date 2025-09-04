<template>
    <transition name="fade">
        <div v-if="modelValue" class="toast position-fixed top-0 start-50 translate-middle-x show popup-large">
            <div class="toast-header bg-success text-white fw-bold fs-4">
                ¡Éxito!
            </div>
            <div class="toast-body fs-5">
                Cliente registrado exitosamente.
            </div>
        </div>
  </transition>
</template>

<script setup>

    const NOTIFICATION_DURATION = 1200;

    import { defineProps, defineEmits, watch} from 'vue';

    const props = defineProps({
        modelValue: {
            type: Boolean
        }});

    const emit = defineEmits(['update:modelValue'])

    function closePopUp()
    {
      emit('update:modelValue', false)
    }

    watch(
        () => props.modelValue,
        (val) => 
        {
            if (val) 
            {
                setTimeout(closePopUp, NOTIFICATION_DURATION)
            }
        }
    )

</script>

<style scoped>
/* Tamaño más grande del popup */
.popup-large {
  min-width: 400px;
  max-width: 600px;
  padding: 1.5rem 2rem;
  border-radius: 15px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.4);
  text-align: center;
  z-index: 1000;
}

/* Transición suave */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>