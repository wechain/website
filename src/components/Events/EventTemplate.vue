<template>
  <b-form v-if="!loading">
    <b-container fluid v-if="!!currentEvent">
      <b-row align-h="start">
        <b-col md="8" offset-md="2">
          <div class="card">
            <img :src="currentEvent.image" class="card-img-top"/>
            <div class="card-body">
              <h4 class="title"><p align="center">{{currentEvent.title}}</p></h4>
              <p>
                {{currentEvent.content}}
              </p>
              <p align="center">
                <template v-for="action in currentEvent.actions">
                  <b-button size="lg" variant="success" :key="action.text"
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
import NotFound from '../NotFoundComponent'
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

<style scoped>
  .error {
    padding: 80px 0;
  }
  .btn {
    margin-right: 10px;
  }
</style>
