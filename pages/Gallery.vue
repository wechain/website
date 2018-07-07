<template>
  <div>
    {{story.name}}
  </div>
</template>

<script>
  import storyblok from '../mixins/storyblok'
  export default {
    data() {
      return {
        slug: 'gallery',
      }
    },
    mixins: [storyblok],
  }
</script>
