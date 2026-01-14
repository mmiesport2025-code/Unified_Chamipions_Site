<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import ButtonWithArrow from '@/components/ButtonWithArrow.vue'
</script>
<template>
  <section
    class="w-full py-10 md:py-0 my-[-70px] xl:my-[-120px] h-[calc(100vh+70px)] xl:h-[calc(100vh+120px)] bg-[url('@/components/image/CoverTwitch.png')] bg-cover bg-center flex flex-col-reverse md:flex-row items-center justify-evenly md:justify-around"
  >
    <div class="px-10 ssm:px-20 sm:px-32 md:px-0 md:w-[35%]">
      <h1
        class="uppercase font-Agrandir text-3xl sm:text-5xl lg:text-6xl text-left text-Violet700 mb-3"
      >
        Stream
      </h1>
      <p class="text-Blanc font-bold text-lg sm:text-xl lg:text-2xl mb-8 xl:mb-16">
        Découvrez nos lives et rediffusions sur notre chaîne Twitch !
      </p>
      <ButtonWithArrow text="Voir la chaîne" link="https://www.twitch.tv/unifiedchampions" />
    </div>
    <div>
      <img
        class="maw-w-[60vw] md:max-w-[23vw] max-h-[35vh] md:max-h-[50vh]"
        src="@/components/image/image_twitch_section_stream.png"
        alt=""
      />
    </div>
  </section>
</template>
