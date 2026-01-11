<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'

import type { FullEquipe } from '@/types/equipe'
import { useSanityImage } from '@/composables/sanityImage'

const { urlFor } = useSanityImage()

const equipes = ref<FullEquipe[]>([])

const specificiteFiltre = ref<'Masculine' | 'Feminine' | 'Mixte' | null>(null)
const jeuFiltre = ref<string | null>(null)

onMounted(async () => {
  const dataset = 'production'
  const query = encodeURIComponent(`
  *[_type == "equipe"]{
    _id,
    nom,
    appartenance_au_club,
    specificite,
    joueurs[]->{
      _id,
      pseudo,
      nom,
      prenom,
      portrait
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
`)

  const url = `https://s8s4tdl3.api.sanity.io/v2026-01-02/data/query/${dataset}?query=${query}`

  try {
    const res = await fetch(url)
    const data = await res.json()
    equipes.value = data.result
  } catch (err) {
    console.error(err)
  }
})

const equipesFiltrees = computed(() => {
  return equipes.value.filter((equipe) => {
    const matchSpecificite =
      !specificiteFiltre.value || equipe.specificite === specificiteFiltre.value

    const matchJeu = !jeuFiltre.value || equipe.jeu.nom === jeuFiltre.value

    return matchSpecificite && matchJeu
  })
})

// 2️⃣ On regroupe ensuite par jeu
const equipesParJeu = computed(() => {
  const map = new Map<string, { jeu: FullEquipe['jeu']; equipes: FullEquipe[] }>()

  equipesFiltrees.value.forEach((equipe) => {
    const jeuId = equipe.jeu._id
    if (!map.has(jeuId)) {
      map.set(jeuId, { jeu: equipe.jeu, equipes: [] })
    }
    map.get(jeuId)!.equipes.push(equipe)
  })

  return Array.from(map.values())
})
</script>
<template>
  <header
    class="bg-[url('@/components/image/CoverPageEquipe.png')] bg-cover bg-center h-[55vh] xl:h-[65vh] flex flex-col justify-end xl:justify-center items-start gap-2 sm:gap-4 xl:gap-5 pl-[10%] xl:pl-[15%] pb-12 xl:pb-0"
  >
    <!--                                                                        h-[calc(100vh-70px)] xl:h-[calc(100vh-120px)] -->
    <h1
      class="uppercase bg-gradient-to-r from-[#a900c6] to-[#e6a0ff] bg-clip-text text-[#00000000] font-Agrandir text-4xl sm:text-6xl xl:text-8xl font-black"
    >
      équipe
    </h1>
    <p class="text-Blanc text-base sm:text-xl xl:text-2xl font-semibold">
      La liste exaustives des équipes<br />de Unified Champions Club
    </p>
  </header>
  <section class="text-center mt-12 md:mt-24 mx-5 md:mx-10">
    <h2 class="uppercase font-Agrandir text-2xl sm:text-4xl lg:text-5xl mb-6">
      Les <span class="text-[#AE47F2]">catégories</span>
    </h2>
    <div class="flex gap-[5px] md:gap-[50px] lg:gap-[75px] justify-center flex-wrap">
      <button
        class="min-w-[120px] md:min-w-0 max-w-[200px] md:max-w-none flex-1 md:flex-none md:w-auto border border-[#939393] h-7 md:h-12 lg:h-14 md:px-3 lg:px-3.5 text-[10px] ssm:text-sm md:text-lg lg:text-2xl"
        @click="specificiteFiltre = specificiteFiltre === 'Masculine' ? null : 'Masculine'"
      >
        Équipes masculines
      </button>
      <button
        class="min-w-[120px] md:min-w-0 max-w-[200px] md:max-w-none flex-1 md:flex-none md:w-auto border border-[#939393] h-7 md:h-12 lg:h-14 md:px-3 lg:px-3.5 text-[10px] ssm:text-sm md:text-lg lg:text-2xl"
        @click="specificiteFiltre = specificiteFiltre === 'Mixte' ? null : 'Mixte'"
      >
        Équipes mixtes
      </button>
      <button
        class="min-w-[120px] md:min-w-0 max-w-[200px] md:max-w-none flex-1 md:flex-none md:w-auto border border-[#939393] h-7 md:h-12 lg:h-14 md:px-3 lg:px-3.5 text-[10px] ssm:text-sm md:text-lg lg:text-2xl"
        @click="specificiteFiltre = specificiteFiltre === 'Feminine' ? null : 'Feminine'"
      >
        Équipes féminines
      </button>
    </div>
    <div class="flex flex-wrap gap-4 sm:gap-8 lg:gap-10 xl:gap-12 justify-center mt-12">
      <button
        class="w-16 h-16 ssm:w-24 ssm:h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-xl bg-[url('@/components/image/ButtonValorant.png')] bg-cover bg-center"
        @click="jeuFiltre = jeuFiltre === 'Valorant' ? null : 'Valorant'"
      ></button>
      <button
        class="w-16 h-16 ssm:w-24 ssm:h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-xl bg-[url('@/components/image/ButtonLeagueOfLegends.png')] bg-cover bg-center"
        @click="jeuFiltre = jeuFiltre === 'League of legends' ? null : 'League of legends'"
      ></button>
      <button
        class="w-16 h-16 ssm:w-24 ssm:h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-xl bg-[url('@/components/image/ButtonMarioKart8.png')] bg-cover bg-center"
        @click="jeuFiltre = jeuFiltre === 'Mario Kart 8' ? null : 'Mario Kart 8'"
      ></button>
      <button
        class="w-16 h-16 ssm:w-24 ssm:h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-xl bg-[url('@/components/image/ButtonRocketLeague.png')] bg-cover bg-center"
        @click="jeuFiltre = jeuFiltre === 'Rocket League' ? null : 'Rocket League'"
      ></button>
    </div>
  </section>
  <section
    class="text-center mt-12 md:mt-24 w-full sm:w-[600px] md:w-[700px] lg:w-[950px] xl:w-[1200px] xxl:w-[1300px] px-5 ssm:mx-auto"
  >
    <h2 class="uppercase font-Agrandir text-2xl sm:text-4xl lg:text-5xl mb-6">
      Les <span class="text-[#AE47F2]">équipes</span>
    </h2>

    <div v-for="jeuGroup in equipesParJeu" :key="jeuGroup.jeu._id">
      <article class="mb-12 sm:mb-16 lg:mb-20 flex flex-col">
        <h3
          class="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 text-left uppercase font-Agrandir"
        >
          {{ jeuGroup.jeu.nom }}
        </h3>
        <div class="flex flex-wrap gap-4 sm:gap-8 lg:gap-10 xl:gap-12 justify-center">
          <div
            v-for="equipe in jeuGroup.equipes"
            :key="equipe._id"
            class="w-full ssm:px-12 relative overflow-hidden rounded"
          >
            <img
              v-if="equipe.jeu.fond_card"
              :src="urlFor(equipe.jeu.fond_card)?.width(600).url()"
              :alt="equipe.nom"
              class="w-full h-[220px] ssm:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[500px] xl:h-[600px] object-cover rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] xl:rounded-[50px] overflow-hidden"
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
                      borderColor: equipe.jeu.border_color + ' !important',
                      backgroundColor: equipe.jeu.background_color + ' !important',
                    }"
                    class="border-2 rounded rounded-br-[20px] sm:rounded-br-[30px] lg:rounded-br-[40px] xl:rounded-br-[50px] font-bold lg:text-3xl lg:px-8 lg:py-4 md:text-2xl md:px-6 md:py-3 text-lg px-5 py-2.5"
                  >
                    Voir plus
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
