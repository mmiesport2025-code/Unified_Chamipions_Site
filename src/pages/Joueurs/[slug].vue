<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import type { Joueur } from '@/types/joueur'
import { sanityClient } from '@/lib/sanity'
import groq from 'groq'
import HomePageDecoration from '@/components/assets/decoration/HomePageDecoration.vue'
import { useSanityImage } from '@/composables/sanityImage'

/* ===============================
   GROQ QUERY
================================ */
const JOUEUR_QUERY = groq`
  *[_type == "joueur" && _id == $id][0]{
    _id,
    prenom,
    nom,
    pseudo,
    portrait,
    nationalite,
    jeu_maitrise->{
      _id,
      nom,
      logo,
      icone,
      bandeau,
      description,
      border_color,
      background_color,
      object_position
    },
    jeux[]->{
      _id,
      nom,
      logo,
      icone,
      bandeau,
      fond_card,
      description,
      border_color, 
      background_color,
      object_position
    }
  }
`

const route = useRoute()
const JoueurData = ref<Joueur | null>(null)

const loading = ref(true)
const error = ref<string | null>(null)

const { urlFor } = useSanityImage()

onMounted(async () => {
  try {
    JoueurData.value = await sanityClient.fetch<Joueur>(JOUEUR_QUERY, { id: route.params.slug })
  } catch (err) {
    error.value = 'Erreur lors du chargement du joueur'
    console.error(err)
  } finally {
    loading.value = false
  }
})

function colorFirstLetters(text: string) {
  return text
    .split(' ')
    .map((word) => `<span class="first-letter">${word[0]}</span>${word.slice(1)}`)
    .join(' ')
}
</script>

<template>
  <!-- ===============================
       BANNIÈRE JEU MAÎTRISÉ
  =============================== -->
  <header v-if="JoueurData?.jeu_maitrise?.bandeau" class="relative w-full h-[27.5vw]">
    <img
      class="w-full h-full object-cover"
      :src="urlFor(JoueurData.jeu_maitrise.bandeau)?.url()"
      alt="Bannière du jeu"
      :style="{ objectPosition: JoueurData.jeu_maitrise.object_position }"
    />
    <HomePageDecoration class="w-full absolute bottom-[-1px] h-sm:hidden" />
  </header>

  <!-- ===============================
       LOADING
  =============================== -->
  <section v-if="loading" class="text-center mt-12 md:mt-24 mx-5 md:mx-10">Chargement…</section>

  <!-- ===============================
       ERROR
  =============================== -->
  <section v-else-if="error" class="text-center mt-12 md:mt-24 mx-5 md:mx-10">
    {{ error }}
  </section>

  <!-- ===============================
       CONTENU JOUEUR
  =============================== -->
  <section v-else-if="JoueurData" class="mt-12 md:mt-24 mx-5 md:mx-10">
    <div class="flex flex-col md:flex-row gap-10 items-center">
      <!-- Portrait -->
      <img
        v-if="JoueurData.portrait"
        :src="urlFor(JoueurData.portrait)?.width(400).url()"
        class="rounded-xl max-w-xs"
        alt="Portrait du joueur"
      />

      <!-- Infos -->
      <div>
        <h1
          class="text-3xl md:text-5xl font-bold"
          v-html="colorFirstLetters(JoueurData.pseudo || `${JoueurData.prenom} ${JoueurData.nom}`)"
        />

        <p class="mt-4 text-lg opacity-80">{{ JoueurData.prenom }} {{ JoueurData.nom }}</p>

        <p class="mt-2">
          Nationalité :
          <span v-for="(nat, index) in JoueurData.nationalite" :key="index">
            {{ nat }}<span v-if="index < JoueurData.nationalite.length - 1">, </span>
          </span>
        </p>

        <p v-if="JoueurData.jeu_maitrise" class="mt-4">
          Jeu maîtrisé :
          <strong>{{ JoueurData.jeu_maitrise.nom }}</strong>
        </p>
      </div>
    </div>
  </section>
</template>

<style>
.first-letter {
  color: #ae47f2;
}
</style>
