<template>
  <div
    class="h-100 w-100 pt-10 d-flex align-content-center justify-center"
    :style="{
      backgroundImage: `url(${BACKGROUND_IMG_URL})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }"
  >
    <ClientInput></ClientInput>
  </div>
</template>

<script setup>
import { BACKGROUND_IMG_URL } from '@/config/resource';
</script>