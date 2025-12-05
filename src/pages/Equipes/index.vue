<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue'
import { AllTeam, TeamBySpecificityAndGame } from '@/backend'
import { RouterLink } from 'vue-router'
const listeEquipe = await AllTeam()
const FilterSpe = ref('')
const FilterGame = ref('')
// const listeEquipeFilter = await TeamBySpecificityAndGame(FilterSpe.value, FilterGame.value)

import { computed, watch } from 'vue'

const listeEquipeFilter = ref<Equipe[]>([])

const filters = computed(() => ({ spe: FilterSpe.value, game: FilterGame.value }))

watch(
  filters,
  async (f) => {
    const res = await TeamBySpecificityAndGame(f.spe || '', f.game || '')
    listeEquipeFilter.value = (res ?? []) as Equipe[]
  },
  { immediate: true, deep: true },
)
</script>
<template>
  <header>
    <h1 class="uppercase">équipe</h1>
    <p>La liste exaustives des équipes<br />de Unified Champions Club</p>
  </header>
  <section>
    <h2>Les <span>catégories</span></h2>
    <div>
      <button @click="FilterSpe = 'Masculine'">Équipes masculines</button>
      <button @click="FilterSpe = 'Feminine'">Équipes féminines</button>
      <button @click="FilterSpe = 'Mixte'">Équipes mixtes</button>
    </div>
    <div>
      <button><img /></button>
      <button><img /></button>
      <button><img /></button>
      <button><img /></button>
    </div>
  </section>
  <section>
    <h2>Les <span>équipes</span></h2>
    <article>
      <h3>Valorant</h3>
      <p>{{ listeEquipe }}</p>
      <div v-for="equipe in listeEquipe" :key="equipe.id" v-bind="equipe">
        <h4>{{ equipe.nom }}</h4>
        <router-link :to="`/Equipes/${equipe.id}`">
          <button>Voir plus</button>
        </router-link>
      </div>
      <p>{{ listeEquipeFilter }}</p>
    </article>
  </section>
</template>
