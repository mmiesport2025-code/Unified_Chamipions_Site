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
          class="font-Inter uppercase font-bold text-[7px] lg:text-[10px] tracking-[0.13rem] lg:tracking-[0.19rem]"
        >
          Unified Champions club
        </p>
      </div>
    </a>
    <button class="lg:hidden">
      <img src="" alt="Menu Icon" />
    </button>
    <nav class="hidden lg:block">
      <ul class="flex gap-12">
        <li><a href="">équipes</a></li>
        <li><a href="">à propos</a></li>
        <li><a href="">calendrier</a></li>
        <li><a href="">steam</a></li>
        <li><a href="">candiater</a></li>
      </ul>
    </nav>
  </header>
</template>
