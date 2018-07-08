<template>
  <div>
    <v-parallax
      dark
      src="/images/fox-bg.jpg">
      <v-container fill-height>
        <v-layout align-center row wrap justify-space-between>
          <v-flex xs12 sm12 md4 class="text-xs-center" order-md2>
            <img class="vv-logo" src="~/assets/images/logo.png" alt="VueVixens logo">
          </v-flex>
          <v-flex xs12 sm12 md7 order-md1>
            <h1 class="vv-heading font-lato text-xs-center text-md-left">Welcome to Vue Vixens!</h1>
            <h2 class="vv-subheading font-lato text-xs-center text-md-left">Vue Vixens are foxy people who identify as women and
              who want to learn Vue.js to make websites and mobile apps</h2>
          </v-flex>
        </v-layout>
      </v-container>
    </v-parallax>
  </div>
</template>

<script>
import storyblok from '../mixins/storyblok'
export default {
  mixins: [storyblok],
  data() {
    return {
      slug: 'home',
    }
  },
}
</script>

<style scoped>
  .vv-logo {
    max-width: 100%;
  }
  .vv-heading {
    padding-bottom: 30px;
  }
  @media (max-width: 960px) {
    .vv-heading {
      padding-bottom: 20px;
    }
    .vv-logo {
      max-width: 240px;
    }
  }
</style>
