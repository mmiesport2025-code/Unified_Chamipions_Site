<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import ArrowForButton from '@/components/icons/ArrowForButton.vue'
</script>
<template>
  <section
    class="mt-[70px] xl:mt-[120px] mx-auto px-8 pt-12 flex flex-col gap-y-5 lg:gap-y-8 mb-12 sm:mb-16 lg:mb-20 w-auto max-w-[920px]"
  >
    <h1 class="uppercase font-Agrandir text-2xl sm:text-4xl lg:text-5xl text-center text-Violet700">
      contact
    </h1>

    <form class="flex flex-col gap-y-10" action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="access_key" value="79549ffd-da5b-4e15-ac98-aa04d670573b" />
      <input type="checkbox" name="botcheck" class="hidden" style="display: none" />

      <div class="flex gap-10">
        <input
          class="border rounded-xs h-16 px-5 w-full"
          type="text"
          name="prenom"
          placeholder="Prénom*"
          required
        />
        <input
          class="border rounded-xs h-16 px-5 w-full"
          type="text"
          name="nom"
          placeholder="Nom*"
          required
        />
      </div>

      <input
        class="border rounded-xs h-16 px-5 w-full"
        type="email"
        name="email"
        placeholder="Adresse e-mail*"
        required
      />

      <input
        class="border rounded-xs h-16 px-5 w-full"
        type="text"
        name="subject"
        placeholder="Objet*"
        required
      />

      <textarea
        class="border rounded-xs h-16 px-5 w-full"
        name="message"
        placeholder="Auriez-vous aimé par exemple vous spécialiser dans un autre jeu ?"
        required
      ></textarea>

      <button
        type="submit"
        class="bg-Violet700 hover:bg-Violet600 active:bg-Violet text-Blanc flex items-center transition-colors h-12 lg:h-16 w-fit mx-auto"
      >
        <p class="whitespace-nowrap px-4 lg:px-8 font-extrabold text-xl lg:text-3xl">
          Envoyer le message
        </p>
        <ArrowForButton class="w-2 lg:w-2.5 h-4 lg:h-5 mr-3 lg:mr-3.5" />
      </button>
    </form>
  </section>
</template>
