<script setup lang="ts">
import { LOGIN_BACKGROUND_IMG_URL } from '@/config/resource';

</script>

<template>
    <div
        class="d-flex justify-center align-center"
        :style="{
        backgroundImage: `url(${LOGIN_BACKGROUND_IMG_URL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height:'100vh',
        width:'100vw'
        }"
    >
        <LoginForm></LoginForm>

    </div>
</template>