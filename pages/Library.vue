<template>
  <div>
    {{story.name}}
  </div>
</template>

<script>
  import storyblok from '../mixins/storyblok'
  export default {
    mixins: [storyblok],
    async asyncData (context) {
      let version = context.query._storyblok || context.isDev ? 'draft' : 'published';
      const response = await context.app.$storyapi.get(`cdn/stories/library`, { version });
      return response.data;
    },
  }
</script>
