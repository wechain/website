<template>
  <v-app>
    <v-navigation-drawer
      v-model="showDrawer"
      app
      dark
    />
    <v-toolbar color="secondary" dark fixed app scroll-off-screen :scroll-threshold="1">
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="showDrawer = !showDrawer"></v-toolbar-side-icon>
      <v-toolbar-title class="vv-logo">
        <img src="../assets/images/logo.png" alt="VueVixens Logo">
        Vue Vixens
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Link One</v-btn>
        <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
        <nuxt/>
    </v-content>
    <v-footer color="secondary" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        showDrawer: false
      }
    }
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
    img {
      max-width: 40px;
      margin-right: 10px;
    }
  }
</style>
