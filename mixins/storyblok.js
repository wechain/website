export default {
  data() {
    return {
      story: {},
      loading: false,
    }
  },
  mounted () {
    this.$storyblok.init();
    this.$storyblok.on('change', () => {
      location.reload(true)
    });
    this.$storyblok.on('published', () => {
      location.reload(true)
    })
  },
}
