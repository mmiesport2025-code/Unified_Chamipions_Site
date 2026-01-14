<script setup lang="ts">
import type { FullMatch } from '@/types/match'
import { computed } from 'vue'
import { useSanityImage } from '@/composables/sanityImage'

const { urlFor } = useSanityImage()

const props = defineProps<{
  match: FullMatch
  LeProchain?: boolean
}>()

const date = computed(() => {
  const d = new Date(props.match.debut)
  return d.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
  })
})

const heure = computed(() => {
  const d = new Date(props.match.debut)
  return d.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
  })
})
</script>

<template>
  <div
    class="bg-Blanc w-full py-2.5 px-6 md:px-12 font-semibold text-sm xs:text-lg md:text-2xl flex justify-between items-center text-Noir text-center border border-Noir rounded"
    :class="{ 'border-none !bg-Violet700 !text-Blanc': LeProchain }"
  >
    <div class="flex flex-col justify-center items-center">
      <p>{{ date }}</p>
      <p>{{ heure }}</p>
    </div>
    <div class="flex flex-col justify-center items-center">
      <p class="mb-2 xs:mb-4 hidden" :class="{ '!block': LeProchain }">Prochainement</p>
      <p>{{ props.match.nom }}</p>
      <p>{{ props.match.gamemode.nom_reduit }}</p>
    </div>
    <div class="flex justify-center items-center w-14 md:w-24 h-14 md:h-24">
      <img
        v-if="LeProchain"
        class="w-10 ssm:w-12 sm:w-16 h-10 ssm:h-12 sm:h-16"
        :src="urlFor(props.match.jeu?.iconeB)?.url() ?? ''"
        :alt="props.match.jeu?.nom ? `icone ${props.match.jeu.nom}` : ''"
      />
      <img
        v-else
        class="w-10 ssm:w-12 sm:w-16 h-10 ssm:h-12 sm:h-16"
        :src="urlFor(props.match.jeu?.iconeN)?.url() ?? ''"
        :alt="props.match.jeu?.nom ? `icone ${props.match.jeu.nom}` : ''"
      />
    </div>
  </div>
</template>
