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
                        <transition name="fade">
                            <b-row v-if="!!story.content && !!story.content.body">
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
                        </transition>
                    </div>
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
            slug: 'upcoming'
        }
      },
    }
</script>

<style lang="scss">
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
</style>