<template>
  <v-layout class="vv-container" fill-height>
    <v-container class="indexed">
      <v-flex xs12 class="text-xs-center">
        <h2 class="vv-subheading font-lato text-xs-center">{{ $t("title") }}</h2>
        <p class="vv-content title">{{ $t("subtitle") }}</p>
      </v-flex>
      <v-container grid-list-lg v-if="!!story.content">
        <v-layout wrap>
          <v-flex xs12 sm6 lg4 v-for="member in story.content.body" :key="member.name">
            <v-card height="100%">
              <v-card-media height="400px" :src="member.img"></v-card-media>
              <v-card-title justify-center>
                <h3 class="d-block text-xs-center">{{member.name}}</h3>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </v-layout>
</template>

<script>
  import storyblok from '../mixins/storyblok'
  export default {
    mixins: [storyblok],
    data() {
      return {
        slug: 'partners',
      }
    },
  }
</script>

<style scoped>
  h3 {
    width: 100%;
    padding-bottom: 10px;
  }
</style>
