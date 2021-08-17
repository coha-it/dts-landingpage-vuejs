<template lang="pug">
#app
  Header
  router-view
</template>

<script>
import Header from '@/components/Header.vue'

export default {

  components: {
    Header
  },

  metaInfo: {
    title: "My Example App",
    titleTemplate: "%s - Yay!",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
  },
};
</script>
