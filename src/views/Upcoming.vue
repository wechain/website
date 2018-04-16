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
              <transition name="fade" mode="out-in" appear>
                <vv-grid v-if="showGrid" :events="story.content.body"></vv-grid>
                <div class="calendar" v-else>
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
  import VvGrid from '../components/Grid'

  export default {
    mixins: [storyblok],
    components: {
      CalendarView,
      VvGrid,
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

  .calendar {
    width: 100%;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
</style>