<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import ArrowForButton from '@/components/icons/ArrowForButton.vue'
</script>
<template>
  <section
    class="mt-[70px] xl:mt-[120px] mx-auto px-8 pt-12 flex flex-col gap-y-5 lg:gap-y-8 mb-12 sm:mb-16 lg:mb-20 w-auto max-w-[920px]"
  >
    <h1 class="uppercase font-Agrandir text-2xl sm:text-4xl lg:text-5xl text-center text-Violet700">
      Candidature
    </h1>

    <form class="flex flex-col gap-y-10" action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="access_key" value="79549ffd-da5b-4e15-ac98-aa04d670573b" />
      <input type="hidden" name="subject" value="Nouvelle candidature" />
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
      <div class="flex flex-col gap-5">
        <legend class="font-semibold">Dans quels jeux voulez-vous vous spécialiser ?</legend>

        <fieldset class="flex flex-wrap sm:flex-nowrap gap-5 lg:gap-8">
          <!-- Bouton -->
          <label class="flex-1 min-w-[100px] sm:min-w-0 h-[72px] cursor-pointer">
            <input type="checkbox" name="games[]" value="Valorant" class="peer hidden" />
            <div
              class="px-1 h-full w-full rounded bg-[#ae47f2] text-Blanc flex items-center justify-center text-center font-medium transition peer-checked:bg-[#8d35d6] peer-checked:scale-[0.98]"
            >
              Valorant
            </div>
          </label>

          <label class="flex-1 min-w-[100px] sm:min-w-0 h-[72px] cursor-pointer">
            <input type="checkbox" name="games[]" value="League of Legends" class="peer hidden" />
            <div
              class="px-1 h-full w-full rounded bg-[#ae47f2] text-Blanc flex items-center justify-center text-center font-medium transition peer-checked:bg-[#8d35d6] peer-checked:scale-[0.98]"
            >
              League of Legends
            </div>
          </label>

          <label class="flex-1 min-w-[100px] sm:min-w-0 h-[72px] cursor-pointer">
            <input type="checkbox" name="games[]" value="Mario Kart 8 Deluxe" class="peer hidden" />
            <div
              class="px-1 h-full w-full rounded bg-[#ae47f2] text-Blanc flex items-center justify-center text-center font-medium transition peer-checked:bg-[#8d35d6] peer-checked:scale-[0.98]"
            >
              Mario Kart 8 Deluxe
            </div>
          </label>

          <label class="flex-1 min-w-[100px] sm:min-w-0 h-[72px] cursor-pointer">
            <input type="checkbox" name="games[]" value="Rocket League" class="peer hidden" />
            <div
              class="px-1 h-full w-full rounded bg-[#ae47f2] text-Blanc flex items-center justify-center text-center font-medium transition peer-checked:bg-[#8d35d6] peer-checked:scale-[0.98]"
            >
              Rocket League
            </div>
          </label>

          <label class="flex-1 min-w-[100px] sm:min-w-0 h-[72px] cursor-pointer">
            <input type="checkbox" name="games[]" value="Autres" class="peer hidden" />
            <div
              class="px-1 h-full w-full rounded bg-[#ae47f2] text-Blanc flex items-center justify-center text-center font-medium transition peer-checked:bg-[#8d35d6] peer-checked:scale-[0.98]"
            >
              Autres
            </div>
          </label>
        </fieldset>
      </div>

      <textarea
        class="border rounded-xs h-16 px-5 w-full"
        name="message"
        placeholder="Auriez-vous aimé par exemple vous spécialiser dans un autre jeu ?"
      ></textarea>

      <button
        type="submit"
        class="bg-Violet700 hover:bg-Violet600 active:bg-Violet text-Blanc flex items-center transition-colors h-12 lg:h-16 w-fit mx-auto"
      >
        <p class="whitespace-nowrap px-4 lg:px-8 font-extrabold text-xl lg:text-3xl">Candidater</p>
        <ArrowForButton class="w-2 lg:w-2.5 h-4 lg:h-5 mr-3 lg:mr-3.5" />
      </button>
    </form>
  </section>
</template>
