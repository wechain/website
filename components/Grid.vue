<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <v-flex xs6 sm4 md3 v-for="event in events" :key="event.name">
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
</template>

<script>
  export default {
    props: ['events']
  }
</script>

<style scoped lang="scss">
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

    .headline, .subheading {
      width: 100%;
    }

    .event-name {
      z-index: 2;
      flex-wrap: wrap;
    }
  }
</style>
