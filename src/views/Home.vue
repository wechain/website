<template>
  <b-container fluid>
    <b-row>
      <b-col class="article">
        <h1>{{ msg }}</h1>
        <transition name="fade-scale" appear>
          <img src="../assets/logo.png">
        </transition>
        <h2>{{ tagline }}</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="article spotlight">
        <h2><b>Upcoming Events</b></h2>
        <transition name="fade" appear>
          <b-row v-if="!!story.content && !!story.content.body[0]">
            <b-col v-for="item in story.content.body[0].columns" :key="item.name">
              <b-button variant="link lg" :to="item.url.cached_url">{{item.name}}</b-button>
            </b-col>
          </b-row>
        </transition>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="4">
        <router-link tag="article" :to="{ name: 'upcoming'}" class="card darkened">
          <img src="../assets/fox.jpg" class="card-img-top"/>
          <div class="card-body">
            <h4 class="title">Join a Skulk</h4>
            <p class="card-text">
              Want to learn Vue.js? Join a Vue Vixen Skulk for free!
            </p>
          </div>
        </router-link>
      </b-col>
      <b-col md="4">
        <router-link tag="article" :to="{ name: 'about'}" class="card darkened">
          <img src="../assets/one-student.jpg" class="card-img-top"/>
          <div class="card-body">
            <h4 class="title">The Program</h4>
            <p class="card-text">
              Students and Mentors, learn more about our program.
            </p>
          </div>
        </router-link>
      </b-col>
      <b-col md="4">
        <router-link tag="article" :to="{ name: 'sponsor'}" class="card darkened">
          <img src="../assets/conference-crowd.jpg" class="card-img-top"/>
          <div class="card-body">
            <h4 class="title">Request</h4>
            <p class="card-text">
              Conference organizers, register to host a workshop.
            </p>
          </div>
        </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Welcome to Vue Vixens!',
        tagline: 'Vue Vixens are foxy people who identify as women and who want to learn Vue.js to make websites and mobile apps',
        story: {}
      }
    },
    created: function () {
      this.$storyblok.on('change', () => {
        this.loadStory('draft')
      });
      this.$storyblok.on('published', () => {
        this.loadStory('draft')
      });
      this.loadStory('draft');

      this.$storyblok.pingEditor(() => {
        this.loadStory(this.$storyblok.inEditor ? 'draft' : 'published')
      })
    },
    methods: {
      loadStory(version) {
        this.$storyblok.get({
          slug: 'home',
          version: version
        }, (data) => {
          this.story = {
            content: {
              body: []
            }
          };
          this.$nextTick(() => {
            this.story = data.story
          });
        })
      }
    }
  }
</script>

<style lang="scss">
  html, body {
    height: 100%;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .content {
    flex: 1 0 auto;
    /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their content's default minimum size. */
  }

  .row {
    max-width: calc(100% + 25px);
  }

  .spotlight {
    background-color: #47B784;
    color: white;
    padding: 10px;
    margin: 10px 0px;
  }

  .btn-link {
    font-size: 28px !important;
    color: #235b42 !important;
    &:hover, &:focus, &:active {
      text-decoration: none;
      color: #fff !important;
      text-shadow: 1px 1px 2px #235b42;
    }
  }

  .card.darkened {
    cursor: pointer;
    img {
      -webkit-filter: brightness(0.7);
      -moz-filter: brightness(0.7);
      -o-filter: brightness(0.7);
      filter: brightness(0.7);
    }
    &:hover {
      -webkit-box-shadow: 0 0 5px 0 rgba(50, 50, 50, 1);
      -moz-box-shadow: 0 0 5px 0 rgba(50, 50, 50, 1);
      box-shadow: 0 0 5px 0 rgba(50, 50, 50, 1);
      border: 1px solid rgba(50, 50, 50, 0.6);
      img {
        -webkit-filter: brightness(1);
        -moz-filter: brightness(1);
        -o-filter: brightness(1);
        filter: brightness(1);
      }
    }
  }

  @media (max-width: 768px) {
    .btn-link {
      font-size: 24px !important;
      color: #fff !important;
      &:hover, &:focus, &:active {
        text-decoration: none;
      }
    }
    .card.darkened {
      cursor: pointer;
      img {
        -webkit-filter: brightness(1);
        -moz-filter: brightness(1);
        -o-filter: brightness(1);
        filter: brightness(1);
      }
    }
  }

  .header, .footer {
    flex-shrink: 0;
    /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their content's default minimum size. */
    padding: 10px;
  }

  .container-fluid {
    padding: 10px;
  }

  .form {
    padding: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  article, .article {
    text-align: center;
  }

  .fade-scale-enter-active, .fade-scale-leave-active {
    transition: all 1.5s;
    transform: scale(1)
  }
  .fade-scale-enter, .fade-scale-leave-to {
    opacity: 0;
    transform: scale(0.7)
  }
</style>