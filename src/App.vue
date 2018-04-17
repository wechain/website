<template>
  <div id="app">
    <header-bar class="header"></header-bar>
      <router-view class="view content"></router-view>
    <footer-bar class="footer"></footer-bar>
  </div>
</template>

<script>
  import HeaderBar from './components/Header.vue'
  import FooterBar from './components/Footer.vue'

  export default {
    components: {HeaderBar, FooterBar},
    name: 'app',
    created() {
      this.$storyblok.init({
        accessToken: 'plc0fBh2no8owEeTALSN2wtt'
      });
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .form-group.required > label:after {
    content: "*";
    font-weight: 400;
    color: red;
    padding-left: .2em;
    font-size: 1em;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>