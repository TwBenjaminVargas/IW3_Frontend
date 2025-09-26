<template>

    <v-list-item class="rounded-lg">
      <v-row class="align-center">
        
        <!-- Product image-->
        <v-col cols="4">
          <v-img
            :src="product.image"
            width="100%"
            height="100%"
            rounded="lg"
          />
        </v-col>

        <!-- Product details -->
        <v-col cols="4">
          
          <v-list-item-title class="text-h7 mb-3"
            style="width: 100%; white-space: normal;word-break: break-word;"
          >
            {{ product.name }}
          </v-list-item-title>

          <v-list-item-subtitle 
            class="text-h8"
            style="white-space: normal;word-break: break-word;"
          >
            ${{ product.price }}
          </v-list-item-subtitle>

        </v-col>
        
        <v-col cols="4">
          <span class="text-h7">Cantidad</span>

          <div class="d-flex aling-center justify-center">

              <v-btn
                icon="mdi-minus"
                color="red-lighten-2"
                size="x-small"
                class="rounded-circle"
                @click="decreaseQuantity"
              />

              <span class="text-h6 mx-3">{{ quantity }}</span>

              <v-btn 
                icon="mdi-plus"
                color="teal"
                size="x-small"
                class="rounded-circle"
                @click="increaseQuantity"
              />

            </div>
            <span class="text-h7 font-weight-bold"> ${{ subtotal.toFixed(2) }} </span>
          
          </v-col>
        </v-row>
    </v-list-item>

</template>


<script setup>
  
  import { defineProps, onMounted, ref, watch} from 'vue'
  import { cartService } from '@/services/cartService';

  //properties
  const props = defineProps({product: Object});

  //reactive references
  const quantity = ref(1);
  const subtotal = ref(props.product.price);
  
  //emits
  const emit = defineEmits(['update-subtotal'])

  //lifecycle
  onMounted(updateSubtotal)

  function increaseQuantity()
  {
    quantity.value++;
  }

  function decreaseQuantity()
  {
    quantity.value--;
    if(quantity.value === 0)
    {
      cartService.removeFromCart(props.product.id)
    }
  }

  watch(quantity, (newQty) => {
    subtotal.value = newQty * props.product.price
    updateSubtotal() 
  })

  function updateSubtotal()
  {
    emit('update-subtotal', { id: props.product.id, subtotal: subtotal.value});
  }
</script>