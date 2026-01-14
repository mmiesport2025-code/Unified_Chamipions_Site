<script lang="ts" setup>
import type { FullMatch } from '@/types/match'
import { ref, onMounted, computed } from 'vue'

const props = defineProps<{
  date: number
  DateData: Date
  currentMonth: boolean
}>()

const hasEvent = computed(() => {
  return getEventsForDate(props.DateData).length > 0
})

const AllMatchs = ref<FullMatch[]>([])

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

onMounted(async () => {
  // Tout les matchs
  const AllMatchsRes = await fetch(
    'https://s8s4tdl3.api.sanity.io/v2026-01-04/data/query/production?query=' +
      encodeURIComponent(MatchsQuery),
  )
  const AllMatchsData = await AllMatchsRes.json()
  AllMatchs.value = AllMatchsData.result
})

function getEventsForDate(date: Date) {
  if (!parsedEvents.value.length) return []

  const dayStart = new Date(date)
  dayStart.setHours(0, 0, 0, 0)

  const dayEnd = new Date(date)
  dayEnd.setHours(23, 59, 59, 999)

  return parsedEvents.value.filter((event) => event.start <= dayEnd && event.end >= dayStart)
}

const parsedEvents = computed(() =>
  AllMatchs.value.map((e) => ({
    ...e,
    start: new Date(e.debut),
    end: new Date(e.fin ? e.fin : e.debut),
  })),
)
</script>
<template>
  <div
    class="border border-Noir rounded-xl overflow-hidden md:h-36 lg:h-48 xl:h-60 flex flex-col justify-between font-Sarabun"
    :class="{
      'bg-gradient-to-br from-[#ae47f2] to-[#65298c] text-Blanc bg-Blanc!': hasEvent,
      'opacity-20': !props.currentMonth,
    }"
  >
    <div
      class="border border-Noir m-[-2px] flex justify-center items-center h-6 ssm:h-8 md:h-12 lg:h-[60px] xl:h-[72px]"
      :class="{ '!border-Blanc': hasEvent }"
    >
      <img
        v-for="event in getEventsForDate(props.DateData)"
        :key="event._id"
        :src="event.jeu.iconeB.asset.url"
        :alt="`Logo de ${event.jeu.nom}`"
        class="w-4 md:w-6 lg:w-8 xl:w-10 h-4 md:h-6 lg:h-8 xl:h-10 object-cover m-1 inline-block"
      />
    </div>
    <div class="text-center font-bold pb-0 md:pb-1 lg:pb-0 text-xl md:text-3xl lg:text-5xl xl:text-7xl">
      {{ props.date }}
    </div>
    <div
      class="border m-[-2px] text-center border-Noir h-8 ssm:h-11 lg:h-12 flex justify-center items-center px-2"
      :class="{ '!border-Blanc': hasEvent }"
    >
      <p
        v-for="event in getEventsForDate(props.DateData)"
        :key="event._id"
        :src="event.jeu.iconeB.asset.url"
        :alt="`Logo de ${event.jeu.nom}`"
        class="uppercase font-bold leading-[12px] ssm:leading-auto text-[8px] ssm:text-[10px] sm:text-sm lg:text-lg"
      >
        {{ event.gamemode.nom_reduit }}
      </p>
    </div>
  </div>
</template>
