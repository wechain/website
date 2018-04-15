<template>
  <transition name="fade" appear>
    <b-form>
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
                    {{currentEvent.date| moment("MMM Do, YYYY")}}
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
  </transition>
</template>

<script>
import NotFound from './NotFoundComponent'
export default {
  components: {
    NotFound
  },
  data() {
    return {
      story: {},
      loading: false,
    }
  },
  computed: {
    currentEvent() {
      return this.story.content
    }
  },
  created: function() {
    this.$storyblok.on('change', () => { this.loadStory('draft') });
    this.$storyblok.on('published', () => { this.loadStory('draft') });
    this.loadStory('draft');

    this.$storyblok.pingEditor(() => {
      this.loadStory(this.$storyblok.inEditor ? 'draft' : 'published')
    })
  },
  methods: {
    loadStory(version) {
      this.loading = true;
      this.$storyblok.get({
        slug: `events/${this.$route.params.event}`,
        version: version
      }, (data) => {
        this.story = {
          content: {}
        };
        this.$nextTick(() => {
          this.story = data.story;
          this.loading = false;
        });
      }, (error) => {
        this.loading = false;
      });
    }
  }
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
