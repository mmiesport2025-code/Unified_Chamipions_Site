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
        <li><RouterLink to="/equipes/valorant" class="text-xs lg:text-xl">Valorant</RouterLink></li>
        <li>
          <RouterLink to="/equipes/league-of-legends" class="text-xs lg:text-xl"
            >League of Legends</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/equipes/mario-kart-8-deluxe" class="text-xs lg:text-xl"
            >Mario Kart 8 Deluxe</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/equipes/rocket-league" class="text-xs lg:text-xl"
            >Rocket League</RouterLink
          >
        </li>
      </ul>
      <ul>
        <li><h2 class="text-sm lg:text-3xl uppercase font-bold mb-2.5">Liens utiles</h2></li>
        <li><RouterLink to="/calendrier" class="text-xs lg:text-xl">Calendrier</RouterLink></li>
        <li><RouterLink to="/Apropos" class="text-xs lg:text-xl">Qui sommes-nous ?</RouterLink></li>
        <li><RouterLink to="/Apropos" class="text-xs lg:text-xl">Histoire du club</RouterLink></li>
        <li>
          <RouterLink to="/MentionsLegales" class="text-xs lg:text-xl">Mentions légales</RouterLink>
        </li>
        <li>
          <RouterLink to="/PolitiqueConfidentialite" class="text-xs lg:text-xl"
            >Politique de confidentialité</RouterLink
          >
        </li>
      </ul>
      <ul>
        <li><h2 class="text-sm lg:text-3xl uppercase font-bold mb-2.5">Contacts et réseaux</h2></li>
        <li><RouterLink to="/candidature" class="text-xs lg:text-xl">Candidature</RouterLink></li>
        <li><RouterLink to="/contact" class="text-xs lg:text-xl">Contact</RouterLink></li>
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
