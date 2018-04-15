<template>
    <b-container fluid>
        <b-row>
            <b-col md="8" offset-md="2">
                <h4 class="title text-center">Partners</h4>
                  <b-row v-if="!!story.content && !!story.content.body">
                    <b-col md="6" v-for="partner in story.content.body"
                        :key="partner.name">
                    <article class="card">
                      <img :src="partner.img"
                        class="card-img-top"/>
                        <div class="card-body">
                          <h4 class="title">{{partner.name}}</h4>
                            <p class="card-text">
                              {{partner.bio}}
                            </p>
                            <p v-if="partner.twitter">
                              <i class="fab fa-twitter"></i>
                              <a v-bind:href="'http://www.twitter.com/' + partner.twitter">@{{partner.twitter}}</a>
                            </p>
                            <p v-if="partner.website.url">
                              <i class="fas fa-link"></i>
                              <a :href="partner.website.url">{{partner.website.url}}</a>
                            </p>
                          </div>
                    </article> 
                    </b-col>
                  </b-row>          
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
  data() {
    return {
      story: {}
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
      this.$storyblok.get({
        slug: 'partners',
        version: version
      }, (data) => {
        this.story = {
          content: {
            body: []
          }
        };
        this.$nextTick(() => {
          this.story = data.story
        });
      })
    }
  }
}
</script>
