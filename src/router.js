import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Upcoming from '@/views/Upcoming'
import Sponsor from '@/views/Sponsor'
import Credits from '@/views/Credits'
import Event from '@/views/Event'
import NotFoundComponent from '@/views/NotFoundComponent'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/upcoming',
      name: 'upcoming',
      component: Upcoming
    },
    {
      path: '/sponsor',
      name: 'sponsor',
      component: Sponsor
    },
    {
      path: '/credits',
      name: 'credits',
      component: Credits
    },
    {
      path: '/events/:event',
      component: Event,
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '*',
      component: NotFoundComponent
    },
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});
