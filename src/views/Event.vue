<template>
    <b-form v-if="!loading">
      <b-container fluid v-if="!!currentEvent">
        <b-row align-h="start">
          <b-col md="8" offset-md="2">
            <div class="card" v-editable="currentEvent">
              <img :src="currentEvent.image"
                   class="card-img-top"/>
              <div class="card-body">
                <h4 class="title"><p align="center">{{currentEvent.title}}</p></h4>
                <div class="card-meta">
                  <p v-if="currentEvent.conference">
                    <i class="fas fa-link"></i>
                    <a :href="currentEvent.conference.url">{{currentEvent.conference.url}}</a>
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
                <p>
                  {{currentEvent.description}}
                </p>
                <p align="center">
                  <template v-for="action in currentEvent.actions">
                    <b-button size="lg" variant="success"
                              :key="action.text"
                              :href="action.url.url">
                      {{action.text}}
                    </b-button>
                  </template>
                </p>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <not-found v-else></not-found>
    </b-form>
</template>

<script>
import NotFound from './NotFoundComponent'
import storybook from '../mixins/storyblok'
export default {
  components: {
    NotFound
  },
  mixins: [storybook],
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

<style lang="scss" scoped>
  .error {
    padding: 80px 0;
  }
  .btn {
    margin-right: 10px;
    margin-bottom: 10px;
  }

  .card-meta {
    margin: 20px 0;
    color: #909090;
    font-weight: 500;
    &>p {
      margin: 0;
      i {
        padding-right: 10px;
      }
      a {
        color: #47B784;
        &:hover, &:focus, &:active {
          text-decoration: none;
        }
      }
    }
  }
</style>
