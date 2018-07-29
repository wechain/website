export default {
  data() {
    return {
      story: {},
      loading: false
    };
  },
  methods: {
    async loadStory(locale) {
      const slug = this.$route.path === '/' ? 'upcoming' : this.$route.path;
      const path =
        locale === 'en'
          ? `cdn/stories/${slug}`
          : `cdn/stories/${locale}/${slug}`;
      const response = await this.$storyapi.get(path, { version: 'published' });
      this.story = response.data.story;
    },
    listener(locale) {
      this.loadStory(locale);
    }
  },
  async asyncData(context) {
    let version =
      context.query._storyblok || context.isDev ? 'draft' : 'published';
    const path = context.route.path === '/' ? 'upcoming' : context.route.path;
    const response = await context.app.$storyapi.get(`cdn/stories/${path}`, {
      version
    });
    return response.data;
  },
  mounted() {
    this.$storyblok.init();
    this.$storyblok.on('change', () => {
      location.reload(true);
    });
    this.$storyblok.on('published', () => {
      location.reload(true);
    });
    this.$bus.$on('changeLocale', this.listener);
  },
  beforeDestroy() {
    this.$bus.$off('changeLocale', this.listener);
  }
};
