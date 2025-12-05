<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { EquipesByID } from '@/backend'
import { useRoute } from 'vue-router'
const route = useRoute('/Equipes/[id]')
const Equipe = await EquipesByID(route.params.id as string)
</script>
<template>
  <h1>{{ Equipe.nom }}</h1>
</template>
