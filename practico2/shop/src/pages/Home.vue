
<template>
    <div
        class="fill-height d-flex flex-column justify-center align-center teal-lighten-5"
        :style="{
        backgroundImage: `url(${BACKGROUND_IMG_URL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw'
        }"
    >

        <v-card class="pa-8 bg-teal rounded-lg elevation-12 text-center"
            style="max-width: 600px;"
        >

        <v-card-title
            class="text-h3 text-white font-weight-bold mb-4"
        >
            Shop!
        </v-card-title>


        <v-card-text
            class="text-h5 text-white"
        >
          ¡Bienvenido de nuevo a la tienda!
        </v-card-text>
        <v-card-text
            class="text-h6 text-white mt-2"
        >
          ¡Qué bueno es volver a verte!
        </v-card-text>

          <v-row class="mt-6 justify-center" dense>
            <v-icon size="36" color="white">mdi-cart</v-icon>
            <v-icon size="36" color="white" class="mx-4">mdi-heart</v-icon>
            <v-icon size="36" color="white">mdi-star</v-icon>
          </v-row>
        </v-card>
    </div>
</template>

<script setup lang="ts">

import { BACKGROUND_IMG_URL } from '@/config/resource';

</script>