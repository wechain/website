<template>
  <b-row>
    <b-col lg="4" md="6" sm="6" cols="12"
           v-for="event in events"
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
</template>

<script>
  export default {
    props: {
      events: Array,
    }
  }
</script>

<style lang="scss" scoped>
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
    }
    &:hover {
      .event-item-background {
        -webkit-filter: brightness(0.7);
        -moz-filter: brightness(0.7);
        -o-filter: brightness(0.7);
        filter: brightness(0.7);
      }
    }
  }
</style>