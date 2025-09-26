<template>
    <div 
        class="d-flex flex-column justify-center align-center bg-cyan-lighten-5 rounded-lg overflow-hidden elevation-10"
        style="width: 40vw;
        height: 60vh;"
    >
        <span class="text-h1 text-bold mt-2">Shop!</span>
        <div 
            class="d-flex flex-column flex-grow-1 justify-center"
            style="width: 90%;"
            >
                <span
                    class="text-center mb-4 text-teal text-h4"
                >
                    Iniciar Sesión
                </span>
      
                <div class="mb-4">
                    <label for="Usuario">Email:</label>
                    <v-text-field
                      id="name"
                      autocomplete="off"
                      v-model.trim="userInput"
                      placeholder="Email"
                      :error="userInput.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInput)"
                      :error-messages="userInput.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInput) 
                      ? 'Ingrese un correo electrónico válido' : ''"
                    >
                    </v-text-field>
                    <label for="passwordInput">Contraseña:</label>
                    <v-text-field
                      id="passwordInput"
                      v-model.trim="passwordInput"
                      placeholder="Contraseña"
                      type="password"
                      :error="passwordInput.length > 0 && passwordInput.length < 6"
                      :error-messages="passwordInput.length > 0 && passwordInput.length < 6 
                      ? 'La contraseña debe tener al menos 6 caracteres' : ''"
                    />
                </div>
      
            <v-btn
                :disabled="userInput.length < 3"
                @click="registerClientButton"
                class="bg-teal align-self-center"
                rounded="pill"
                style="width: 60%;"
            >
                Ingresar
            </v-btn>
        </div>
    </div>
</template>

<script setup>
    import {ref} from 'vue';
    const userInput = ref('');
    const passwordInput = ref('');

</script>
