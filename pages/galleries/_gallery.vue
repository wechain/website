<template>
    <v-layout class="vv-container" fill-height>
      <v-container class="indexed">
        <v-flex xs12 class="text-xs-center">
            <v-breadcrumbs justify-center>
              <v-icon medium slot="divider">forward</v-icon>
              <v-breadcrumbs-item to="/gallery" nuxt>
                <h2 class="vv-subheading font-lato text-xs-center">Gallery</h2>
              </v-breadcrumbs-item>
              <v-breadcrumbs-item>
                <h2 class="vv-subheading font-lato text-xs-center text--secondary">{{story.name}}</h2>
              </v-breadcrumbs-item>
            </v-breadcrumbs>
        </v-flex>
        <v-container grid-list-lg>
          <v-layout wrap v-if="!!story.content">
            <v-flex xs6 md3 v-for="item in story.content.body" :key="item.img">
              <v-card flat>
                <v-card-media :src="item.img" height="200px"></v-card-media>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-container>
    </v-layout>
</template>

<script>
  import storyblok from '../../mixins/storyblok'
  export default {
    mixins: [storyblok],
    computed: {
      slug() {
        return `galleries/${this.$route.params.gallery}`;
      }
    },
  }
</script>

<style scoped>
  .container.indexed {
    margin: 0 auto;
  }
</style>
