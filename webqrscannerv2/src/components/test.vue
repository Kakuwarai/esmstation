<script setup>
import router from '@/router'
import { useRoute } from 'vue-router';
const route = useRoute();

console.log(route.query.id);

</script>

<template>
   {{ $route.query.id }}
</template>