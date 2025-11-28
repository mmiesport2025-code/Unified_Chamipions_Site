<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import FooterCosmetic from './image/FooterCosmetic.vue'
</script>
<template>
  <footer class="w-full text-Blanc">
    <FooterCosmetic class="mb-[-1px]" />
    <nav class="flex justify-evenly font-Inter p-5 gap-2.5 xl:py-20 bg-Noir">
      <ul class="flex flex-col gap-1 lg:gap-2.5">
        <li><h2 class="text-[11px] xl:text-2xl uppercase font-bold mb-2.5">Nos équipes</h2></li>
        <li>
          <RouterLink to="/equipes/valorant" class="text-[11px] xl:text-lg"
            ><p>Valorant</p></RouterLink
          >
        </li>
        <li>
          <RouterLink to="/equipes/league-of-legends" class="text-[11px] xl:text-lg"
            ><p>League of Legends</p></RouterLink
          >
        </li>
        <li>
          <RouterLink to="/equipes/mario-kart-8-deluxe" class="text-[11px] xl:text-lg"
            ><p>Mario Kart 8 Deluxe</p></RouterLink
          >
        </li>
        <li>
          <RouterLink to="/equipes/rocket-league" class="text-[11px] xl:text-lg"
            ><p>Rocket League</p></RouterLink
          >
        </li>
      </ul>
      <ul class="flex flex-col gap-1 lg:gap-2.5">
        <li><h2 class="text-[11px] xl:text-2xl uppercase font-bold mb-2.5">Liens utiles</h2></li>
        <li>
          <RouterLink to="/calendrier" class="text-[11px] xl:text-lg"><p>Calendrier</p></RouterLink>
        </li>
        <li>
          <RouterLink to="/Apropos" class="text-[11px] xl:text-lg"
            ><p>Qui sommes-nous ?</p></RouterLink
          >
        </li>
        <li>
          <RouterLink to="/Apropos" class="text-[11px] xl:text-lg"
            ><p>Histoire du club</p></RouterLink
          >
        </li>
        <li>
          <RouterLink to="/MentionsLegales" class="text-[11px] xl:text-lg"
            ><p>Mentions légales</p></RouterLink
          >
        </li>
        <li>
          <RouterLink to="/PolitiqueConfidentialite" class="text-[11px] xl:text-lg"
            ><p>Politique de <br class="block sm:hidden" />confidentialité</p></RouterLink
          >
        </li>
      </ul>
      <ul class="flex flex-col gap-1 lg:gap-2.5">
        <li>
          <h2 class="text-[11px] xl:text-2xl uppercase font-bold mb-2.5">
            Contacts et<br />réseaux
          </h2>
        </li>
        <li>
          <RouterLink to="/candidature" class="text-[11px] xl:text-lg"
            ><p>Candidature</p></RouterLink
          >
        </li>
        <li>
          <RouterLink to="/contact" class="text-[11px] xl:text-lg"><p>Contact</p></RouterLink>
        </li>
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
    <div class="text-center font-Inter text-[#AFAFAF] text-[11px] xl:text-lg pb-5 xl:pb-10 bg-Noir">
      <p>© 2025 Unified Champions Club. Tous droits réservés.</p>
    </div>
  </footer>
</template>
