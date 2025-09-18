<template>
        <v-list-item variant="plain">
            <v-list-item-content>
              <v-list-item-title>{{ product.name }}</v-list-item-title>
            </v-list-item-content>
      </v-list-item>
</template>
<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  product: Object
})
</script>