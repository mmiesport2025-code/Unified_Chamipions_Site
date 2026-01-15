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
import ReseauIconeSelector from '@/components/ReseauIconeSelector.vue'
import GreyTriangleDecoration from '@/components/icons/GreyTriangleDecoration.vue'

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

    "equipes": *[_type == "equipe" && references(^._id)]{
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
    },

    reseaux[]->{
      _id,
      nom,
      reseaux_sociaux
    },

    // ===== VALORANT =====
    valoAgent[]->{
      _id,
      name,
      portrait
    },
    valoMap->{
      _id,
      name,
      portrait
    },
    valoArme[]->{
      _id,
      name,
      portrait
    },
    valoSkin[]->{
      _id,
      name,
      portrait
    },
    valoRank->{
      _id,
      name,
      portrait
    },
    valoReticule->{
      _id,
      name,
      portrait
    },

    // ===== LEAGUE OF LEGENDS =====
    lolMain[]->{
      _id,
      name,
      portrait
    },
    lolSkin[]->{
      _id,
      name,
      portrait
    },
    lolPositionnement->{
      _id,
      name,
      portrait
    },
    lolRank->{
      _id,
      name,
      portrait
    },
    lolMode[]->{
      _id,
      name,
      portrait
    },
    lolItem->{
      _id,
      name,
      portrait
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

function colorLastWord(text: string) {
  const words = text.split(' ')
  if (words.length === 0) return text

  const lastIndex = words.length - 1
  words[lastIndex] = `<span class="last-word">${words[lastIndex]}</span>`

  return words.join(' ')
}
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
    <h1 class="uppercase font-Agrandir text-2xl sm:text-4xl lg:text-5xl mb-6 lg:mb-10">
      Profil de
      <span class="text-Violet700">{{ Joueur.pseudo || `${Joueur.prenom} ${Joueur.nom}` }}</span>
    </h1>
    <div class="flex flex-col xl:flex-row justify-between">
      <!-- La prochaine section devra être hidden en version desktop -->
      <div class="flex xl:w-[25%]">
        <img
          v-if="Joueur?.portrait"
          class="object-cover border-2 w-full max-w-[450px] h-auto max-h-[450px]"
          :src="urlFor(Joueur.portrait)?.url()"
          alt="Portrait du joueur"
          :style="{ objectPosition: Joueur.nom }"
        />
        <div>
          <div class="bg-NoirPur justify-between hidden h-full md:flex flex-col xl:hidden">
            <div class="flex flex-col items-center pt-5 gap-4">
              <p class="text-Blanc">Nationalité</p>
              <p class="text-Violet700 uppercase">{{ Joueur.nationalite.join(', ') }}</p>
            </div>
            <div class="flex flex-col items-center gap-4">
              <p class="text-Blanc">Role</p>
              <p class="text-Violet700 uppercase">JOUEUR</p>
            </div>
            <div class="flex flex-col items-center gap-4">
              <p class="text-Blanc">Jeu</p>
              <p class="text-Violet700 uppercase">{{ Joueur.jeu_maitrise?.nom || 'Aucun' }}</p>
            </div>
            <div class="flex w-[250px]">
              <div class="bloc flex justify-center items-center gap-5 py-4 bg-Noir w-full">
                <a href="#" v-for="reseau in Joueur.reseaux" :key="reseau._id" class="w-12 h-12">
                  <ReseauIconeSelector :reseau="reseau.reseaux_sociaux"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full xl:w-[65vw] xxl:w-[60vw]">
        <!--Cette section disparaîtra en version mobile-->
        <div
          class="bg-NoirPur px-6 ssm:pr-0 md:pl-24 justify-between flex gap-2 md:hidden xl:flex text-center"
        >
          <div class="flex flex-col items-center gap-5 py-6">
            <p class="text-Blanc">Nationalité</p>
            <p class="text-Violet700 uppercase">{{ Joueur.nationalite.join(', ') }}</p>
          </div>
          <div class="flex flex-col items-center gap-5 py-6">
            <p class="text-Blanc">Role</p>
            <p class="text-Violet700 uppercase">JOUEUR</p>
          </div>
          <div class="flex flex-col items-center gap-5 py-6">
            <p class="text-Blanc">Jeu</p>
            <p class="text-Violet700 uppercase">{{ Joueur.jeu_maitrise?.nom || 'Aucun' }}</p>
          </div>
          <div class="hidden ssm:flex">
            <GreyTriangleDecoration />
            <div class="bloc flex items-center gap-5 bg-Noir px-4 md:px-8 pr-8 md:pr-11">
              <a
                href="#"
                v-for="reseau in Joueur.reseaux"
                :key="reseau._id"
                class="w-8 sm:w-12 h-8 sm:h-12"
              >
                <ReseauIconeSelector :reseau="reseau.reseaux_sociaux"
              /></a>
            </div>
          </div>
        </div>
        <div class="flex ssm:hidden w-full">
          <div class="bloc flex items-center justify-center w-full gap-5 bg-Noir p-3">
            <a
              href="#"
              v-for="reseau in Joueur.reseaux"
              :key="reseau._id"
              class="w-8 sm:w-12 h-8 sm:h-12"
            >
              <ReseauIconeSelector :reseau="reseau.reseaux_sociaux"
            /></a>
          </div>
        </div>
        <!--Cette section restera constante-->
        <!-- <div v-if="Joueur?.jeu_maitrise?.nom === 'Valorant'" class="grid grid-cols-3">
          <div class="border-2">
            <h2>Top agents</h2>
          </div>
          <div class="border-2">
            <h2>Map Favorite</h2>
          </div>
          <div class="border-2">
            <h2>Arme Favorite</h2>
          </div>
          <div class="border-2">
            <h2>Skin Favorit</h2>
          </div>
          <div class="border-2">
            <h2>Rank</h2>
          </div>
          <div class="border-2">
            <h2>Réticule</h2>
          </div>
        </div> -->
        <div
          v-if="Joueur?.jeu_maitrise?.nom === 'Valorant'"
          class="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6"
        >
          <div
            class="border-2 h-40 flex flex-col p-3 ssm:p-5"
            :class="{
              'bg-[url(@/components/image/PlaceHolder.png)] bg-cover bg-center': !Joueur.valoAgent,
            }"
          >
            <h2
              class="text-sm ssm:text-base md:text-xl xxl:text-2xl font-semibold uppercase"
              v-html="colorLastWord('Top agents')"
            ></h2>
            <div class="flex gap-2 mt-3 overflow-x-auto w-full">
              <div
                v-for="Agent in Joueur.valoAgent"
                :key="Agent._id"
                class="flex flex-col justify-between items-center w-full"
              >
                <img
                  class="object-cover border border-Violet700 rounded-full w-10 h-10 object-top"
                  :src="urlFor(Agent.portrait)?.url()"
                  :alt="`Portrait de ${Agent.name}`"
                  :style="{ objectPosition: Agent.name }"
                />
                <p class="text-center mt-1">{{ Agent.name }}</p>
              </div>
            </div>
          </div>
          <div
            class="border-2 h-40 flex flex-col relative"
            :class="{
              'bg-[url(@/components/image/PlaceHolder.png)] bg-cover bg-center': !Joueur.valoMap,
            }"
          >
            <img
              v-if="Joueur.valoMap"
              class="absolute inset-0 w-full h-full object-cover z-0"
              :src="urlFor(Joueur.valoMap?.portrait)?.url()"
              :alt="`Portrait de ${Joueur.valoMap?.name ?? ''}`"
            />
            <h2
              class="relative text-sm ssm:text-base md:text-xl xxl:text-2xl font-semibold uppercase relative p-3 ssm:p-5"
              v-html="colorLastWord('Map Favorite')"
            ></h2>
          </div>
          <div
            class="border-2 h-40 flex flex-col p-3 ssm:p-5"
            :class="{
              'bg-[url(@/components/image/PlaceHolder.png)] bg-cover bg-center': !Joueur.valoArme,
            }"
          >
            <h2
              class="text-sm ssm:text-base md:text-xl xxl:text-2xl font-semibold uppercase whitespace-normal break-words"
              v-html="colorLastWord('Arme Favorite')"
            ></h2>
            <img
              v-for="arme in Joueur.valoArme"
              :key="arme._id"
              class="w-full h-auto my-auto object-cover z-0"
              :src="urlFor(arme.portrait)?.url()"
              :alt="`Portrait de ${arme.name ?? ''}`"
            />
          </div>
          <div
            class="border-2 h-40 flex flex-col p-3 ssm:p-5"
            :class="{
              'bg-[url(@/components/image/PlaceHolder.png)] bg-cover bg-center': !Joueur.valoSkin,
            }"
          >
            <h2
              class="text-sm ssm:text-base md:text-xl xxl:text-2xl font-semibold uppercase"
              v-html="colorLastWord('Skin Favoris')"
            ></h2>
            <img
              v-for="skin in Joueur.valoSkin"
              :key="skin._id"
              class="w-full h-auto my-auto object-cover z-0"
              :src="urlFor(skin.portrait)?.url()"
              :alt="`Portrait de ${skin.name ?? ''}`"
            />
          </div>
          <div
            class="border-2 h-40 flex flex-col p-3 ssm:p-5"
            :class="{
              'bg-[url(@/components/image/PlaceHolder.png)] bg-cover bg-center': !Joueur.valoRank,
            }"
          >
            <h2
              class="text-sm ssm:text-base md:text-xl xxl:text-2xl font-semibold uppercase"
              v-html="colorLastWord('Rank actuel')"
            ></h2>
            <img
              v-if="Joueur.valoRank"
              class="h-20 w-20 m-auto object-cover z-0"
              :src="urlFor(Joueur.valoRank?.portrait)?.url()"
              :alt="`Portrait de ${Joueur.valoRank.name ?? ''}`"
            />
          </div>
          <div
            class="border-2 h-40 flex flex-col p-3 ssm:p-5"
            :class="{
              'bg-[url(@/components/image/PlaceHolder.png)] bg-cover bg-center':
                !Joueur.valoReticule,
            }"
          >
            <h2
              class="text-sm ssm:text-base md:text-xl xxl:text-2xl font-semibold uppercase"
              v-html="colorLastWord('Réticule utilisé')"
            ></h2>
            <p v-if="Joueur.valoReticule" class="break-all">{{ Joueur.valoReticule.name }}</p>
          </div>
        </div>
        <div
          v-if="Joueur?.jeu_maitrise?.nom === 'League of legends'"
          class="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6"
        >
          <div
            class="border-2 h-40 flex flex-col p-3 ssm:p-5"
            :class="{
              'bg-[url(@/components/image/PlaceHolder.png)] bg-cover bg-center': !Joueur.lolMain,
            }"
          >
            <h2
              class="text-sm ssm:text-base md:text-xl xxl:text-2xl font-semibold uppercase"
              v-html="colorLastWord('Top 3 Champions')"
            ></h2>
            <div class="flex gap-2 mt-3 overflow-x-auto w-full">
              <div
                v-for="Main in Joueur.lolMain"
                :key="Main._id"
                class="flex flex-col justify-between items-center w-full"
              >
                <img
                  class="object-cover border border-Violet700 rounded-full w-10 h-10 object-top"
                  :src="urlFor(Main.portrait)?.url()"
                  :alt="`Portrait de ${Main.name}`"
                  :style="{ objectPosition: Main.name }"
                />
                <p class="text-center mt-1">{{ Main.name }}</p>
              </div>
            </div>
          </div>
          <div
            class="border-2 h-40 flex flex-col p-3 ssm:p-5"
            :class="{
              'bg-[url(@/components/image/PlaceHolder.png)] bg-cover bg-center': !Joueur.lolSkin,
            }"
          >
            <h2
              class="text-sm ssm:text-base md:text-xl xxl:text-2xl font-semibold uppercase"
              v-html="colorLastWord('Skins Favoris')"
            ></h2>
            <div class="flex gap-2 mt-3 overflow-x-auto w-full">
              <div
                v-for="Skin in Joueur.lolSkin"
                :key="Skin._id"
                class="flex flex-col justify-between items-center w-full"
              >
                <img
                  class="object-cover border border-Violet700 rounded-full w-10 h-10 object-top"
                  :src="urlFor(Skin.portrait)?.url()"
                  :alt="`Portrait de ${Skin.name}`"
                  :style="{ objectPosition: Skin.name }"
                />
                <p class="text-center mt-1">{{ Skin.name }}</p>
              </div>
            </div>
          </div>
          <div
            class="border-2 h-40 flex flex-col p-3 ssm:p-5"
            :class="{
              'bg-[url(@/components/image/PlaceHolder.png)] bg-cover bg-center':
                !Joueur.lolPositionnement,
            }"
          >
            <h2
              class="text-sm ssm:text-base md:text-xl xxl:text-2xl font-semibold uppercase whitespace-normal break-words"
              v-html="colorLastWord('Positionnement en match')"
            ></h2>
            <p v-if="Joueur.lolPositionnement" class="m-auto">
              {{ Joueur.lolPositionnement.name }}
            </p>
          </div>
          <div
            class="border-2 h-40 flex flex-col p-3 ssm:p-5"
            :class="{
              'bg-[url(@/components/image/PlaceHolder.png)] bg-cover bg-center': !Joueur.lolRank,
            }"
          >
            <h2
              class="text-sm ssm:text-base md:text-xl xxl:text-2xl font-semibold uppercase"
              v-html="colorLastWord('Rank Actuel')"
            ></h2>
            <img
              v-if="Joueur.lolRank"
              class="h-20 w-20 m-auto object-cover z-0"
              :src="urlFor(Joueur.lolRank?.portrait)?.url()"
              :alt="`Portrait de ${Joueur.lolRank.name ?? ''}`"
            />
          </div>
          <div
            class="border-2 h-40 flex flex-col p-3 ssm:p-5"
            :class="{
              'bg-[url(@/components/image/PlaceHolder.png)] bg-cover bg-center': !Joueur.lolMode,
            }"
          >
            <h2
              class="text-sm ssm:text-base md:text-xl xxl:text-2xl font-semibold uppercase"
              v-html="colorLastWord('Mode de jeu préféré')"
            ></h2>
            <p v-for="Mode in Joueur.lolMode" :key="Mode._id" class="m-auto">
              {{ Mode.name }}
            </p>
          </div>
          <div
            class="border-2 h-40 flex flex-col p-3 ssm:p-5"
            :class="{
              'bg-[url(@/components/image/PlaceHolder.png)] bg-cover bg-center': !Joueur.lolItem,
            }"
          >
            <h2
              class="text-sm ssm:text-base md:text-xl xxl:text-2xl font-semibold uppercase"
              v-html="colorLastWord('Items favoris')"
            ></h2>
            <img
              v-if="Joueur.lolItem"
              class="h-20 w-20 m-auto object-cover z-0"
              :src="urlFor(Joueur.lolItem?.portrait)?.url()"
              :alt="`Portrait de ${Joueur.lolItem.name ?? ''}`"
            />
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
.last-word {
  color: #ae47f2;
}
</style>
