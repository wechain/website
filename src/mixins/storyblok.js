export default {
  data() {
    return {
      story: {},
      loading: false,
    }
  },
  created: function () {
    this.$storyblok.on('change', () => {
      this.loadStory('draft')
    });
    this.$storyblok.on('published', () => {
      this.loadStory('draft')
    });

    this.$storyblok.pingEditor(() => {
      this.loadStory(this.$storyblok.inEditor ? 'draft' : 'published')
    })
  },
  methods: {
    loadStory(version) {
      this.loading = true;
      this.$storyblok.get({
        slug: this.slug,
        // slug: `${this.$i18n.locale}/${this.slug}`,
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