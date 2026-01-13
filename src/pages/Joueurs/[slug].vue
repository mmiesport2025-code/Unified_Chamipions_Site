<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import type { Joueur } from '@/types/joueur'
import { sanityClient } from '@/lib/sanity'
import groq from 'groq'
import HomePageDecoration from '@/components/assets/decoration/HomePageDecoration.vue'
import { useSanityImage } from '@/composables/sanityImage'
import EquipeCard from '@/components/EquipeCard.vue'

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
    },

    "equipes": *[
      _type == "equipe" &&
      references(^._id)
    ]{
      _id,
      nom,
      appartenance_au_club,
      specificite,

      joueurs[]->{
        _id,
        pseudo,
        nom,
        prenom,
        portrait,
        nationalite
      },

      jeu->{
        _id,
        nom,
        logo,
        icone,
        fond_card,
        border_color,
        background_color
      }
    }
  }
`

const route = useRoute()
const Joueur = ref<Joueur | null>(null)

const loading = ref(true)
const error = ref<string | null>(null)

const { urlFor } = useSanityImage()

onMounted(async () => {
  try {
    Joueur.value = await sanityClient.fetch<Joueur>(JOUEUR_QUERY, { id: route.params.slug })
  } catch (err) {
    error.value = 'Erreur lors du chargement du joueur'
    console.error(err)
  } finally {
    loading.value = false
  }
})

// function colorFirstLetters(text: string) {
//   return text
//     .split(' ')
//     .map((word) => `<span class="first-letter">${word[0]}</span>${word.slice(1)}`)
//     .join(' ')
// }
</script>

<template>
  <!-- ===============================
       BANNIÈRE JEU MAÎTRISÉ
  =============================== -->
  <header v-if="Joueur?.jeu_maitrise?.bandeau" class="relative w-full h-[27.5vw] bg-Noir">
    <img
      class="w-full h-full object-cover opacity-30"
      :src="urlFor(Joueur.jeu_maitrise.bandeau)?.url()"
      alt="Bannière du jeu"
      :style="{ objectPosition: Joueur.jeu_maitrise.object_position }"
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
  <section v-else-if="Joueur" class="mt-12 md:mt-24 mx-5 md:mx-10">
    <h1>Profil de {{ Joueur.pseudo || `${Joueur.prenom} ${Joueur.nom}` }}</h1>
    <div class="flex">
      <!-- La prochaine section devra être hidden en version desktop -->
      <div class="flex w-[25%]">
        <img
          v-if="Joueur?.portrait"
          class="object-cover"
          :src="urlFor(Joueur.portrait)?.url()"
          alt="Portrait du joueur"
          :style="{ objectPosition: Joueur.nom }"
        />
        <div class="hidden">
          <div>
            <p>Nationalité</p>
            <p>FRANCE</p>
          </div>
          <div>
            <p>Role</p>
            <p>JOUEUR</p>
          </div>
          <div>
            <p>Jeu</p>
            <p>Valorant</p>
          </div>
          <div>
            <a href="#"><img /></a>
            <a href="#"><img /></a>
            <a href="#"><img /></a>
          </div>
        </div>
      </div>
      <div class="w-[60vw]">
        <!--Cette section disparaîtra en version mobile-->
        <div class="flex">
          <div>
            <p>Nationalité</p>
            <p>FRANCE</p>
          </div>
          <div>
            <p>Role</p>
            <p>JOUEUR</p>
          </div>
          <div>
            <p>Jeu</p>
            <p>Valorant</p>
          </div>
          <div>
            <a href="#"><img /></a>
            <a href="#"><img /></a>
            <a href="#"><img /></a>
          </div>
        </div>
        <!--Cette section restera constante-->
        <div v-if="Joueur?.jeu_maitrise?.nom === 'Valorant'" class="grid grid-cols-3">
          <div>
            <h2>Top agents</h2>
          </div>
          <div>
            <h2>Map Favorite</h2>
          </div>
          <div>
            <h2>Arme Favorite</h2>
          </div>
          <div>
            <h2>Skin Favorit</h2>
          </div>
          <div>
            <h2>Rank</h2>
          </div>
          <div>
            <h2>Réticule</h2>
          </div>
        </div>
        <div v-if="Joueur?.jeu_maitrise?.nom === 'League of legends'" class="grid grid-cols-3">
          <div>
            <h2>Champions Principaux</h2>
          </div>
          <div>
            <h2>Skins</h2>
          </div>
          <div>
            <h2>Positionnement</h2>
          </div>
          <div>
            <h2>Rank</h2>
          </div>
          <div>
            <h2>Modes</h2>
          </div>
          <div>
            <h2>Item favori</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    class="text-center mt-12 md:mt-24 w-full sm:w-[600px] md:w-[700px] lg:w-[950px] xl:w-[1200px] xxxl:w-[1300px] px-5 ssm:mx-auto mb-12 sm:mb-16 lg:mb-20"
    v-if="Joueur?.equipes"
  >
    <h2
      class="uppercase font-Agrandir text-2xl sm:text-4xl lg:text-5xl mb-6 text-left mt-12 ssm:mt-16 lg:mt-20 xl:mt-24"
    >
      Ses <span class="text-[#AE47F2]">Équipes</span>
    </h2>
    <div class="flex flex-wrap gap-4 sm:gap-8 lg:gap-10 xl:gap-12 justify-center">
      <EquipeCard v-for="equipe in Joueur.equipes" :key="equipe._id" :equipe="equipe" />
    </div>
  </section>
</template>

<style>
.first-letter {
  color: #ae47f2;
}
</style>
