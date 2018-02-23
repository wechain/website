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
  export const db = app.database();