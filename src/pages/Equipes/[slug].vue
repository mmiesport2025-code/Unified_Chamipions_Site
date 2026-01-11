<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import type { FullEquipe } from '@/types/equipe'
import { sanityClient } from '@/lib/sanity'
import groq from 'groq'
import HomePageDecoration from '@/components/assets/decoration/HomePageDecoration.vue'
import JoueurCard from '@/components/JoueurCard.vue'

const TEAM_QUERY = groq`*[ _type == "equipe" && _id == $id][0]{ _id, nom, appartenance_au_club, specificite, joueurs[]->{ _id, pseudo, nom, prenom, portrait, nationalite }, jeu->{ _id, nom, logo, icone, bandeau, fond_card, description, border_color, background_color, object_position } } `
const route = useRoute()

const Equipe = ref<FullEquipe | null>(null)

const loading = ref(true)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    Equipe.value = await sanityClient.fetch<FullEquipe>(TEAM_QUERY, { id: route.params.slug })
  } catch (err) {
    error.value = 'Erreur lors du chargement'
    console.error(err)
  } finally {
    loading.value = false
  }
})

import { useSanityImage } from '@/composables/sanityImage'
const { urlFor } = useSanityImage()

function colorFirstLetters(text: string) {
  return text
    .split(' ')
    .map((word) => `<span class="first-letter">${word[0]}</span>${word.slice(1)}`)
    .join(' ')
}
</script>
<template>
  <header v-if="Equipe?.jeu.bandeau" class="relative w-full h-[27.5vw]">
    <img
      class="w-full h-full object-cover"
      :src="urlFor(Equipe.jeu.bandeau)?.url()"
      alt="Logo du jeu"
      :style="{ objectPosition: Equipe.jeu.object_position }"
    />
    <HomePageDecoration class="w-full absolute bottom-[-1px] h-sm:hidden" />
  </header>
  <section v-if="loading" class="text-center mt-12 md:mt-24 mx-5 md:mx-10">Chargement…</section>

  <section v-else-if="error" class="text-center mt-12 md:mt-24 mx-5 md:mx-10">
    {{ error }}
  </section>

  <section v-else-if="Equipe" class="text-center mt-12 md:mt-24 mx-5 md:mx-10">
    <h1
      class="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 text-left uppercase font-Agrandir"
      v-html="colorFirstLetters(Equipe.nom)"
    ></h1>
    <div class="flex justify-start items-center gap-4 mt-6 md:mt-12">
      <img
        class="w-24 h-24 object-cover"
        :src="urlFor(Equipe.jeu.icone)?.url()"
        alt="Logo du jeu"
      />
      <h2
        class="text-2xl sm:text-4xl lg:text-5xl mt-4 font-bold text-left uppercase font-Agrandir"
        v-html="colorFirstLetters(Equipe.jeu.nom)"
      ></h2>
    </div>
    <p class="text-left">{{ Equipe.jeu.description }}</p>
    <h2 class="uppercase font-Agrandir text-2xl sm:text-4xl lg:text-5xl mb-6 text-left mt-24">
      Les <span class="text-[#AE47F2]">joueurs</span>
    </h2>
    <div class="flex flex-wrap gap-[calc((100%-(480px*3))/2)] gap-y-24 justify-start">
      <JoueurCard v-for="joueur in Equipe.joueurs" :key="joueur._id" :joueur="joueur" />
    </div>
  </section>
</template>
<style>
.first-letter {
  color: #ae47f2;
}
</style>
