<script setup lang="ts">
import { ref, computed } from 'vue'

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

import { onMounted } from 'vue'
import type { FullMatch } from '@/types/match'
const AllMatchs = ref<FullMatch[]>([])
const MatchsQuery = `
*[_type == "match"]
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
})
</script>

<template>
  <article>
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
</template>
