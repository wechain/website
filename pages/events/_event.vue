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
      currentEvent() {
        return this.story.content
      },
      slug() {
        return `events/${this.$route.params.event}`;
      }
    },
  }
</script>
