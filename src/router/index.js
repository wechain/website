import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Upcoming from '@/components/Upcoming'
import Sponsor from '@/components/Sponsor'
import Credits from '@/components/Credits'
import Event from '@/components/Events/EventTemplate'
import NotFoundComponent from '@/components/NotFoundComponent'

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
  mode: 'history'

})
