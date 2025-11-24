<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Hamburger from './icons/Hamburger.vue'
import { RouterLink } from 'vue-router'
</script>

<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header
    class="bg-NoirPur text-Blanc w-full h-[70px] lg:h-[120px] flex items-center justify-between px-5 lg:px-24 absolute"
  >
    <RouterLink to="/" class="flex items-center gap-4">
      <img class="h-[50px] lg:h-[90px]" src="./image/LogoUnifiedChampions.png" alt="Logo" />
      <div>
        <p class="font-Inter uppercase font-bold text-xl lg:text-3xl">Unite to win</p>
        <p
          class="-mt-1 font-Inter uppercase font-bold text-[7px] lg:text-[10px] tracking-[0.13rem] lg:tracking-[0.19rem]"
        >
          Unified Champions club
        </p>
      </div>
    </RouterLink>
    <button class="lg:hidden">
      <Hamburger />
    </button>
    <nav class="hidden lg:block">
      <ul class="flex gap-12 text-xl font-Inter font-extrabold uppercase">
        <li><RouterLink to="/Equipes/test">équipes</RouterLink></li>
        <li><RouterLink to="/Apropos">à propos</RouterLink></li>
        <li><RouterLink to="/calendrier">calendrier</RouterLink></li>
        <li><RouterLink to="/stream">stream</RouterLink></li>
        <li><RouterLink to="/candidature">candidature</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>
