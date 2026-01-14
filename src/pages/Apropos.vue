<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header
    class="bg-[url('@/components/image/CoverPageEquipe.png')] bg-cover bg-center h-[50vh] h-sm:h-[calc(100vh-120px)] flex flex-col justify-center items-start px-[10%] xl:px-[10%] pb-12 xl:pb-0"
  >
    <h1 class="uppercase font-Agrandir text-2xl sm:text-4xl lg:text-5xl text-center text-Violet700">
      à propos de nous
    </h1>
    <p class="text-Blanc text-base sm:text-xl xl:text-2xl font-semibold pb-5 pt-10">
      Bienvenue chez Unified Champions Club (UC)
    </p>
    <p class="text-Blanc">
      La communauté e-sport officielle de ton université. Né de la passion d’étudiants et
      d’enseignants, UC rassemble des joueuses et joueurs, coachs, créatifs et bénévoles autour
      d’une même vision : faire du e-sport un véritable terrain d’apprentissage, de partage et de
      performance.
    </p>
    <p class="text-Blanc">
      Ici, on joue pour gagner, mais surtout pour progresser ensemble. Entre compétitions, projets,
      et moments de cohésion, UC, c’est bien plus qu’un club : c’est une aventure humaine portée par
      l’énergie du campus et la passion du jeu.
    </p>
  </header>
  <section class="flex flex-col px-5 sm:px-10 pt-12 pb-24 sm:py-24 gap-24">
    <article class="flex flex-col lg:flex-row items-stretch gap-6 sm:gap-12">
      <div class="flex-1">
        <h2 class="uppercase font-Agrandir text-xl sm:text-3xl lg:text-3xl w-full mb-5 sm:mb-10">
          L'histoire du club
        </h2>
        <p class="mb-5">
          Tout est parti d’une simple idée : populariser la pratique de l’esport au sein de notre
          campus universitaire. C’est entre 2021 et 2022, au département des Métiers du Multimédia
          et de l’Internet (MMI) que Pascal Chatonnay, actuel chef de ce même département et chef de
          l’association, a eu l’idée de bâtir ce club esport.
        </p>
        <p>
          La particularité de ce club ? Toute personne qui s’inscrit et s’investit avec assiduité
          pour faire vivre le club se fera accorder jusqu’à 0.25 points bonus dans chaque module de
          sa moyenne.
        </p>
      </div>
      <div class="flex-1 relative pb-20 lg:pb-0">
        <img
          class="absolute lg:inset-0 w-full h-32 lg:h-full object-cover"
          src="@/components/image/IMGap1.jpg"
          alt="Des joueurs joue à mario kart"
        />
      </div>
    </article>
    <article class="flex flex-col-reverse lg:flex-row items-stretch gap-6 sm:gap-12">
      <div class="flex-1 relative pb-20 lg:pb-0">
        <img
          class="absolute lg:inset-0 w-full h-32 lg:h-full object-cover"
          src="@/components/image/IMGap2.jpg"
          alt="Un match en 2V2"
        />
      </div>
      <div class="flex-1">
        <h2 class="uppercase font-Agrandir text-xl sm:text-3xl lg:text-3xl w-full mb-5 sm:mb-10">
          Qui sommes-nous ?
        </h2>
        <p class="mb-5">
          Nous sommes un collectif d’étudiants qui adore jouer aux jeux vidéos compétitifs, qui se
          serre les coudes dans les bons comme dans les mauvais moments et qui partage ses moments
          d’extase aussi bien dans le club qu’en dehors.
        </p>
        <p>
          Nous sommes un groupe de passionnés venant pour la plupart de déprtements universitaires
          autre que MMI afin de se réunir et créer des liens. Nous sommes plus que des amis, nous
          sommes des mates. Et nous irons jusqu’au bout.
        </p>
      </div>
    </article>
    <article class="flex flex-col lg:flex-row items-stretch gap-6 sm:gap-12">
      <div class="flex-1">
        <h2 class="uppercase font-Agrandir text-xl sm:text-3xl lg:text-3xl w-full mb-5 sm:mb-10">
          Premières équipes féminines
        </h2>
        <p class="mb-5">
          Cette année, nous avons l’immense joie d’accueillir nos premières équipes féminines parmi
          nous. Nous en comptons actuellement 2 spécialisées sur Valorant !
        </p>
        <p>
          Cette nouveauté est gage de renouveau et de progrès dans un monde où il est encore
          compliqué pour la gente féminine de s’affirmer en tant que joueuse esport. C’est pour cela
          que nous sommes prêt à tendre la main à celles qui seraient partentent à nous rejoindre
          pour vivre cette formidable aventure !
        </p>
      </div>
      <div class="flex-1 relative pb-20 lg:pb-0">
        <img
          class="absolute lg:inset-0 w-full h-32 lg:h-full object-cover"
          src="@/components/image/IMGap3.jpg"
          alt="Le duel continue"
        />
      </div>
    </article>
  </section>
</template>
