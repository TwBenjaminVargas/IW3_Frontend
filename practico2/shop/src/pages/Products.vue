<template>
  <div
    class="h-100 w-100 pt-10"
    :style="{
      backgroundImage: `url(${BACKGROUND_IMG_URL})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }"
  >
    <ProductList ></ProductList>
  </div>
</template>

<script setup>
import { BACKGROUND_IMG_URL } from '@/config/resource';
</script>
