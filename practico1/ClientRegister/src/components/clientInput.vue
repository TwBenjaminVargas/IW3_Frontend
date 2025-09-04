<template>
    <PopUp v-model="popUp"/>
    <div class="d-flex justify-content-center align-items-center vh-100">
        <div class="card shadow-lg p-5 rounded-4 bg-light" style="width: 70%; max-width: 600px;">
            <h2 class="text-center mb-4 text-success fw-bold">Registro de Clientes</h2>
      
            <div class="mb-4">
                <label for="name" class="form-label fs-4">Nombre del Cliente:</label>
                <input
                  id="name"
                  v-model.trim="inputValue"
                  type="text"
                  class="form-control form-control-lg rounded-pill"
                  placeholder="Ingresa un nombre"
                />
            </div>
      
            <button
                class="btn btn-success btn-lg w-100 rounded-pill fw-bold fs-4"
                :disabled="!inputValue"
                @click="saveClientData"
            >Registrar
            </button>
        </div>
    </div>
</template>

<script setup>
    import {ref} from 'vue';
    import PopUp from './popUp.vue';

    const inputValue = ref('');
    const popUp = ref(false);

    const CLIENTS_LIST_KEY = 'clientsList';
    
    function saveClientData() 
    {
        updateClientsList()
        clearInput();
        popUp.value = true;
    }

    function updateClientsList() 
    {
        if (ClientsListExists()) 
        {
            const clientsList = getClientsList();
            clientsList.push(inputValue.value);
            localStorage.setItem(CLIENTS_LIST_KEY, JSON.stringify(clientsList));
        } 
        else 
        {
            createClientsList(inputValue.value);
        }
    }

    function ClientsListExists() 
    {
        if (localStorage.getItem(CLIENTS_LIST_KEY)) 
        {
            return true;
        }
        return false;
    }

    function createClientsList(first) 
    {
        const clientsList = [first];
        localStorage.setItem(CLIENTS_LIST_KEY, JSON.stringify(clientsList));
    }
    
    function getClientsList() 
    {
        const clientsList = JSON.parse(localStorage.getItem(CLIENTS_LIST_KEY));
        return clientsList;
    }

    function clearInput() 
    {
        inputValue.value = '';
    }
</script>