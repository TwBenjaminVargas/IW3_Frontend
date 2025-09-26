<template>
    <div v-if="product"
     class="text-center d-flex flex-column align-center justify-center rounded-xl elevation-12 pa-6"
     style="width: 60vw;
     min-height: 70vh;
     max-width: 800px;
     margin: auto;"
     :style="{
      backgroundImage: `url(${BACKGROUND_IMG_URL_ALT})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }">
    
    <span class="text-h2 font-weight-bold mb-4 text-teal-darken-4">Detalles del producto</span>

    <v-img
        :src="product.image"
        width="300"
        height="300"
        class="mb-6 rounded-lg elevation-4"
        contain
    />

    <div class="d-flex flex-column align-center text-h4 font-weight-medium text-teal-darken-4"
        style="gap: 12px;"
    >
        <span>{{ product.name }}</span>
        <span class="text-h5 text--primary">${{ product.price }}</span>
        
        <span v-if="product.stock === 0"
            class="text-white font-weight-bold text-h6 px-4 py-2 rounded-pill bg-error"
        >
            Agotado
        </span>
        <span v-else
            class="text-white font-weight-bold text-h6 px-4 py-2 rounded-pill bg-success"
        >
            Disponible: {{ product.stock }} unidades
        </span>
    </div>
</div>
    <div v-else
        class="bg-teal rounded-xl"
        style="height: 80vh;
        width: 70vw;">
    <v-empty-state
        headline="Error"
        title="Producto no encontrado"
        text="El producto que buscas no existe"
        :image="NOT_FOUND"
    >
    </v-empty-state>

    </div>
</template>
<script setup>
    import { ref } from 'vue';
    import { useRoute } from 'vue-router'
    import { productService } from '@/services/productService'
    import { NOT_FOUND, BACKGROUND_IMG_URL_ALT } from '@/config/resource';
    const route = useRoute();

    const product = ref(productService.findProductById(Number(route.params.id)));

</script>