<template>
  <div
    class="d-flex h-100 w-100 pt-5 justify-center"
    :style="{
      backgroundImage: `url(${BACKGROUND_IMG_URL})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }"
  >
    <ProductDetails></ProductDetails>
  </div>
</template>

<script setup>
import { BACKGROUND_IMG_URL } from '@/config/resource';
</script>
