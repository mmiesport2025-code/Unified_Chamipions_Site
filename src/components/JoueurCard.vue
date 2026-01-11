<script setup lang="ts">
import type { Joueur } from '@/types/joueur'
import { useSanityImage } from '@/composables/sanityImage'

const { urlFor } = useSanityImage()

defineProps<{
  joueur: Joueur
}>()
</script>
<template>
  <div class="flex flex-col items-center border-2 w-[480px] mb-24">
    <img
      class="w-32 h-32 object-cover w-[480px] h-[480px] border-b-2"
      :src="joueur.portrait ? urlFor(joueur.portrait)?.width(200)?.height(200)?.url() : undefined"
      :alt="`Portrait de ${joueur.pseudo}`"
    />
    <div
      class="flex flex-col justify-center items-start h-32 px-8 w-full border-r-8 border-Violet700"
    >
      <p class="text-center text-lg">{{ joueur.prenom }} {{ joueur.nom }}<br /></p>
      <h3 class="font-semibold text-2xl">{{ joueur.pseudo }}</h3>
    </div>
  </div>
</template>
