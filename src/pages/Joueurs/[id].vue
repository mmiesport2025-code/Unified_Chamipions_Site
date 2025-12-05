<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { JoueursByID } from '@/backend'
import { useRoute } from 'vue-router'
const route = useRoute('/Joueurs/[id]')
const Joueur = await JoueursByID(route.params.id as string)
</script>
<template>
  <h1>{{ Joueur.nom }}</h1>
</template>
