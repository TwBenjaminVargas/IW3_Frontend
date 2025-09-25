<template>

  <v-container
    class="bg-cyan-lighten-5 rounded-lg d-flex flex-column"
    height="80vh"
    width="70vw">
    
    <!-- Search -->
    <v-text-field
      label="Buscar"
      variant="outlined"
      prepend-inner-icon="mdi-magnify"
      v-model="search"
      style="max-height: 56px"
    />

    <!-- Empty product list -->
    <v-container
      v-if="products.length=== 0"
      class="d-flex flex-column align-center justify-center text-center"
      style="min-height: 300px;" 
    >
      <v-img
        src="https://cdn-icons-png.freepik.com/512/7486/7486744.png"
        width="150"
        height="150"
        style="filter: grayscale(100%);"
        />
      <span class="text-h5 mb-3">No hay productos disponibles</span>
    </v-container>

    <!-- Not results on search -->
    <v-container
      v-else-if="filteredProducts.length=== 0 && search.length > 0"
      class="d-flex flex-column align-center justify-center text-center"
      style="min-height: 300px;" 
    >
      <v-img
        src="https://www.store.pcimage.com.my/catalog/view/theme/aio/img/not_found.png"
        width="150"
        height="150"
        style="filter: grayscale(100%);"
        />
      <span class="text-h5 mb-3">Sin resultados para la busqueda</span>
    </v-container>

    <!-- Products List -->
    <v-list v-else class="overflow-y flex-grow-1 bg-cyan-lighten-5">
      <ProdutListItem
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </v-list>

</v-container>

</template>

<script setup>

  import { ref, onMounted, computed } from 'vue';
  import ProdutListItem from './ProdutListItem.vue';
  import { productService } from '@/services/productService';

  // reactive references
  const search = ref('');
  const products = ref([]);

  onMounted(getProductList)

  function getProductList()
  {
    products.value = productService.getProducts();
  }

  // Computed property to filter products based on search input
  const filteredProducts = computed(() => {
    if (!search.value) return products.value
    return products.value.filter(product =>
      product.name.toLowerCase().includes(search.value.toLowerCase())
    )
  })

</script>