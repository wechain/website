<template>
  <v-jumbotron :gradient="gradient" src="/images/jumbo.png" height="350px" >
    <v-container fill-height>
      <v-layout align-center justify-center wrap>
        <v-flex xs12 text-xs-center>
          <h2 class="vv-subheading font-lato secondary--text text--darken-2">{{$t('eventsTitle')}}</h2>
        </v-flex>
        <v-layout align-center justify-space-around wrap class="vv-announcements">
          <v-flex xs12 md4 text-xs-center v-for="item in announcements" :key="item.name">
            <nuxt-link :to="item.url.cached_url" class="vv-link font-weight-bold secondary--text text--darken-2">
              {{item.name}}
            </nuxt-link>
          </v-flex>
        </v-layout>
        <v-flex xs12 text-xs-center>
          <v-btn to="/upcoming" color="secondary darken-2" dark>{{$t('cta')}}</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<script>
  import messages from '../assets/translations/announcements'
  export default {
    props: ['announcements'],
    data() {
      return {
        gradient: 'to top, #fff, rgba(4,30,48, 0.3)'
      }
    },
    i18n: {
      messages
    }
  }
</script>

<style scoped>
  .vv-announcements {
    padding: 20px 0;
  }

  .vv-link {
    font-size: 24px;
    text-decoration: none;
  }

  .vv-subheading {
    text-shadow: 2px 2px 0px #bababa;
  }

  @media (min-width: 961px) {
    .vv-link:hover {
      text-shadow: 0 0 8px #47b784;
    }
  }

  @media (max-width: 960px) {
    .vv-announcements {
      padding: 10px 0;
    }

    .vv-link {
      font-size: 20px;
    }
  }
</style>
