<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { FullEquipe } from '@/types/equipe'
import { useSanityImage } from '@/composables/sanityImage'

const { urlFor } = useSanityImage()

defineProps<{
  equipe: FullEquipe
}>()
</script>

<template>
  <div class="w-full ssm:px-12 relative overflow-hidden rounded">
    <img
      v-if="equipe.jeu.fond_card"
      :src="urlFor(equipe.jeu.fond_card)?.width(600).url()"
      :alt="equipe.nom"
      class="w-full h-[220px] ssm:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[500px] xl:h-[600px] object-cover rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] xl:rounded-[50px]"
    />

    <div class="absolute inset-0 text-Blanc ssm:px-12 flex flex-col justify-between">
      <h4
        class="text-left pl-5 ssm:pl-8 lg:pl-12 pt-4 ssm:pt-6 lg:pt-9 text-xl ssm:text-2xl lg:text-4xl xl:text-5xl font-extrabold"
      >
        {{ equipe.nom }}
      </h4>

      <div class="flex justify-end">
        <router-link :to="`/Equipes/${equipe._id}`">
          <button
            :style="{
              borderColor: equipe.jeu.border_color,
              backgroundColor: equipe.jeu.background_color,
            }"
            class="border-2 rounded rounded-br-[20px] sm:rounded-br-[30px] lg:rounded-br-[40px] xl:rounded-br-[50px] font-bold lg:text-3xl lg:px-8 lg:py-4 md:text-2xl md:px-6 md:py-3 text-lg px-5 py-2.5"
          >
            Voir plus
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
