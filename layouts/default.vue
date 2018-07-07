<template>
  <v-app>
    <VVDrawer :showDrawer="showDrawer" @toggleDrawer="toggleDrawer($event)" />
    <VVHeader @toggleDrawer="showDrawer = !showDrawer"  />
    <v-content>
        <nuxt/>
    </v-content>
    <v-footer color="secondary" app>
      <span class="white--text"></span>
    </v-footer>
  </v-app>
</template>

<script>
  import VVHeader from '../components/Header'
  import VVDrawer from '../components/Drawer'
  export default {
    components: {
      VVHeader,
      VVDrawer,
    },
    data() {
      return {
        showDrawer: false,
        slug: 'home',
        story: {},
      }
    },
    created() {
      this.$bus.$on('changeLocale', locale =>  this.$i18n.locale = locale )
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

  .v-toolbar__title.vv-logo {
    display: flex;
    align-items: center;
    margin: 0;
    cursor: pointer;
    img {
      max-width: 40px;
      margin-right: 10px;
    }
  }
</style>
