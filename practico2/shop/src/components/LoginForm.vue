<template>
    <div 
        class="d-flex flex-column justify-center align-center bg-cyan-lighten-5 rounded-lg overflow-hidden elevation-10"
        style="width: 45vw;
        height: 40vh;"
    >
        <div 
            class="d-flex flex-column w-90 flex-grow-1 justify-center"
            >
                <span
                    class="text-center mb-4 text-teal text-h3"
                >
                    Iniciar Sesión
                </span>
      
                <div class="mb-4">
                    <label for="Usuario">Nombre del Cliente:</label>
                    <v-text-field
                      id="name"
                      autocomplete="off"
                      v-model.trim="inputValue"
                      placeholder="Email"
                      :error="inputValue.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue)"
                      :error-messages="inputValue.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue) 
                      ? 'Ingrese un correo electrónico válido' : ''"
                    >
                    </v-text-field>
            </div>
      
            <v-btn
                :disabled="inputValue.length < 3"
                @click="registerClientButton"
                class="bg-teal"
                rounded="pill"
            >
                Registrar
            </v-btn>
        </div>
    </div>
</template>

<script setup>
    import {ref} from 'vue';
    const inputValue = ref('');

</script>
