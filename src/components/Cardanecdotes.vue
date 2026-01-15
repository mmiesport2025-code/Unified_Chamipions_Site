<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { Message } from '@/types/message'
import { ref } from 'vue'

defineProps<{
  message: Message
}>()

const isOpen = ref(false)
</script>
<template>
  <div class="p-5 pb-2 rounded-3xl bg-GrisFonce text-Blanc border border-Gris flex h-fit">
    <img
      class="min-w-10 xs:min-w-14 sm:min-w-20 h-10 xs:h-14 sm:h-20 object-cover rounded-full mr-5"
      :src="message.benevole.portrait?.asset.url"
      :alt="`Portrait de ${message.benevole.prenom}`"
    />
    <div class="my-4">
      <h3 class="font-Agrandir text-lg xs:text-2xl mb-4">{{ message.benevole.nom }}</h3>
      <p class="font-normal">{{ message.texte }}</p>
      <p class="font-normal mt-3" v-if="isOpen">{{ message.texte_suite }}</p>
      <div class="flex justify-end">
        <button
          @click="isOpen = !isOpen"
          class="ml-auto border-2 px-2 py-1 border-Blanc rounded-lg bg-[#FFFFFF20] mt-8"
        >
          Tout voir
        </button>
      </div>
    </div>
  </div>
</template>
