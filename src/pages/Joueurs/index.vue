<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { AllJoueurs } from '@/backend'
import { RouterLink } from 'vue-router'
const listeJoueurs = await AllJoueurs()
</script>
<template>
  <section>
    <h1 class="uppercase">Liste joueurs</h1>
    <RouterLink v-for="joueur in listeJoueurs" :key="joueur.id" :to="`/Joueurs/${joueur.id}`">
      <p>{{ joueur.nom }}</p>
    </RouterLink>
  </section>
</template>
