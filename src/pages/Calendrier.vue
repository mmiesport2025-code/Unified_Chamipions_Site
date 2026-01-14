<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const choiceFormat = ref<number>(1)
const choiceTri = ref<number>(1)

function selectFormat(value: number) {
  choiceFormat.value = value
}

function selectTri(value: number) {
  choiceTri.value = value
}

import type { FullMatch } from '@/types/match'

const AllMatchs = ref<FullMatch[]>([])
const OldMatchs = ref<FullMatch[]>([])
const NewMatchs = ref<FullMatch[]>([])

const MatchsQuery = `
*[_type == "match" && debut >= now()]
| order(debut asc)[0...5]{
  _id,
  nom,
  debut,
  fin,
  diffusion_en_live,
  url_live,
  rediffusion,
  url_rediffusion,

  equipes[]->{
    _id,
    nom,
    logo{
      asset->{_id, url}
    }
  },

  jeu->{
    _id,
    nom,
    iconeB{
      asset->{_id, url}
    },
    iconeN{
      asset->{_id, url}
    }
  },

  gamemode->{
    _id,
    nom_reduit,
    nom_complet
  }
}
`
const newMatchsQuery = `
*[_type == "match" && debut >= now()]
| order(debut asc)[0...5]{
  _id,
  nom,
  debut,
  fin,
  diffusion_en_live,
  url_live,
  rediffusion,
  url_rediffusion,

  equipes[]->{
    _id,
    nom,
    logo{
      asset->{_id, url}
    }
  },

  jeu->{
    _id,
    nom,
    iconeB{
      asset->{_id, url}
    },
    iconeN{
      asset->{_id, url}
    }
  },

  gamemode->{
    _id,
    nom_reduit,
    nom_complet
  }
}
`
const oldMatchsQuery = `
*[_type == "match" && debut < now()]
| order(debut asc)[0...5]{
  _id,
  nom,
  debut,
  fin,
  diffusion_en_live,
  url_live,
  rediffusion,
  url_rediffusion,

  equipes[]->{
    _id,
    nom,
    logo{
      asset->{_id, url}
    }
  },

  jeu->{
    _id,
    nom,
    iconeB{
      asset->{_id, url}
    },
    iconeN{
      asset->{_id, url}
    }
  },

  gamemode->{
    _id,
    nom_reduit,
    nom_complet
  }
}
`

onMounted(async () => {
  // Tout les matchs
  const AllMatchsRes = await fetch(
    'https://s8s4tdl3.api.sanity.io/v2026-01-04/data/query/production?query=' +
      encodeURIComponent(MatchsQuery),
  )
  const AllMatchsData = await AllMatchsRes.json()
  AllMatchs.value = AllMatchsData.result
  // Anciens matchs
  const OldMatchsRes = await fetch(
    'https://s8s4tdl3.api.sanity.io/v2026-01-04/data/query/production?query=' +
      encodeURIComponent(oldMatchsQuery),
  )
  const OldMatchsData = await OldMatchsRes.json()
  OldMatchs.value = OldMatchsData.result
  // Prochains matchs
  const NewMatchsRes = await fetch(
    'https://s8s4tdl3.api.sanity.io/v2026-01-04/data/query/production?query=' +
      encodeURIComponent(newMatchsQuery),
  )
  const NewMatchsData = await NewMatchsRes.json()
  NewMatchs.value = NewMatchsData.result
})

import CalendarEventBar from '@/components/Calendar-event-bar.vue'
</script>
<template>
  <header class="h-[calc(50vh)] h-sm:h-[calc(100vh-120px)] bg-NoirPur">
    <div
      class="bg-[url('@/components/image/CoverCalandar.png')] bg-cover bg-center flex flex-col justify-end md:justify-center items-start px-[10%] xl:px-[10%] pb-20 md:pb-0 w-full h-full"
    >
      <h1
        class="uppercase font-Agrandir text-2xl sm:text-4xl lg:text-5xl text-left text-Violet700 xl:w-[60%]"
      >
        Planning des matchs
      </h1>
      <p
        class="text-Blanc text-base sm:text-xl xl:text-2xl font-semibold pb-3 xl:pb-5 pt-5 xl:pt-10 xl:w-[60%]"
      >
        Suis la compétition de près !
      </p>
      <p class="text-Blanc xl:w-[60%]">
        Découvre le calendrier complet des matchs à venir et ne manque aucun affrontement de nos
        équipes. Entre tournois étudiants et ligues nationales, chaque match est une nouvelle
        occasion de vibrer avec UC
      </p>
    </div>
  </header>
  <section>
    <h2>Planning des matchs</h2>
    <div class="flex">
      <button @click="selectFormat(1)">Calendrier</button>
      <button @click="selectFormat(2)">Planning</button>
    </div>
    <!--Calendrier à bar-->
    <article v-if="choiceFormat != 2">
      <div class="flex">
        <button @click="selectTri(1)">à venir</button>
        <button @click="selectTri(2)">Terminé</button>
        <article v-if="choiceTri != 2">
          <div class="flex flex-col gap-6">
            <CalendarEventBar
              v-for="(match, index) in NewMatchs"
              :key="match._id"
              :match="match"
              :LeProchain="index === 0"
            />
          </div>
        </article>
        <article v-if="choiceTri === 2">
          <div class="flex flex-col gap-6">
            <CalendarEventBar
              v-for="(match, index) in OldMatchs"
              :key="match._id"
              :match="match"
              :LeProchain="index === 0"
            />
          </div>
        </article>
      </div>
    </article>
    <!--Calendrier classique-->
    <article v-if="choiceFormat === 2"><p>test 2</p></article>
  </section>
</template>
