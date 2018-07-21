<template>
  <v-layout class="vv-container" fill-height>
    <v-container class="indexed">
      <v-flex xs12 class="text-xs-center">
        <h2 class="vv-subheading font-lato text-xs-center">{{ $t("team") }}</h2>
      </v-flex>
      <v-container grid-list-lg v-if="!!story.content">
        <v-layout wrap justify-center>
          <v-flex xs12 sm6 lg4 v-for="member in story.content.body" :key="member.name" v-if="member.staff">
            <v-card height="100%">
              <v-card-media height="400px" :src="member.img"></v-card-media>
              <v-card-title justify-center>
                <h3 class="d-block text-xs-center">{{member.name}}</h3>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-flex xs12 class="text-xs-center">
        <h2 class="vv-subheading font-lato text-xs-center">{{ $t("board") }}</h2>
      </v-flex>
      <v-container grid-list-lg v-if="!!story.content">
        <v-layout wrap justify-center>
          <v-flex xs12 sm6 lg4 v-for="member in story.content.body" :key="member.name"
                  v-if="!member.staff && !member.regional">
            <v-card height="100%">
              <v-card-media height="400px" :src="member.img"></v-card-media>
              <v-card-title justify-center>
                <h3 class="d-block text-xs-center">{{member.name}}</h3>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-flex xs12 class="text-xs-center">
        <h2 class="vv-subheading font-lato text-xs-center">{{ $t("regional") }}</h2>
      </v-flex>
      <v-container grid-list-lg v-if="!!story.content">
        <v-layout wrap justify-center>
          <v-flex xs12 sm6 lg4 v-for="member in story.content.body" :key="member.name"
                  v-if="member.regional">
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
  import messages from '../assets/translations/team'
  export default {
    mixins: [storyblok],
    data() {
      return {
        slug: 'partners',
      }
    },
    i18n: {
      messages
    }
  }
</script>

<style scoped>
  h3 {
    width: 100%;
    padding-bottom: 10px;
  }
</style>
