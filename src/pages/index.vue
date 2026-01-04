<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import HomePageDecoration from '@/components/assets/decoration/HomePageDecoration.vue'
import ButtonWithArrow from '@/components/ButtonWithArrow.vue'
import CalendarEventBar from '@/components/Calendar-event-bar.vue'
import Cardanecdotes from '@/components/Cardanecdotes.vue'
import { ref, onMounted } from 'vue'
import type { Message } from '@/types/message'
const Messages = ref<Message[]>([])

const query = `
*[_type == "message"]{
  _id,
  texte,
  benevole->{
    _id,
    prenom,
    nom,
    portrait{
      asset->{_id, url}
    }
  }
}
`

onMounted(async () => {
  const res = await fetch(
    'https://s8s4tdl3.api.sanity.io/v2026-01-04/data/query/production?query=' +
      encodeURIComponent(query),
  )

  const data = await res.json()
  Messages.value = data.result
})
</script>
<template>
  <header class="bg-NoirPur text-Blanc h-screen pt-[70px] lg:pt-[120px] block border-Blanc">
    <video
      autoplay
      loop
      muted
      playsinline
      class="video min-w-full h-screen w-auto flex justify-center items-center object-cover absolute top-0 left-0"
    >
      <source
        src="../components/video/Double_explosion_v2.mp4"
        type="video/mp4"
        class="min-w-full h-screen"
      />
      Votre navigateur ne supporte pas la vidéo HTML5.
    </video>
    <section
      class="z-10 relative flex w-full h-full lg:gap-32 xl:gap-64 px-5 md:px-32 xl:px-52 items-center lg:justify-center"
    >
      <div class="flex lg:blocl flex-col text-center">
        <h1
          class="uppercase font-Agrandir text-4xl h-sm:text-4xl lg:text-6xl bg-gradient-to-r from-[#a900c6] to-[#e6a0ff] bg-clip-text text-[#00000000] lg:text-nowrap"
        >
          Unite to win
        </h1>
        <h2
          class="uppercase font-Sarabun font-bold text-base h-sm:text-base lg:text-2xl tracking-wide lg:text-nowrap"
        >
          Le bénévolat dans le monde de l'esport
        </h2>
        <p class="lg:max-w-[60vw] text-xs h-sm:text-xs lg:text-xl mt-4 tracking-wide">
          Unified Champions est une association universitaire d'Esport qui offre une opportunité
          unique aux étudiants passionnés par les jeux vidéo compétitifs de se rassembler, de se
          former, et de s'entrainer ensemble.
        </p>
        <div class="w-full flex justify-center h-sm:mt-4 mt-16">
          <a
            href="https://discord.gg/MYB83Jenkq"
            target="_blank"
            rel="noopener noreferrer"
            class="px-5 h-sm:px-5 lg:px-32 h-8 h-sm:h-8 lg:h-auto h-sm:py-0 lg:py-5 border h-sm:border lg:border-2 lg:border-4 border-[#ffffff] flex items-center justify-center hover:bg-[rgba(255,255,255,0.1)] active:bg-[rgba(255,255,255,0.2)] transition-colors"
          >
            <button class="font-bold text-xs h-sm:text-xs lg:text-base">REJOINDRE DISCORD</button>
          </a>
        </div>
      </div>
      <div class="hidden h-sm:hidden lg:block">
        <img
          src="@/components/image/UnifiedLogoHD.png"
          alt="logo Unified Champions"
          class="w-auto min-w-48"
        />
      </div>
    </section>
    <HomePageDecoration class="w-full absolute bottom-[-1px] h-sm:hidden" />
  </header>
  <section class="text-center mt-12 md:mt-24 mx-5 md:mx-10">
    <h2 class="uppercase font-Agrandir text-2xl xs:text-3xl lg:text-5xl mb-6">
      Les <span class="text-[#AE47F2]">Equipes</span>
    </h2>
    <p class="md:w-[60%] mx-auto">
      Nos équipes rassemblent des étudiants passionnés qui défendent fièrement les couleurs de
      l’université sur différents jeux. Entre entraînements, compétitions nationales et moments de
      cohésion, chaque roster incarne l’esprit d’équipe et la volonté de progresser ensemble.
    </p>
    <!--Carrousel-->
  </section>
  <section class="mt-12 md:mt-24 mx-5 md:mx-10">
    <h2 class="uppercase font-Agrandir text-2xl xs:text-3xl lg:text-5xl mb-6 text-center">
      Qui <span class="text-[#AE47F2]">Sommes</span> nous ?
    </h2>
    <div class="flex flex-col md:flex-row gap-6 block">
      <div
        class="w-full md:w-[400px] xl:w-auto h-40 md:h-[300px] xl:min-h-[400px] xl:h-[400px] flex flex-col gap-5 px-5 md:px-0 order-1"
      >
        <img
          class="w-full md:w-[400px] xl:w-auto xl:max-w-[700px] h-40 md:h-[300px] xl:min-h-[400px] xl:max-h-full object-cover"
          src="@/components/image/IMG_Tournois1.jpg"
          alt="photo événement"
        />
        <div class="hidden md:flex xl:hidden gap-5 w-[400px]">
          <img
            class="object-cover flex-1 h-[120px]"
            src="@/components/image/IMG_Tournois2.jpg"
            alt="photo événement"
          />
          <img
            class="object-cover flex-1 h-[120px]"
            src="@/components/image/IMG_Tournois3.jpg"
            alt="photo événement"
          />
        </div>
      </div>
      <div class="flex md:hidden xl:flex md:flex-col justify-start gap-5 order-3 md:order-2">
        <img
          class="md:max-w-48 max-h-48 h-40 md:h-48 flex-1 object-cover min-w-0"
          src="@/components/image/IMG_Tournois2.jpg"
          alt="photo événement"
        />
        <img
          class="md:max-w-48 max-h-48 h-40 md:h-48 flex-1 object-cover min-w-0"
          src="@/components/image/IMG_Tournois3.jpg"
          alt="photo événement"
        />
      </div>
      <div class="flex flex-col justify-between gap-6 h-full order-2 md:order-3">
        <div class="flex flex-col justify-start gap-4">
          <p>
            Unified Champions (UC) est le club eSport officiel de l’Université, créé pour faire de
            l’eSport une pratique sportive reconnue au sein du milieu universitaire. <br />
            Le club s’articule autour de trois axes :
          </p>
          <ul class="list-disc pl-10">
            <li>
              Sportif : entraînements, coaching et compétitions locales, nationales et européennes.
            </li>
            <li>
              Universitaire : valorisation des compétences acquises et réflexion sur l’eSport.
            </li>
            <li>
              Communautaire : rencontres et événements pour étudiants, enseignants et passionnés.
            </li>
          </ul>
          <p>
            UC vise à former des équipes performantes, soutenir la reconnaissance académique de
            l’eSport et offrir une expérience unique mêlant passion, apprentissage et esprit
            d’équipe.
          </p>
        </div>
        <ButtonWithArrow text="En savoir plus" link="/Apropos" />
      </div>
    </div>
  </section>
  <section class="mt-12 md:mt-24 mx-5 md:mx-10">
    <h2 class="uppercase font-Agrandir text-2xl xs:text-3xl lg:text-5xl mb-6 text-center">
      Dernières <span class="text-[#AE47F2]">Actus</span>
    </h2>
  </section>
  <section class="mt-12 md:mt-24 mx-5 md:mx-10">
    <h2 class="uppercase font-Agrandir text-2xl xs:text-3xl lg:text-5xl mb-6 text-center">
      Prochains <span class="text-[#AE47F2]">Matchs</span>
    </h2>
    <div class="flex flex-col gap-6">
      <CalendarEventBar :LeProchain="true" />
      <CalendarEventBar />
      <CalendarEventBar />
    </div>
  </section>
  <section class="mt-12 md:mt-24 mx-5 md:mx-10">
    <h2 class="uppercase font-Agrandir text-2xl xs:text-3xl lg:text-5xl mb-6 text-center">
      Les <span class="text-[#AE47F2]">Bénévoles</span>
    </h2>
    <div class="flex flex-col xl:grid xl:grid-cols-2 gap-5">
      <Cardanecdotes v-for="message in Messages" :key="message._id" :message="message" />
    </div>
  </section>
  <section class="mt-12 md:mt-24 mx-5 md:mx-10 mb-12">
    <h2 class="uppercase font-Agrandir text-2xl xs:text-3xl lg:text-5xl mb-6 text-center">
      Le <span class="text-[#AE47F2]">Recrutement</span>
    </h2>
    <div class="flex flex-col-reverse md:grid md:grid-cols-10 md:flex-row gap-6">
      <div class="col-span-6">
        <p class="mt-2 mb-7">
          Rejoins les rangs d’Unified Champions Club et deviens acteur de la compétition
          universitaire ! <br /><br />
          Que tu sois un joueur confirmé ou simplement passionné, UC te donne la chance d’évoluer
          dans un environnement structuré, encadré par des coachs et des étudiants motivés. Ici, tu
          pourras t’entraîner, progresser, participer à des tournois régionaux et nationaux, et
          défendre fièrement les couleurs de ton campus.<br />
          <br />
          Au-delà de la performance, UC c’est avant tout une aventure humaine : une équipe soudée,
          des entraînements dans la bonne humeur et une vraie cohésion entre joueurs. Chacun apporte
          son style, sa vision du jeu et sa détermination — parce qu’ensemble, on joue mieux, et
          surtout, on va plus loin. <br />
          <br />
          Si tu veux vivre l’e-sport autrement, intégrer une équipe ambitieuse et repousser tes
          limites, rejoins Unified Champions dès maintenant. Prépare-toi à t’entraîner, à vibrer, à
          gagner. L’arène t’attend
        </p>
        <ButtonWithArrow text="Nous Rejoindre" link="/Candidature" />
      </div>
      <div class="col-span-4 h-40 xs:h-64 md:h-full md:min-h-full">
        <img
          class="object-cover w-full h-full"
          src="@/components/image/IMG_Tournois4.jpg"
          alt="photo événement"
        />
      </div>
    </div>
  </section>
</template>
