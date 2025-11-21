<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/header.vue'
import Footer from './components/footer.vue'
</script>
<template>
  <Header />
  <main class="">
    <RouterView v-slot="{ Component }">
      <Suspense>
        <component :is="Component" :key="$route.path" />
      </Suspense>
    </RouterView>
  </main>
  <Footer />
</template>
