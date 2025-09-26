<template>
    <v-toolbar class="text-white bg-teal">
        
        <v-toolbar-title text="Shop!" class="text-h5"></v-toolbar-title>
        <v-btn icon="mdi-cart-outline" :class="drawer ? 'bg-error': ''" @click="drawer = !drawer" size="x-large"></v-btn>
        
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
    import { ref } from 'vue';
    
    const drawer = ref(false);
</script>
