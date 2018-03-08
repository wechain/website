<template>
    <b-container fluid>
          <b-row>
            <b-col class="article">
              <h1>{{ msg }}</h1>
              <img src="../assets/logo.png">
              <h2>{{ tagline }}</h2>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="article spotlight">
              <h2><b>Upcoming Events</b></h2>
              <b-row>
                <b-col><b-button variant="link lg" :to="{ name: 'vueus2018'}">March 27, VueConf.Us</b-button></h3></b-col>
                <b-col><b-button variant="link lg" :to="{ name: 'werise2018'}">June 22, WeRise.Tech</b-button></b-col>
                <b-col><b-button variant="link lg" :to="{ name: 'connecttech2018'}">September 22, Connect.Tech</b-button></b-col>
            </b-row>
            </b-col>
          </b-row>
          <b-row>
              <b-col md="4">
                <article class="card">
                    <img src="../assets/fox.jpg" class="card-img-top"/>
                    <div class="card-body">
                      <h4 class="title">Join a Skulk</h4>
                      <p class="card-text">
                        Want to learn Vue.js? Join a Vue Vixen Skulk for free!
                      </p>
                      <b-button :to="{ name: 'upcoming'}" size="lg" variant="success">Go</b-button>
                    </div>
                </article>
              </b-col>
              <b-col md="4">
                <article class="card">
                    <img src="../assets/one-student.jpg" class="card-img-top"/>
                    <div class="card-body">
                      <h4 class="title">The Program</h4>
                      <p class="card-text">
                        Students and Mentors, learn more about our program.
                      </p>
                      <b-button :to="{ name: 'about'}" size="lg" variant="success">Go</b-button>
                    </div>
                </article>
              </b-col>
              <b-col md="4">
                <article class="card">
                    <img src="../assets/conference-crowd.jpg" class="card-img-top"/>
                    <div class="card-body">
                      <h4 class="title">Request</h4>
                      <p class="card-text">
                        Conference organizers, register to host a workshop.
                      </p>
                      <b-button :to="{ name: 'sponsor'}" size="lg" variant="success">Go</b-button>
                    </div>
                </article>
              </b-col>
          </b-row>
      </b-container>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Welcome to Vue Vixens!',
      tagline: 'Vue Vixens are foxy people who identify as women and who want to learn Vue.js to make websites and mobile apps'
    }
  }
}
</script>

<style>

html, body {
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.content {
  flex: 1 0 auto;
  /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their content's default minimum size. */
}
.spotlight{
  background-color: #47B784;
  color: white;
  padding: 10px;
  margin: 10px 0px;
}
.btn-link {
  font-size: 30px !important;
  color: white !important;
}
.header,.footer {
  flex-shrink: 0;
  /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their content's default minimum size. */
  padding: 10px;
}
.container-fluid{
  padding: 10px;
}
.form {
  padding: 10px;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
article, .article {
  text-align:center;
}
</style>