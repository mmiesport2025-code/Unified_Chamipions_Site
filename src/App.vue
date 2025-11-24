<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/header.vue'
import Footer from './components/footer.vue'
</script>
<template>
  <section>
    <Header />
    <!-- <main class="mt-[70px] grille"> -->
    <main class="mt-[70px] lg:mt-[120px]">
      <RouterView v-slot="{ Component }">
        <Suspense>
          <component :is="Component" :key="$route.path" />
        </Suspense>
      </RouterView>
    </main>
  </section>
  <Footer />
</template>
