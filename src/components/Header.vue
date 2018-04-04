<template>
    <b-navbar toggleable="md" type="dark" variant="dark">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand :to="{ name: 'home'}"><img src="../assets/logo-sm.png"/></b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

          <b-navbar-nav>
            <b-nav-item :to="{ name: 'about'}">About</b-nav-item>
            <b-nav-item :to="{ name: 'upcoming'}">Upcoming Events</b-nav-item>
            <b-nav-item :to="{ name: 'sponsor'}">Request a Skulk</b-nav-item>
            <b-nav-item href="https://vuevixens.threadless.com/">Shop</b-nav-item>
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>
</template>
