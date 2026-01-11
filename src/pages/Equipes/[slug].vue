<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import type { FullEquipe } from '@/types/equipe'
import { sanityClient } from '@/lib/sanity'
import groq from 'groq'
import HomePageDecoration from '@/components/assets/decoration/HomePageDecoration.vue'

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
  <section v-if="loading">Chargement…</section>

  <section v-else-if="error">
    {{ error }}
  </section>

  <section v-else-if="Equipe">
    <h1>{{ Equipe.nom }}</h1>
    <p>{{ Equipe.specificite }}</p>
    <p>Jeu : {{ Equipe.jeu }}</p>
  </section>
</template>
