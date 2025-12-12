<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import HomePageDecoration from '@/components/assets/decoration/HomePageDecoration.vue'
</script>
<template>
  <header class="bg-NoirPur text-Blanc h-screen pt-[70px] lg:pt-[120px] block">
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
          class="uppercase font-Agrandir text-4xl lg:text-6xl bg-gradient-to-r from-[#a900c6] to-[#e6a0ff] bg-clip-text text-[#00000000] lg:text-nowrap"
        >
          Unite to win
        </h1>
        <h2
          class="uppercase font-Sarabun font-bold text-base lg:text-2xl tracking-wide lg:text-nowrap"
        >
          Le bénévolat dans le monde de l'esport
        </h2>
        <p class="lg:max-w-[60vw] text-xs lg:text-xl mt-4 tracking-wide">
          Unified Champions est une association universitaire d'Esport qui offre une opportunité
          unique aux étudiants passionnés par les jeux vidéo compétitifs de se rassembler, de se
          former, et de s'entrainer ensemble.
        </p>
        <div class="w-full flex justify-center mt-16">
          <a
            href="https://discord.gg/MYB83Jenkq"
            target="_blank"
            rel="noopener noreferrer"
            class="px-5 lg:px-32 h-8 lg:h-auto lg:py-5 border-2 lg:border-4 border-[#ffffff]"
          >
            <button class="font-bold text-xs lg:text-base">REJOINDRE DISCORD</button>
          </a>
        </div>
      </div>
      <div class="hidden lg:block">
        <img
          src="../components/image/UnifiedLogoHD.png"
          alt="logo Unified Champions"
          class="w-auto min-w-48"
        />
      </div>
    </section>
    <HomePageDecoration class="w-full absolute bottom-0" />
  </header>
  <section>
    <h2 class="uppercase">Les <span>Equipes</span></h2>
    <p>
      Nos équipes rassemblent des étudiants passionnés qui défendent fièrement les couleurs de
      l’université sur différents jeux. Entre entraînements, compétitions nationales et moments de
      cohésion, chaque roster incarne l’esprit d’équipe et la volonté de progresser ensemble.
    </p>
    <!--Carrousel-->
    <div class="flex">
      <div>
        <p>4</p>
        <p>Jeux compétitifs</p>
      </div>
      <div>
        <p>7</p>
        <p>Bénévols</p>
      </div>
      <div>
        <p>12</p>
        <p>Tournois disputés</p>
      </div>
      <div>
        <p>2</p>
        <p>Équipes féminines</p>
      </div>
    </div>
  </section>
  <section>
    <h2 class="uppercase">Qui <span>Sommes</span> nous ?</h2>
    <div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <p>
          Unified Champions (UC) est le club eSport officiel de l’Université, créé pour faire de
          l’eSport une pratique sportive reconnue au sein du milieu universitaire. Le club
          s’articule autour de trois axes :
        </p>
        <ul class="list-disc pl-10">
          <li>
            Sportif : entraînements, coaching et compétitions locales, nationales et européennes.
          </li>
          <li>Universitaire : valorisation des compétences acquises et réflexion sur l’eSport.</li>
          <li>
            Communautaire : rencontres et événements pour étudiants, enseignants et passionnés.
          </li>
        </ul>
        <p>
          UC vise à former des équipes performantes, soutenir la reconnaissance académique de
          l’eSport et offrir une expérience unique mêlant passion, apprentissage et esprit d’équipe.
        </p>
        <button>
          <p>En savoir plus</p>
          <img src="" alt="" />
        </button>
      </div>
    </div>
  </section>
  <section>
    <h2 class="uppercase">Dernières <span>Actus</span></h2>
  </section>
  <section>
    <h2 class="uppercase">Prochains <span>Matchs</span></h2>
  </section>
  <section>
    <h2 class="uppercase">Les <span>Bénévoles</span></h2>
  </section>
  <section>
    <h2 class="uppercase">Le <span>Recrutement</span></h2>
    <div>
      <div>
        <p class="">
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
        <button>Nous rejoindre</button>
      </div>
      <div><img src="" alt="" /></div>
    </div>
  </section>
</template>
