<template>
  <b-navbar toggleable="md" type="dark" variant="dark">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand :to="{ name: 'home'}"><img src="../assets/logo-sm.png"/></b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item :to="{ name: 'about'}">About</b-nav-item>
        <b-nav-item :to="{ name: 'upcoming'}">Upcoming Events</b-nav-item>
        <b-nav-item :to="{ name: 'request'}">Request a Skulk</b-nav-item>
        <b-nav-item :to="{ name: 'sponsors'}">Sponsors</b-nav-item>
        <b-nav-item :to="{ name: 'team'}">Team</b-nav-item>
        <b-nav-item :to="{ name: 'gallery'}">Gallery</b-nav-item>
        <b-nav-item href="https://vuevixens.threadless.com/">Shop</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
    <div>
      <b-dropdown id="translations" :text="currentLocale" right class="m-md-2">
        <b-dropdown-item class="translation-item"
                         @click="changeLocale('en')">English</b-dropdown-item>
        <b-dropdown-item class="translation-item"
                         @click="changeLocale('es')">Spanish</b-dropdown-item>
      </b-dropdown>
    </div>
  </b-navbar>
</template>

<script>
  export default {
    computed: {
      currentLocale() {
        switch(this.$i18n.locale) {
          case 'en':
            return 'English';
          case 'es':
            return 'Spanish';
        }
      }
    },
    methods: {
      changeLocale(locale) {
        this.$i18n.locale = locale;
      }
    }
  }
</script>

<style scoped lang="scss">
  .translation-item {
    outline: none;
    &:hover {
      border: none;
      background-color: #47B784;
      color: #fff;
    }
  }
</style>
