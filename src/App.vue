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
    components: { HeaderBar, FooterBar },
    name: 'app'
  }
</script>
