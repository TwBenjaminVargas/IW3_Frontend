<template>
    <v-toolbar class="text-white bg-teal">
        
        <v-toolbar-title text="Shop!" class="text-h5"></v-toolbar-title>
        <v-btn icon="mdi-cart-outline" size="x-large"></v-btn>
        
        <template v-slot:extension>
            <v-tabs>
                <v-tab text="Inicio"></v-tab>
                <v-tab text="Productos" :to="{ name: 'Products' }"></v-tab>
                <v-tab text="Clientes" :to="{ name: 'Clients' }"></v-tab>
            </v-tabs>
        </template>
    </v-toolbar>
</template>