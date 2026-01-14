<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Hamburger from './icons/Hamburger.vue'
import { RouterLink } from 'vue-router'
import { ref, watch, onUnmounted } from 'vue'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}

watch(isOpen, (open) => {
  if (open) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

// Sécurité : on remet le scroll si le composant est démonté
onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header
    class="bg-NoirPur text-Blanc w-full h-[70px] xl:h-[120px] flex items-center justify-between px-5 xl:px-24 fixed z-50"
  >
    <!-- Logo -->
    <RouterLink
      to="/"
      class="flex items-center gap-4 hover:opacity-70 transition-opacity"
      @click="closeMenu"
    >
      <img class="h-[50px] xl:h-[90px]" src="./image/LogoUnifiedChampions.png" alt="Logo" />
      <div>
        <p class="font-Inter uppercase font-bold text-xl xl:text-3xl">Unite to win</p>
        <p
          class="-mt-1 font-Inter uppercase font-bold text-[7px] xl:text-[10px] tracking-[0.13rem] xl:tracking-[0.19rem]"
        >
          Unified Champions club
        </p>
      </div>
    </RouterLink>

    <!-- Bouton hamburger (mobile) -->
    <button class="md:hidden z-50" @click="toggleMenu">
      <Hamburger />
    </button>

    <!-- Nav desktop -->
    <nav class="hidden md:block">
      <ul class="flex gap-5 xl:gap-12 text-sm xl:text-xl font-Inter font-extrabold uppercase">
        <li><RouterLink to="/Equipes">équipes</RouterLink></li>
        <li><RouterLink to="/Apropos">à propos</RouterLink></li>
        <li><RouterLink to="/calendrier">calendrier</RouterLink></li>
        <li><RouterLink to="/stream">stream</RouterLink></li>
        <li><RouterLink to="/candidature">candidature</RouterLink></li>
      </ul>
    </nav>
  </header>

  <!-- MENU MOBILE -->
  <transition name="fade-slide">
    <nav
      v-if="isOpen"
      class="fixed inset-0 bg-NoirPur text-Blanc flex flex-col items-center justify-center gap-16 text-2xl font-Inter font-extrabold uppercase md:hidden z-40"
    >
      <RouterLink to="/Equipes" @click="closeMenu">équipes</RouterLink>
      <RouterLink to="/Apropos" @click="closeMenu">à propos</RouterLink>
      <RouterLink to="/calendrier" @click="closeMenu">calendrier</RouterLink>
      <RouterLink to="/stream" @click="closeMenu">stream</RouterLink>
      <RouterLink to="/candidature" @click="closeMenu">candidature</RouterLink>
    </nav>
  </transition>
</template>
<style>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
