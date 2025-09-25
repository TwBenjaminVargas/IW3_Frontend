<template>
    <div v-if="product" class="bg-error">
        <span>Detalles del producto</span>
        <v-img :src="product.image"/>
        <div>
            <span>Nombre: {{ product.name }}</span>
            <span>Stock disponible: {{ product.name }}</span>
        </div>
    </div>
    <div v-else>
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
    import { NOT_FOUND } from '@/config/resource';
    const route = useRoute();

    const product = ref(productService.findProductById(Number(route.params.id)));

</script>