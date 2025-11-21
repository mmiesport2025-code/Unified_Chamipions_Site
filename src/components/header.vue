<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Hamburger from './icons/Hamburger.vue'
</script>

<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header
    class="bg-NoirPur text-Blanc w-full h-[70px] lg:h-[120px] flex items-center justify-between px-5 lg:px-24"
  >
    <a href="/" class="flex items-center gap-4">
      <img class="h-[50px] lg:h-[90px]" src="./image/LogoUnifiedChampions.png" alt="Logo" />
      <div>
        <p class="font-Inter uppercase font-bold text-xl lg:text-3xl">Unite to win</p>
        <p
          class="-mt-1 font-Inter uppercase font-bold text-[7px] lg:text-[10px] tracking-[0.13rem] lg:tracking-[0.19rem]"
        >
          Unified Champions club
        </p>
      </div>
    </a>
    <button class="lg:hidden">
      <Hamburger />
    </button>
    <nav class="hidden lg:block">
      <ul class="flex gap-12 text-xl font-Inter font-extrabold uppercase">
        <li><a href="">équipes</a></li>
        <li><a href="">à propos</a></li>
        <li><a href="">calendrier</a></li>
        <li><a href="">steam</a></li>
        <li><a href="">candiater</a></li>
      </ul>
    </nav>
  </header>
</template>
