<script setup lang="ts">
defineProps<{
  LeProchain?: boolean
}>()
</script>
<template>
  <div
    class="bg-Blanc w-full py-2.5 px-6 md:px-12 font-semibold text-sm xs:text-lg md:text-2xl flex justify-between items-center text-Noir text-center border border-Noir rounded"
    :class="{ 'border-none !bg-Violet700 !text-Blanc': LeProchain }"
  >
    <div class="flex flex-col justify-center items-center">
      <p>7/12</p>
      <p>18h</p>
    </div>
    <div class="flex flex-col justify-center items-center">
      <p class="mb-2 xs:mb-4 hidden" :class="{ '!block': LeProchain }">Prochainement</p>
      <p>Valo Tournament</p>
      <p>5V5</p>
    </div>
    <div class="flex justify-center items-center w-14 md:w-24 h-14 md:h-24">
      <img
        class="max-w-full max-h-full"
        src="../components/image/ImageTemporaire.png"
        alt="icone valorant"
      />
    </div>
  </div>
</template>
