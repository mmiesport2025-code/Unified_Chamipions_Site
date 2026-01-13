<script setup lang="ts">
import IconFacebook from './icons/Icon-Facebook.vue'
import IconInstagram from './icons/Icon-Instagram.vue'
import IconLinkedin from './icons/Icon-Linkedin.vue'
import IconTwitter from './icons/Icon-Twitter.vue'
import IconYoutube from './icons/Icon-Youtube.vue'

defineProps<{
  reseau: string
}>()
</script>
<template>
  <IconFacebook
    class="max-h-8 sm:max-h-12 max-w-8 sm:max-w-12 h-auto w-auto"
    v-if="reseau === 'Facebook'"
  />
  <IconInstagram
    class="max-h-8 sm:max-h-12 max-w-8 sm:max-w-12 h-auto w-auto"
    v-if="reseau === 'Insta'"
  />
  <IconLinkedin
    class="max-h-8 sm:max-h-12 max-w-8 sm:max-w-12 h-auto w-auto"
    v-if="reseau === 'Linkedin'"
  />
  <IconTwitter
    class="max-h-8 sm:max-h-12 max-w-8 sm:max-w-12 h-auto w-auto"
    v-if="reseau === 'Tweeter'"
  />
  <IconYoutube
    class="max-h-8 sm:max-h-12 max-w-8 sm:max-w-12 h-auto w-auto"
    v-if="reseau === 'Youtube'"
  />
</template>
