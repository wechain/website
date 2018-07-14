<template>
  <v-layout class="vv-container">
    <v-container class="indexed">
      <v-flex xs-12 text-xs-center>
        <img class="vv-logo" src="~/assets/images/logo.png" alt="VueVixens logo">
      </v-flex>
      <v-flex xs12>
        <h2 class="vv-subheading font-lato text-xs-center">{{ $t("vixens.title") }}</h2>
        <i18n path="vixens.content" tag="p" align="left">
          <a class="link-green" href="https://medium.com/@jenlooper/introducing-vue-vixens-82a36455438a"
             place="medium">{{ $t("vixens.mediumLink") }}</a>
          <a class="link-green" href="http://www.jenlooper.com"
             place="jen">{{ $t("vixens.jenLink") }}</a>
          <a class="link-green" href="http://www.progress.com"
             place="progress">{{ $t("vixens.progressLink") }}</a>
          <a class="link-green" href="http://www.ng-girls.org"
             place="ngGirls">{{ $t("vixens.ngGirlsLink") }}</a>
          <a class="link-green" href="mailto:info@vuevixens.org"
             place="mail">{{ $t("vixens.mailLink") }}</a>
        </i18n>
        <h2 class="vv-subheading font-lato text-xs-center">{{ $t("activities.title") }}</h2>
        <p>{{ $t("activities.content.paragraph1") }}</p>
        <i18n path="activities.content.paragraph2" tag="p" align="left">
          <b place="mentorsNote">{{ $t("activities.content.mentorsNote") }}</b>
        </i18n>
        <i18n path="activities.content.paragraph3" tag="p" align="left">
          <b place="studentsNote">{{ $t("activities.content.studentsNote") }}</b>
        </i18n>
        <p>{{ $t("activities.content.paragraph4") }}</p>
        <p>{{ $t("activities.content.paragraph5") }}</p>
      </v-flex>
    </v-container>
  </v-layout>
</template>

<script>
  import messages from '../assets/translations/about'
  export default {
    i18n: {
      messages
    }
  }
</script>

<style scoped>
  .indexed {
    z-index: 1;
  }

  .vv-logo {
    width: 100%;
    max-width: 250px;
    margin-bottom: 20px;
  }

  p {
    padding: 10px 0;
  }
</style>
