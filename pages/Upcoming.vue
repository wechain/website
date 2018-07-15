<template>
  <v-layout class="vv-container" fill-height>
    <v-container class="indexed">
      <v-flex xs12 class="text-xs-center">
        <h2 class="vv-subheading font-lato text-xs-center">{{ $t("title") }}</h2>
        <p class="vv-content title">{{ $t("subtitle") }}</p>
        <VVGrid v-if="!!story.content" :events="story.content.body" />
      </v-flex>
    </v-container>
  </v-layout>
</template>

<script>
  import storyblok from '../mixins/storyblok'
  import messages from '../assets/translations/upcoming'
  import VVGrid from '../components/Grid'
  export default {
    mixins: [storyblok],
    components: {
      VVGrid,
    },
    data() {
      return {
        slug: 'upcoming',
      }
    },
    i18n: {
      messages
    }
  }
</script>

<style scoped lang="scss">
  .vv-content {
    padding-top: 30px;
  }

  .container.indexed {
    margin: 0 auto;
  }
</style>
