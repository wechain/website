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
            <v-flex xs6 md3 v-for="(item, index) in story.content.body" :key="item.img">
              <v-card flat @click.native="setCarouselStart(index)">
                <v-card-media :src="item.img" height="200px"></v-card-media>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-container>
      <v-dialog v-model="dialog" v-if="!!story.content" max-width="960px">
        <v-carousel hide-delimiters v-model="currentPhotoIndex" :cycle="false">
          <v-carousel-item
            v-for="(item,i) in story.content.body"
            :key="i"
            :src="item.img"
          ></v-carousel-item>
        </v-carousel>
      </v-dialog>
    </v-layout>
</template>

<script>
  import storyblok from '../../mixins/storyblok'
  export default {
    mixins: [storyblok],
    data() {
      return {
        dialog: false,
        currentPhotoIndex: null,
      }
    },
    computed: {
      slug() {
        return `galleries/${this.$route.params.gallery}`;
      },
    },
    methods: {
      setCarouselStart(index) {
        this.currentPhotoIndex = index;
        this.dialog = true;
      }
    }
  }
</script>

<style scoped>
  .v-carousel {
    height: 650px;
  }

  .v-jumbotron__image {
    max-width: 100%;
  }
  
  @media (max-width: 960px) {
    .v-carousel {
      height: 480px;
    }
  }

  @media (max-width: 420px) {
    .v-carousel {
      height: 250px;
    }
  }
</style>
