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
  import Firebase from 'firebase'
  
  let config = {
    apiKey: "AIzaSyD9mQyBD8vi3hShA60zfTD3hXoRgLQWSZs",
    authDomain: "vue-vixens.firebaseapp.com",
    databaseURL: "https://vue-vixens.firebaseio.com",
    projectId: "vue-vixens",
    storageBucket: "vue-vixens.appspot.com",
    messagingSenderId: "342479743758"
  }
  
  let app = Firebase.initializeApp(config)

	export default {
    components: { HeaderBar, FooterBar },
    name: 'app'
  }
</script>
