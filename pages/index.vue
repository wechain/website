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
            <h1 class="vv-heading font-lato text-xs-center text-md-left">{{$t('heading.title')}}</h1>
            <h2 class="vv-subheading font-lato text-xs-center text-md-left">
              {{$t('heading.description')}}
            </h2>
            <v-flex class="vv-cta">
              <v-btn href="https://vuevixens.github.io/docs/workshop/" target="_blank"
                     color="accent darken-1">{{$t('heading.workshops')}}
              </v-btn>
              <v-btn href="https://www.patreon.com/vuevixens/overview" target="_blank"
                     color="accent darken-1">
                <img class="vv-patreon-logo hidden-sm-and-down" src="~/assets/images/patreon.png" alt="Patreon logo">
                {{$t('heading.patreon')}}
              </v-btn>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-container>
    </v-parallax>
    <VVAnnouncements v-if="announcements.length" :announcements="announcements"/>
    <v-layout class="vv-container">
      <v-container grid-list-md>
        <v-layout align-center row wrap justify-space-between>
          <v-flex xs12 md4>
            <v-card hover class="vv-card" to="/upcoming" flat nuxt>
              <v-card-media
                src="/images/join_skulk.svg"
                height="250px"
                class="vv-card-image"
              ></v-card-media>
              <v-card-title primary-title>
                <h3 class="title text-xs-center">{{$t('skulk.title')}}</h3>
                <p class="vv-card-text">{{$t('skulk.content')}}</p>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs12 md4>
            <v-card hover class="vv-card" to="/about" flat nuxt>
              <v-card-media
                src="/images/learn-more.svg"
                height="250px"
                class="vv-card-image"
              ></v-card-media>
              <v-card-title primary-title>
                <h3 class="title text-xs-center">{{$t('program.title')}}</h3>
                <p class="vv-card-text">{{$t('program.content')}}</p>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs12 md4>
            <v-card hover class="vv-card" to="/request" flat nuxt>
              <v-card-media
                src="/images/conference.svg"
                height="250px"
                class="vv-card-image"
              ></v-card-media>
              <v-card-title primary-title>
                <h3 class="title text-xs-center">{{$t('request.title')}}</h3>
                <p class="vv-card-text">{{$t('request.content')}}</p>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </div>
</template>

<script>
  import storyblok from '../mixins/storyblok'
  import messages from '../assets/translations/home'
  import VVAnnouncements from '../components/Announcements'

  export default {
    mixins: [storyblok],
    components: {
      VVAnnouncements
    },
    data() {
      return {
        slug: 'home',
      }
    },
    computed: {
      announcements() {
        return this.story.content.body[0].columns.slice(1, 4)
      }
    },
    i18n: {
      messages
    },
    transition: 'fade'
  }
</script>

<style scoped lang="scss">
  .vv-logo {
    max-width: 100%;
  }

  .vv-heading {
    padding-bottom: 30px;
  }

  .vv-cta {
    padding-top: 30px;
  }

  .vv-patreon-logo {
    max-width: 22px;
    margin-right: 5px;
  }

  .vv-card-text {
    padding-top: 15px;
  }

  @media (max-width: 960px) {
    .vv-heading {
      padding-bottom: 15px;
    }

    .vv-logo {
      max-width: 240px;
    }

    .vv-cta {
      padding-top: 10px;
      text-align: center;
    }
  }

  @media (max-width: 420px) {
    .vv-heading {
      padding-bottom: 10px;
      line-height: 100%;
    }

    .vv-logo {
      max-width: 160px;
    }

    .vv-cta {
      padding-top: 10px;
      text-align: center;
    }
  }
</style>
