<template>
  <v-app>
    <MyToolbar v-if="route.path !== '/login'"></MyToolbar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
  import { useRoute } from 'vue-router'

  const route = useRoute()
</script>
