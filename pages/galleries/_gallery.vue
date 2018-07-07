<template>
  <div>
    {{story.name}}
  </div>
</template>

<script>
  import storyblok from '../../mixins/storyblok'
  export default {
    mixins: [storyblok],
    computed: {
      slug() {
        return `galleries/${this.$route.params.gallery}`;
      }
    },
  }
</script>
