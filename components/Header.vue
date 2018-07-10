<template>
  <v-toolbar color="secondary darken-2" dark fixed app>
    <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="$emit('toggleDrawer')"></v-toolbar-side-icon>
    <nuxt-link tag="v-toolbar-title" class="vv-logo" to="/">
      <img src="~/assets/images/logo.png" alt="VueVixens Logo">
      Vue Vixens
    </nuxt-link>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/about" nuxt>{{ $t("menu.about") }}</v-btn>
      <v-btn flat to="/upcoming" nuxt>{{ $t("menu.upcoming") }}</v-btn>
      <v-btn flat to="/sponsors" nuxt>{{ $t("menu.sponsors") }}</v-btn>
      <v-btn flat to="/team" nuxt>{{ $t("menu.team") }}</v-btn>
      <v-btn flat to="/gallery" nuxt>{{ $t("menu.gallery") }}</v-btn>
      <v-btn flat to="/library" nuxt>{{ $t("menu.library") }}</v-btn>
      <v-btn flat href="https://vuevixens.threadless.com/" target="_blank">{{ $t("menu.shop") }}</v-btn>
    </v-toolbar-items>
    <v-toolbar-items>
      <v-menu offset-y left dark transition="slide-x-transition">
        <v-btn
          slot="activator"
          light
          depressed
          color="primary">
          <span class="flag-icon" :class="currentLocale.flag"></span>
          &nbsp;{{currentLocale.language}}
        </v-btn>
        <v-list class="secondary">
          <v-list-tile
            @click="changeLocale('en')">
            <v-list-tile-title>
              <span class="flag-icon flag-icon-gb"></span>
              {{ $t("languages.en") }}
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile
            @click="changeLocale('es')">
            <v-list-tile-title>
              <span class="flag-icon flag-icon-es"></span>
              {{ $t("languages.es") }}
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  import messages from '../assets/translations/header'
  export default {
    computed: {
      currentLocale() {
        switch(this.$i18n.locale) {
          case 'en':
            return {
              language: this.$t("languages.en"),
              flag: 'flag-icon-gb'
            };
          case 'es':
            return {
              language: this.$t("languages.es"),
              flag: 'flag-icon-es'
            };
        }
      },
    },
    methods: {
      changeLocale(locale) {
        this.$bus.$emit('changeLocale', locale);
      }
    },
    i18n: {
      messages
    }
  }
</script>
