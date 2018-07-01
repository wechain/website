<template>
  <b-container fluid>
    <b-row>
      <b-col md="8" offset-md="2" v-if="!!story.content && !!story.content.body">
          <article class="card darkened" v-for="article in story.content.body" :key="article.title">
            <a :href="article.link.url" target="_blank">
              <div class="card-body">
                <h4 class="title">{{article.title}}</h4>
                <p align="left"><em>{{article.author}}</em></p>
                <p align="left">{{article.description}}</p>
              </div>
            </a>
          </article>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import storyblok from '../mixins/storyblok'
  export default {
    mixins: [storyblok],
    data() {
      return {
        slug: 'library',
      }
    },
  }
</script>

<style scoped lang="scss">
  .card {
    margin-bottom: 10px;
  }
  a {
    color: inherit;
    &:hover, &:focus, &:active {
      text-decoration: none;
    }
  }
  p {
    margin-bottom: 0;
  }
  em {
    color: #42b983
  }
</style>