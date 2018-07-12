<template>
  <v-app>
    <VVDrawer :showDrawer="showDrawer" @toggleDrawer="toggleDrawer($event)"/>
    <VVHeader @toggleDrawer="showDrawer = !showDrawer"/>
    <v-content class="vv-main">
      <nuxt/>
    </v-content>
    <VVFooter/>
  </v-app>
</template>

<script>
  import VVHeader from '../components/Header'
  import VVDrawer from '../components/Drawer'
  import VVFooter from '../components/Footer'

  export default {
    components: {
      VVHeader,
      VVDrawer,
      VVFooter
    },
    data() {
      return {
        showDrawer: false,
        story: {},
      }
    },
    created() {
      this.$bus.$on('changeLocale', locale => this.$i18n.locale = locale)
    },
    methods: {
      toggleDrawer(event) {
        this.showDrawer = event;
      }
    },
  }
</script>

<style lang="scss">
  html {
    font-family: Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .vv-main {
    background-color: #fff;
  }

  .vv-heading {
    font-weight: bold;
    font-size: 56px;
    letter-spacing: 1px;
  }
  .vv-subheading {
    font-size: 34px;
    line-height: 44px;
  }
  .font-lato {
    font-family: 'Lato', sans-serif;
  }

  .vv-card {
    &:hover {
      .vv-card-image {
        &:before {
          transition: .5s linear;
          background-position: -200% 0, 0 0, 0 0, 0 100%, 0 4px, 0 calc(100% - 4px);
        }
      }
    }

    cursor: pointer;
    .vv-card-text {
      padding-top: 15px;
    }

    .vv-card-image {
      &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 2;
        background-image: linear-gradient(135deg, rgba(255, 255, 255, .0) 30%, rgba(255, 255, 255, .8), rgba(255, 255, 255, .0) 70%);
        background-repeat: no-repeat;
        background-size: 200% 100%, auto, 100% 2px, 100% 2px, 100% 1px, 100% 1px;
        background-position: 200% 0, 0 0, 0 0, 0 100%, 0 4px, 0 calc(100% - 4px);
      }
    }

    .title {
      width: 100%;
    }
  }

  .vv-container {
    position: relative;
    overflow: hidden;
    padding-bottom: 30px;
    &:before {
      content: "";
      position: absolute;
      z-index: 0;
      width: 100%;
      height: 180%;
      top: 16px;
      -webkit-transform: skewY(-12deg);
      transform: skewY(-39deg);
      background: linear-gradient(220deg, #fff, #fff 27%, #47b784);
    }
  }

  @media (max-width: 960px) {
    .vv-heading {
      font-size: 26px;
    }
    .vv-subheading {
      font-size: 22px;
      line-height: 22px;
    }
  }
</style>
