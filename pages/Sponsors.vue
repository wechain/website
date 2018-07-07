<template>
  <div>
    {{story.name}}
  </div>
</template>

<script>
  import storyblok from '../mixins/storyblok'
  export default {
    mixins: [storyblok],
    data() {
      return {
        slug: 'sponsors',
      }
    },
  }
</script>
