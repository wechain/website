<template>
  <b-navbar toggleable="md" type="dark" variant="dark">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand :to="{ name: 'home'}"><img src="../assets/logo-sm.png"/></b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item :to="{ name: 'about'}">{{ $t("menu.about") }}</b-nav-item>
        <b-nav-item :to="{ name: 'upcoming'}">{{ $t("menu.upcoming") }}</b-nav-item>
        <b-nav-item :to="{ name: 'request'}">{{ $t("menu.request") }}</b-nav-item>
        <b-nav-item :to="{ name: 'sponsors'}">{{ $t("menu.sponsors") }}</b-nav-item>
        <b-nav-item :to="{ name: 'team'}">{{ $t("menu.team") }}</b-nav-item>
        <b-nav-item :to="{ name: 'gallery'}">{{ $t("menu.gallery") }}</b-nav-item>
        <b-nav-item href="https://vuevixens.threadless.com/">{{ $t("menu.shop") }}</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
    <div>
      <b-dropdown id="translations" :text="currentLocale" right class="m-md-2">
        <b-dropdown-item class="translation-item"
                         @click="changeLocale('en')">{{ $t("languages.en") }}</b-dropdown-item>
        <b-dropdown-item class="translation-item"
                         @click="changeLocale('es')">{{ $t("languages.es") }}</b-dropdown-item>
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
            return this.$t("languages.en");
          case 'es':
            return this.$t("languages.es");
        }
      }
    },
    methods: {
      changeLocale(locale) {
        this.$i18n.locale = locale;
      }
    },
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
