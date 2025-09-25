<template>
    <clientPopUp v-model:popUp="popUp" :client="clientName"/>
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
                    Registro de Clientes
                </span>
      
                <div class="mb-4">
                    <label for="name">Nombre del Cliente:</label>
                    <v-text-field
                      id="name"
                      autocomplete="off"
                      v-model.trim="inputValue"
                      placeholder="Ingresa un nombre"
                      :error="inputValue.length > 0 && inputValue.length < 3"
                      :error-messages="inputValue.length > 0 && inputValue.length < 3 ? 
                          'El nombre debe tener al menos 3 caracteres' : ''"
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
    import { clientService } from '@/services/clientService';

    const inputValue = ref('');
    const popUp = ref(false);
    const clientName = ref('');

    function registerClientButton()
    {
        clientName.value = inputValue.value
        clientService.saveClientData(inputValue.value);
        popUp.value = true;
        clearInput();
    }

    function clearInput() 
    {
        inputValue.value = '';
    }
</script>