<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/header.vue'
import Footer from './components/footer.vue'

import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const Page_actuelle = computed(() => {
  switch (route.path) {
    case '/':
      return false
    default:
      return true
  }
})
</script>
<template>
  <section class="font-Inter text-sm lg:text-lg">
    <Header />
    <!-- <main class="mt-[70px] grille"> -->
    <main :class="Page_actuelle ? 'mt-[70px] lg:mt-[120px]' : ''">
      <RouterView v-slot="{ Component }">
        <Suspense>
          <component :is="Component" :key="$route.path" />
        </Suspense>
      </RouterView>
    </main>
  </section>
  <Footer />
</template>
