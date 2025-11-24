<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import FooterCosmetic from './image/FooterCosmetic.vue'
</script>
<template>
  <footer class="w-full text-Blanc">
    <FooterCosmetic class="w-screen mb-[-1px]" />
    <nav class="flex justify-between font-Inter p-5 lg:px-80 lg:py-20 bg-Noir">
      <ul>
        <li><h2 class="text-sm lg:text-3xl uppercase font-bold mb-2.5">Nos équipes</h2></li>
        <li><a href="" class="text-xs lg:text-xl">Valorant</a></li>
        <li><a href="" class="text-xs lg:text-xl">League of Legends</a></li>
        <li><a href="" class="text-xs lg:text-xl">Mario Kart 8 Deluxe</a></li>
        <li><a href="" class="text-xs lg:text-xl">Rocket League</a></li>
      </ul>
      <ul>
        <li><h2 class="text-sm lg:text-3xl uppercase font-bold mb-2.5">Liens utiles</h2></li>
        <li><a href="" class="text-xs lg:text-xl">Calendrier</a></li>
        <li><a href="" class="text-xs lg:text-xl">Qui sommes-nous ?</a></li>
        <li><a href="" class="text-xs lg:text-xl">Histoire du club</a></li>
        <li><a href="" class="text-xs lg:text-xl">Mentions légales</a></li>
        <li><a href="" class="text-xs lg:text-xl">Politique de confidentialité</a></li>
      </ul>
      <ul>
        <li><h2 class="text-sm lg:text-3xl uppercase font-bold mb-2.5">Contacts et réseaux</h2></li>
        <li><a href="" class="text-xs lg:text-xl">Candidature</a></li>
        <li><a href="" class="text-xs lg:text-xl">Contact</a></li>
        <li>
          <div>
            <a href=""><img /></a>
            <a href=""><img /></a>
            <a href=""><img /></a>
            <a href=""><img /></a>
            <a href=""><img /></a>
          </div>
        </li>
      </ul>
    </nav>
    <div class="text-center font-Inter text-[#AFAFAF] text-xs lg:text-xl pb-5 lg:pb-10 bg-Noir">
      <p>© 2025 Unified Champions Club. Tous droits réservés.</p>
    </div>
  </footer>
</template>
