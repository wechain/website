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
              <v-btn color="accent darken-1">{{$t('heading.workshops')}}</v-btn>
              <v-btn color="accent darken-1">
                <img class="vv-patreon-logo hidden-sm-and-down" src="~/assets/images/patreon.png" alt="Patreon logo">
                {{$t('heading.patreon')}}
              </v-btn>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-container>
    </v-parallax>
    <v-jumbotron :gradient="gradient" src="/images/jumbo.png" height="200px">
      <v-container fill-height>
        <v-layout align-center justify-center wrap>
          <v-flex xs12 text-xs-center>
            <h2 class="vv-subheading font-lato secondary--text text--darken-2">Upcoming events</h2>
          </v-flex>
          <v-layout align-center justify-space-between>
            <v-flex xs12 md4 text-xs-center>Test</v-flex>
            <v-flex xs12 md4 text-xs-center>Test</v-flex>
            <v-flex xs12 md4 text-xs-center>Test</v-flex>
          </v-layout>
        </v-layout>
      </v-container>
    </v-jumbotron>
  </div>
</template>

<script>
  import storyblok from '../mixins/storyblok'
  import messages from '../assets/translations/home'

  export default {
    mixins: [storyblok],
    data() {
      return {
        slug: 'home',
        gradient: 'to top, #fff, rgba(4,30,48, 0.3)'
      }
    },
    i18n: {
      messages
    }
  }
</script>

<style scoped>
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

  .vv-announcements {
    width: 100%;
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
