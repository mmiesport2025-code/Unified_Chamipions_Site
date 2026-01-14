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
          <RouterLink to="/equipes/valorant" class="text-[10px] xl:text-lg"
            ><p class="hover:opacity-70 active:opacity-40 transition-opacity">
              Valorant
            </p></RouterLink
          >
        </li>
        <li>
          <RouterLink to="/equipes/league-of-legends" class="text-[10px] xl:text-lg"
            ><p class="hover:opacity-70 active:opacity-40 transition-opacity">
              League of Legends
            </p></RouterLink
          >
        </li>
        <li>
          <RouterLink to="/equipes/mario-kart-8-deluxe" class="text-[10px] xl:text-lg"
            ><p class="hover:opacity-70 active:opacity-40 transition-opacity">
              Mario Kart 8 Deluxe
            </p></RouterLink
          >
        </li>
        <li>
          <RouterLink to="/equipes/rocket-league" class="text-[10px] xl:text-lg"
            ><p class="hover:opacity-70 active:opacity-40 transition-opacity">
              Rocket League
            </p></RouterLink
          >
        </li>
      </ul>
      <ul class="flex flex-col gap-1 lg:gap-2.5">
        <li><h2 class="text-[11px] xl:text-2xl uppercase font-bold mb-2.5">Liens utiles</h2></li>
        <li>
          <RouterLink to="/calendrier" class="text-[10px] xl:text-lg"
            ><p class="hover:opacity-70 active:opacity-40 transition-opacity">
              Calendrier
            </p></RouterLink
          >
        </li>
        <li>
          <RouterLink to="/Apropos" class="text-[10px] xl:text-lg"
            ><p class="hover:opacity-70 active:opacity-40 transition-opacity">
              Qui sommes-nous ?
            </p></RouterLink
          >
        </li>
        <li>
          <RouterLink to="/Apropos" class="text-[10px] xl:text-lg"
            ><p class="hover:opacity-70 active:opacity-40 transition-opacity">
              Histoire du club
            </p></RouterLink
          >
        </li>
        <li>
          <RouterLink to="/MentionsLegales" class="text-[10px] xl:text-lg"
            ><p class="hover:opacity-70 active:opacity-40 transition-opacity">
              Mentions légales
            </p></RouterLink
          >
        </li>
        <li>
          <RouterLink to="/PolitiqueConfidentialite" class="text-[10px] xl:text-lg"
            ><p class="hover:opacity-70 active:opacity-40 transition-opacity">
              Politique de <br class="block sm:hidden" />confidentialité
            </p></RouterLink
          >
        </li>
      </ul>
      <ul class="flex flex-col gap-1 lg:gap-2.5">
        <li>
          <h2 class="text-[10px] xl:text-2xl uppercase font-bold mb-2.5">
            Contacts et<br />réseaux
          </h2>
        </li>
        <li>
          <RouterLink to="/candidature" class="text-[10px] xl:text-lg"
            ><p class="hover:opacity-70 active:opacity-40 transition-opacity">
              Candidature
            </p></RouterLink
          >
        </li>
        <li>
          <RouterLink to="/contact" class="text-[10px] xl:text-lg"
            ><p class="hover:opacity-70 active:opacity-40 transition-opacity">
              Contact
            </p></RouterLink
          >
        </li>
        <li>
          <div class="flex gap-2 xl:gap-4 mt-1 xl:mt-5">
            <a
              href="https://www.twitch.tv/unifiedchampions"
              class="hover:opacity-70 active:opacity-40 transition-opacity"
              ><img class="xl:h-7 h-3" src="@/components/image/IconeTwitch.png" alt="icon twitch"
            /></a>
            <a
              href="https://discord.com/invite/5QrHJeNA8D"
              class="hover:opacity-70 active:opacity-40 transition-opacity"
              ><img class="xl:h-7 h-3" src="@/components/image/IconeDiscord.png" alt="icon discord"
            /></a>
            <a
              href="https://x.com/eunifiedchamps"
              class="hover:opacity-70 active:opacity-40 transition-opacity"
              ><img class="xl:h-7 h-3" src="@/components/image/IconeTwitter.png" alt="icon twitter"
            /></a>
            <a
              href="https://www.instagram.com/unifiedchampionsclub/"
              class="hover:opacity-70 active:opacity-40 transition-opacity"
              ><img
                class="xl:h-7 h-3"
                src="@/components/image/IconeInstagram.png"
                alt="icon instagram"
            /></a>
            <a href="https://www.tiktok.com/discover/mmi-montb%C3%A9liard?lang=ar" class="hover:opacity-70 active:opacity-40 transition-opacity"
              ><img class="xl:h-7 h-3" src="@/components/image/IconeTikTok.png" alt="icon tiktok"
            /></a>
          </div>
        </li>
      </ul>
    </nav>
    <div class="text-center font-Inter text-[#AFAFAF] text-[11px] xl:text-lg pb-5 xl:pb-10 bg-Noir">
      <p>© 2025 Unified Champions Club. Tous droits réservés.</p>
    </div>
  </footer>
</template>
