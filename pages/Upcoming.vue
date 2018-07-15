<template>
  <v-layout class="vv-container" fill-height>
    <v-container class="indexed">
      <v-flex xs12 class="text-xs-center">
        <h2 class="vv-subheading font-lato text-xs-center">{{ $t("title") }}</h2>
        <p class="vv-content title">{{ $t("subtitle") }}</p>
        <v-container grid-list-md v-if="!!story.content">
          <v-layout wrap>
            <v-flex xs6 sm4 md3 v-for="event in story.content.body" :key="event.name">
              <v-card class="vv-card" hover :to="event.link.cached_url">
                <v-card-media
                  class="white--text vv-card-image"
                  height="200px"
                  :src="event.img">
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 d-flex align-center justify-center class="event-name">
                        <div>
                          <h3 class="headline">{{event.location}}</h3>
                          <p class="title">{{event.date | moment('MMM Do')}}</p>
                        </div>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-container>
  </v-layout>
</template>

<script>
  import storyblok from '../mixins/storyblok'
  import messages from '../assets/translations/upcoming'
  export default {
    mixins: [storyblok],
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

  .headline, .subheading {
    width: 100%;
  }

  .vv-card {
    &:before {
      position: absolute;
      content: '';
      z-index: 1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, .6);
      opacity: 1;
      transition: 0.3s opacity;
    }

    &:hover {
      &:before {
        opacity: 0.4;
      }
    }
  }

  .event-name {
    z-index: 2;
    flex-wrap: wrap;
  }

  .container.indexed {
    margin: 0 auto;
  }
</style>
