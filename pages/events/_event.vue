<template>
  <v-layout class="vv-container" fill-height>
    <v-container class="indexed" fill-height>
      <v-card height="100%" v-if="currentEvent">
        <img :src="currentEvent.image" :alt="`${currentEvent.title} image`">
        <v-card-title>
          <h3 class="vv-subheading font-lato text-xs-center">Title</h3>
          <div class="card-meta">
            <p v-if="currentEvent.conference.url">
              <a :href="currentEvent.conference.url">
                <i class="fas fa-link grey--text"></i>
                {{currentEvent.conference.url}}
              </a>
            </p>
            <p v-if="currentEvent.date">
              <i class="far fa-calendar-alt"></i>
              {{currentEvent.date| moment('MMM Do, YYYY')}}
            </p>
            <p v-if="currentEvent.location">
              <i class="fas fa-map-marker-alt"></i>
              {{currentEvent.location}}
            </p>
          </div>
          <p class="text-xs-left">{{currentEvent.description}}</p>
        </v-card-title>
        <v-card-actions class="card-buttons" justify-center>
          <v-btn color="secondary darken-2" dark v-for="action in currentEvent.actions"
                 :key="action.text"
                 :href="action.url.url" target="_blank">
            {{action.text}}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-layout>
</template>

<script>
  import storyblok from '../../mixins/storyblok'

  export default {
    mixins: [storyblok],
    computed: {
      currentEvent() {
        return this.story.content
      },
      slug() {
        return `events/${this.$route.params.event}`;
      }
    },
  }
</script>

<style scoped lang="scss">
  img {
    width: 100%;
  }

  .vv-container {
    padding-bottom: 0;
  }

  .container.indexed {
    padding-top: 0;
    padding-bottom: 0;
  }

  h3 {
    width: 100%;
  }

  .card-meta {
    color: #909090;
    padding: 20px 0;
    text-align: left;
    width: 100%;
    a {
      width: 100%;
      display: block;
      text-decoration: none;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    i {
      padding-right: 5px;
    }
    p {
      margin: 0;
    }
  }

  .card-buttons {
    padding-bottom: 50px;
    justify-content: center;
  }
</style>
