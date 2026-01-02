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
      class="bg-Violet700 text-Blanc flex items-center hover:bg-Violet800 transition-colors h-16"
    >
      <p class="whitespace-nowrap px-8 font-extrabold text-3xl">{{ text }}</p>
      <ArrowForButton class="w-2.5 h-5 mr-3.5" />
    </button>
  </RouterLink>
</template>
