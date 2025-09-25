<template>

    <div 
        class="bg-cyan-lighten-5 rounded-lg d-flex flex-column align-center text-center overflow-hidden"
        style="height: 81vh; width: 25vw;"
    >
        <div 
            class="text-h4 font-weight-bold"
        >
            Carrito de compras
        </div>
        
        <div
            v-if="cart.length=== 0"
            class="d-flex flex-column align-center justify-center text-center flex-grow-1" 
        >
            <v-img
                src="https://cdn-icons-png.freepik.com/512/7486/7486744.png"
                width="150px"
                height="150px"
                style="filter: grayscale(100%);"
            />
            <span class="text-h5">No hay productos en el carrito</span>
        </div>

        <!-- Cart list -->
        <div v-else
            class="d-flex flex-column w-100 justify-space-between"
        >
            <v-list
                class="overflow-y bg-cyan-lighten-5 flex-grow-1"
            >
                <CartItem
                v-for="product in cart"
                :key="product.id"
                :product="product"
                @update-subtotal="updateSubtotal"
                />
            </v-list>
        
            <div
                class="text-h5 font-weight-bold bg-teal pa-2"
            >
                Total: ${{ total.toFixed(2) }}
            </div>
        </div>
        
    </div>

</template>

<script setup>

    import { ref, computed} from 'vue';
    import { cartService } from '@/services/cartService';
    
    // reactive references
    const cart = ref(cartService.getCart());
    const subtotals = ref({})

    //computed
    const total = computed(() =>
        Object.values(subtotals.value).reduce((acc, val) => acc + val, 0)
    )


    function updateSubtotal({id,subtotal})
    {
        subtotals.value[id] = subtotal;
    }
    
</script>