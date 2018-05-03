<template>
  <b-container fluid>
    <b-row>
      <b-col md="8" offset-md="2">
        <h3 class="title text-center">Our Sponsors</h3>
        <h4 class="title text-center">We are extremely grateful to our sponsors! Below is a list of 
            our valued community sponsors who are supporting our project</h4>
        <b-row v-if="!!story.content && !!story.content.body">
          <b-col md="6" v-for="sponsor in story.content.body"
                 :key="sponsor.name">
            <article class="card" v-editable="sponsor">
              <img :src="sponsor.img"
                   class="card-img-top"/>
              <div class="card-body">
                <h4 class="title">{{sponsor.name}}</h4>
                <p class="card-text">
                  {{partner.description}}
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
  import storyblok from "../mixins/storyblok";

  export default {
    mixins: [storyblok],
    data() {
      return {
        slug: 'sponsors',
      }
    },
  }
</script>

<style scoped>
  .title {
    padding: 20px 0
  }

  .card {
    height: 100%;
  }
</style>
