<template>
  <b-container fluid>
    <b-row>
      <b-col md="8" offset-md="2">
        <article class="card">
          <img src="../assets/skulk.jpg" class="card-img-top"/>
          <div class="card-body">
            <h4 class="title">Upcoming Skulks</h4>
            <p class="card-text">
              What's a skulk? A group of foxes is actually called a skulk. Here are events coming soon to
              a conference near you!
            </p>
            <div class="calendar" v-if="!!story.content && !!story.content.body" align="center">
              <b-button class="toggle-button" size="lg" variant="success" @click="showGrid = !showGrid">
                {{showGrid ? 'Show calendar' : 'Show grid'}}
              </b-button>
              <transition name="fade" mode="out-in">
                <b-row v-if="showGrid" key="grid">
                  <b-col lg="4" md="6" sm="6" cols="12"
                         v-for="event in story.content.body"
                         :key="event.name">
                    <router-link tag="figure" :to="event.link.cached_url" v-editable="event"
                                 class="event-item d-flex justify-content-center align-items-center">
                      <div class="event-item-background"
                           :style="{backgroundImage: `url(${event.img})`}"></div>
                      <figcaption>
                        <h5>{{event.location}}</h5>
                        <p>{{event.date | moment('MMM Do')}}</p>
                      </figcaption>
                    </router-link>
                  </b-col>
                </b-row>
                <div class="calendar" v-else key="calendar">
                  <calendar-view :show-date="showDate"
                                 :events="events"
                                 @show-date-change="setShowDate"
                                 @click-event="navigateToEvent"></calendar-view>
                </div>
              </transition>
            </div>
          </div>
        </article>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import storyblok from '../mixins/storyblok'
  import CalendarView from 'vue-simple-calendar'
  import 'vue-simple-calendar/dist/static/css/default.css';
  import 'vue-simple-calendar/dist/static/css/holidays-us.css';

  export default {
    mixins: [storyblok],
    components: {
      CalendarView
    },
    data() {
      return {
        slug: 'upcoming',
        showDate: new Date(),
        showGrid: true,
      }
    },
    computed: {
      events() {
        if (this.story.content && this.story.content.body) {
          return this.story.content.body.map(event => ({
            startDate: event.date,
            title: event.location,
            link: event.link.cached_url,
            classes: 'conference',
          }))
        }
      }
    },
    methods: {
      setShowDate(d) {
        this.showDate = d;
      },
      navigateToEvent(event) {
        this.$router.push(event.originalEvent.link);
      }
    }
  }
</script>

<style lang="scss">
  .conference {
    background-color: #b5e2cd!important;
    cursor: pointer;
  }
  .toggle-button {
    margin-bottom: 20px;
  }
  .event-item {
    position: relative;
    width: 100%;
    height: 200px;
    background-color: lightgray;
    color: #fff;
    text-align: center;
    cursor: pointer;
    figcaption {
      z-index: 2;
      h5 {
        font-size: 24px;
      }
      p {
        font-size: 20px;
      }
    }
    .event-item-background {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-size: cover;
      -webkit-filter: brightness(0.4);
      -moz-filter: brightness(0.4);
      -o-filter: brightness(0.4);
      filter: brightness(0.4);
      z-index: 1;
      &:hover {
        -webkit-filter: brightness(0.7);
        -moz-filter: brightness(0.7);
        -o-filter: brightness(0.7);
        filter: brightness(0.7);
      }
    }
  }

  .calendar {
    width: 100%;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
</style>