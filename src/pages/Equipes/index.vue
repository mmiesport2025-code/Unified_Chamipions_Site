<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted, ref } from 'vue'

import type { FullEquipe } from '@/types/equipe'

const equipes = ref<FullEquipe[]>([])

onMounted(async () => {
  const dataset = 'production'
  const query = encodeURIComponent(`
    *[_type == "equipe"]{
      _id,
      nom,
      joueurs[]->{
        _id,
        prenom,
        nom,
        pseudo
      },
      jeu->{
        _id,
        nom
      }
    }
  `)

  const url = `https://s8s4tdl3.api.sanity.io/v2026-01-02/data/query/${dataset}?query=${query}`

  try {
    const res = await fetch(url)
    const data = await res.json()
    equipes.value = data.result
  } catch (err) {
    console.error(err)
  }
})
</script>
<template>
  <header>
    <h1 class="uppercase">équipe</h1>
    <p>La liste exaustives des équipes<br />de Unified Champions Club</p>
  </header>
  <section>
    <h2>Les <span>catégories</span></h2>

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
      <!-- <h3>Valorant</h3> -->
      <div v-for="equipe in equipes" :key="equipe._id" v-bind="equipe">
        <h4>{{ equipe.nom }}</h4>
        <ul>
          <li v-for="joueur in equipe.joueurs" :key="joueur._id">
            {{ joueur.prenom }} {{ joueur.nom }}
          </li>
        </ul>
        <router-link :to="`/Equipes/${equipe._id}`">
          <button>Voir plus</button>
        </router-link>
      </div>
    </article>
  </section>
</template>
