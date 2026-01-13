<script setup lang="ts">
import type { Joueur } from '@/types/joueur'
import { useSanityImage } from '@/composables/sanityImage'

const { urlFor } = useSanityImage()

defineProps<{
  joueur: Joueur
}>()
</script>
<template>
  <!-- <div
    class="flex flex-col items-center border-2 xs:w-[165px] ssm:w-[230px] sm:w-[290px] md:w-[340px] lg:w-[450px] xl:w-[350px] xxl:w-[400px] xxxl:w-[480px] mb-24"
  >
    <img
      class="w-32 h-32 object-cover xs:w-[165px] ssm:w-[230px] sm:w-[290px] md:w-[340px] lg:w-[450px] xl:w-[350px] xxl:w-[400px] xxxl:w-[480px] xs:h-[165px] ssm:h-[230px] sm:h-[290px] md:h-[340px] lg:h-[450px] xl:h-[350px] xxl:h-[400px] xxxl:h-[480px] border-b-2"
      :src="joueur.portrait ? urlFor(joueur.portrait)?.width(200)?.height(200)?.url() : undefined"
      :alt="`Portrait de ${joueur.pseudo}`"
    />
    <div
      class="flex flex-col justify-center items-start h-32 px-8 w-full border-r-8 border-Violet700"
    >
      <p class="text-center text-lg">{{ joueur.prenom }} {{ joueur.nom }}<br /></p>
      <h3 class="font-semibold text-2xl">{{ joueur.pseudo }}</h3>
    </div>
  </div> -->
  <div
    class="flex flex-col items-center border-2 w-[calc(50vw-30px)] sm:w-[calc(50vw-45px)] md:w-[calc(50vw-65px)] xl:w-[calc(33.33vw-60px)] mb-12 ssm:mb-24"
  >
    <RouterLink :to="`/Joueurs/${joueur._id}`">
      <img
        class="object-cover w-[calc(50vw-30px)] sm:w-[calc(50vw-45px)] md:w-[calc(50vw-65px)] xl:w-[calc(33.33vw-60px)] h-[calc(50vw-30px)] sm:h-[calc(50vw-45px)] md:h-[calc(50vw-65px)] xl:h-[calc(33.33vw-60px)] border-b-2"
        :src="joueur.portrait ? urlFor(joueur.portrait)?.width(200)?.height(200)?.url() : undefined"
        :alt="`Portrait de ${joueur.pseudo}`"
      />
      <div
        class="flex flex-col justify-center items-start h-16 xs:h-20 sm:h-24 lg:h-32 px-4 xs:px-5 sm:px-6 lg:px-8 w-full border-r-8 border-Violet700"
      >
        <p class="text-center text-xs xs:text-sm sm:text-base lg:text-lg">
          {{ joueur.prenom }} {{ joueur.nom }}<br />
        </p>
        <h3 class="font-semibold text-base xs:text-lg sm:text-xl lg:text-2xl">
          {{ joueur.pseudo }}
        </h3>
      </div>
    </RouterLink>
  </div>
</template>
