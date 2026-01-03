<script setup lang="ts">
import ArrowForButton from './icons/ArrowForButton.vue'
import { RouterLink } from 'vue-router'

defineProps<{
  text: string
  link: string
}>()
</script>
<template>
  <RouterLink :to="`${link}`">
    <button
      class="bg-Violet700 text-Blanc flex items-center hover:bg-Violet800 transition-colors h-12 lg:h-16"
    >
      <p class="whitespace-nowrap px-4 lg:px-8 font-extrabold text-xl lg:text-3xl">{{ text }}</p>
      <ArrowForButton class="w-2 lg:w-2.5 h-4 lg:h-5 mr-3 lg:mr-3.5" />
    </button>
  </RouterLink>
</template>
