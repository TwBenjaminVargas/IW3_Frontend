<template>

    <v-list-item :class="product.stock === 0 ? 'bg-red-lighten-4' : ''" class="rounded-lg">
      <v-row class="align-center">
        
        <!-- Product image-->
        <v-col cols="auto">
          <v-img :src="product.image" width="200" height="200"/>
        </v-col>

        <!-- Product details -->
        <v-col>
          <v-list-item-title class="text-h5 mb-3">{{ product.name }}</v-list-item-title>
          <v-list-item-subtitle class="text-h6">${{ product.price }}</v-list-item-subtitle>
        </v-col>

        <!-- Add to cart button or out of stock message -->
        <v-col cols="auto">
          <v-btn
            prepend-icon=""
            v-if="product.stock > 0"
            :color="inCart ? 'blue-grey-lighten-3': 'teal'"
            variant="flat"
            @click="addToCartButton"
          >
            {{ inCart ? 'Quitar del carrito' : 'Añadir al carrito' }}
          </v-btn>
          
          <v-chip
            v-else
            variant="flat"
            color="red lighten-2"
          >
            Sin stock
          </v-chip>
        </v-col>

      </v-row>
    </v-list-item>

</template>


<script setup>
  
  import { defineProps, computed } from 'vue'
  import { cartService } from '@/services/cartService'

  //properties
  const props = defineProps({product: Object});

  //computed
  const inCart = computed(() => cartService.isInCart(props.product.id))


  function addToCartButton()
  {
    if(inCart.value)
      cartService.removeFromCart(props.product.id);
    else
      cartService.addToCart(props.product);
    
    toggleAddToCartButton();

  }
  
  function toggleAddToCartButton()
  {
    inCart.value = !inCart.value
  }

</script>