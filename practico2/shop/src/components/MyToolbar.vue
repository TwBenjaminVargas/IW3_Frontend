<template>
    <v-toolbar class="text-white bg-teal">
        
        <v-toolbar-title 
            text="Shop!"
            class="text-h5 font-weight-bold">
        </v-toolbar-title>
        <v-icon class="mr-2">mdi-account</v-icon>
        <span class="font-weight-bold">{{sessionService.getSessionUserMail()}}</span>
        <v-btn 
            icon="mdi-logout"
            @click="logOutButton"
            size="x-large">
        </v-btn>
        <v-btn 
            icon="mdi-cart-outline"
            :class="drawer ? 'bg-error': ''"
            @click="drawer = !drawer"
            size="x-large">
        </v-btn>
        
        <template v-slot:extension>
            <v-tabs>
                <v-tab text="Inicio"></v-tab>
                <v-tab text="Productos" :to="{ name: 'Products' }"></v-tab>
                <v-tab text="Clientes" :to="{ name: 'Clients' }"></v-tab>
            </v-tabs>
        </template>
    </v-toolbar>
    <v-slide-x-transition>
        <Cart v-if="drawer"
            class="position-fixed mt-15 elevation-10"
            style="z-index: 100;
            height:80vh;"
        >  
        </Cart>
    </v-slide-x-transition>
</template>

<script setup>
    import { sessionService } from '@/services/sessionService';
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    
    // references
    const drawer = ref(false);

    // router
    const router = useRouter();

    function logOutButton()
    {
        sessionService.logout();
        router.push("/login")

    }
</script>
