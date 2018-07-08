<template>
  <div>
    <v-parallax
      dark
      src="/images/fox-bg.jpg">
      <v-container fill-height>
        <v-layout
          align-center
          row wrap
          justify-space-between>
          <v-flex xs12 sm12 md6>
            Test
          </v-flex>
          <v-flex xs12 sm12 md6>
            Test
          </v-flex>
        </v-layout>
      </v-container>
    </v-parallax>
    <div class="test"></div>
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

<style>
  .test {
    height: 300vh;
  }
</style>
