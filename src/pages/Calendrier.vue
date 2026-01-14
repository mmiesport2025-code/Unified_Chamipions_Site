<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

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

const year = ref(2026)
const month = ref(0) // janvier = 0

const calendarDays = computed(() => generateCalendar(year.value, month.value))

function prevMonth() {
  if (month.value === 0) {
    month.value = 11
    year.value--
  } else {
    month.value--
  }
}

function nextMonth() {
  if (month.value === 11) {
    month.value = 0
    year.value++
  } else {
    month.value++
  }
}

function getEventsForDate(date: Date) {
  if (!parsedEvents.value.length) return []

  const dayStart = new Date(date)
  dayStart.setHours(0, 0, 0, 0)

  const dayEnd = new Date(date)
  dayEnd.setHours(23, 59, 59, 999)

  return parsedEvents.value.filter((event) => event.start <= dayEnd && event.end >= dayStart)
}

type CalendarDay = {
  date: Date
  currentMonth: boolean
}

const parsedEvents = computed(() =>
  AllMatchs.value.map((e) => ({
    ...e,
    start: new Date(e.debut),
    end: new Date(e.fin ? e.fin : e.debut),
  })),
)

function generateCalendar(year: number, month: number): CalendarDay[] {
  const days: CalendarDay[] = []

  const firstDay = new Date(year, month, 1)
  const startOffset = (firstDay.getDay() + 6) % 7 // lundi = 0

  // 🔙 Jours du mois précédent
  for (let i = startOffset; i > 0; i--) {
    const date = new Date(year, month, 1 - i)
    days.push({
      date,
      currentMonth: false,
    })
  }

  // 🔵 Jours du mois courant
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  for (let d = 1; d <= daysInMonth; d++) {
    days.push({
      date: new Date(year, month, d),
      currentMonth: true,
    })
  }

  // 🔜 Jours du mois suivant (5 ou 6 lignes seulement)
  const totalCells = days.length <= 35 ? 35 : 42
  const remaining = totalCells - days.length

  for (let i = 1; i <= remaining; i++) {
    days.push({
      date: new Date(year, month + 1, i),
      currentMonth: false,
    })
  }

  return days
}
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
  <section class="my-12 md:my-24 mx-5 md:mx-10">
    <h2
      class="text-2xl sm:text-4xl lg:text-5xl font-bold text-left uppercase font-Agrandir mt-10 text-Violet700"
    >
      Planning des matchs
    </h2>
    <div class="flex gap-5 sm:gap-8 mt-4 lg:mt-6">
      <button
        class="text-sm sm:text-lg uppercase px-3 sm:px-5 py-2.5 sm:py-3 bg-Violet text-Blanc font-bold"
        :class="{ 'bg-Violet700': choiceFormat === 1 }"
        @click="selectFormat(1)"
      >
        Planning
      </button>
      <button
        class="text-sm sm:text-lg uppercase px-3 sm:px-5 py-2.5 sm:py-3 bg-Violet text-Blanc font-bold"
        :class="{ 'bg-Violet700': choiceFormat === 2 }"
        @click="selectFormat(2)"
      >
        Calendrier
      </button>
    </div>
    <!--Calendrier à bar-->
    <article v-if="choiceFormat != 2">
      <div class="flex gap-5 my-4 md:mt-12 lg:mt-24 md:mb-6 lg:mb-12">
        <button
          class="bg-Violet text-Blanc font-bold px-3 sm:px-5 py-2.5 sm:py-3 rounded-full uppercase"
          :class="{ 'bg-Violet700': choiceTri === 1 }"
          @click="selectTri(1)"
        >
          à venir
        </button>
        <button
          class="bg-Violet text-Blanc font-bold px-3 sm:px-5 py-2.5 sm:py-3 rounded-full uppercase"
          :class="{ 'bg-Violet700': choiceTri === 2 }"
          @click="selectTri(2)"
        >
          Terminé
        </button>
      </div>
      <div class="flex">
        <article v-if="choiceTri != 2" class="w-full">
          <div class="flex flex-col gap-6 w-full">
            <CalendarEventBar
              v-for="(match, index) in NewMatchs"
              :key="match._id"
              :match="match"
              :LeProchain="index === 0"
            />
          </div>
        </article>
        <article v-if="choiceTri === 2" class="w-full">
          <div class="flex flex-col gap-6 w-full">
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
    <article v-if="choiceFormat === 2">
      <button
        @click="
          () => {
            const now = new Date()
            year = now.getFullYear()
            month = now.getMonth()
          }
        "
      >
        Aujourd’hui
      </button>
      <div class="flex items-center justify-between mb-6">
        <button @click="prevMonth" class="px-4 py-2 rounded border hover:bg-gray-100">
          ← Mois précédent
        </button>

        <h2 class="text-xl font-bold uppercase">
          {{
            new Date(year, month).toLocaleDateString('fr-FR', {
              month: 'long',
              year: 'numeric',
            })
          }}
        </h2>

        <button @click="nextMonth" class="px-4 py-2 rounded border hover:bg-gray-100">
          Mois suivant →
        </button>
      </div>
      <div
        class="grid gap-4 transition-all duration-300"
        style="grid-template-columns: repeat(7, minmax(0, 1fr))"
      >
        <div
          v-for="(item, index) in calendarDays"
          :key="index"
          class="h-40 rounded-lg border flex flex-col justify-between"
          :class="
            item.currentMonth
              ? 'border-gray-500 bg-white'
              : 'border-gray-200 bg-gray-100 text-gray-400 opacity-40'
          "
        >
          <!-- Jour -->
          <div class="text-center text-2xl font-bold">
            {{ item.date.getDate() }}
          </div>

          <!-- Events -->
          <div v-if="item.currentMonth && getEventsForDate(item.date).length" class="space-y-1 p-2">
            <div
              v-for="event in getEventsForDate(item.date)"
              :key="event._id"
              class="bg-purple-600 text-white rounded px-2 py-1 text-xs"
            >
              <p class="font-semibold uppercase truncate">
                {{ event.jeu.nom }}
              </p>
              <p class="opacity-80">
                {{ event.gamemode.nom_reduit }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>
