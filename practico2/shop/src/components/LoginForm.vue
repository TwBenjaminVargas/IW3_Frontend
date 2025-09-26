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
                      :error="wrongUserInput()"
                      :error-messages="wrongUserInput() ? 'Ingrese un correo electrónico válido' : ''"
                    >
                    </v-text-field>
                    <label for="passwordInput">Contraseña:</label>
                    <v-text-field
                      id="passwordInput"
                      v-model.trim="passwordInput"
                      placeholder="Contraseña"
                      type="password"
                      :error="wrongPasswordInput()"
                      :error-messages=" wrongPasswordInput()
                      ? 'La contraseña debe tener al menos 6 caracteres' : ''"
                    />
                </div>
      
            <v-btn
                :disabled="blockButtonCondition()"
                @click="loginButton"
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
    import { sessionService } from '@/services/sessionService';
    import {ref} from 'vue';
    import { useRouter } from 'vue-router';
    
    // references
    const userInput = ref('');
    const passwordInput = ref('');

    // router
    const router = useRouter();

    function wrongUserInput()
    {
        return userInput.value.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInput.value)
    }
    
    function wrongPasswordInput()
    {
        return passwordInput.value.length > 0 && passwordInput.value.length < 6
    }

    function blockButtonCondition()
    {
        return wrongPasswordInput() || wrongUserInput() || !userInput.value.trim() || !passwordInput.value.trim();
    }

    function loginButton()
    {
        sessionService.login(userInput.value.trim(),passwordInput.value.trim());
        router.push('/Home');
    }

</script>
