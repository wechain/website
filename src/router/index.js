import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Upcoming from '@/components/Upcoming'
import Sponsor from '@/components/Sponsor'
import Credits from '@/components/Credits'
import Event from '@/components/Events/EventTemplate'
import NotFoundComponent from '@/components/NotFoundComponent'
import WeRise2018 from '@/components/Events/WeRise2018'
import VueUS2018 from '@/components/Events/VueUS2018'
import ConnectTech2018 from '@/components/Events/ConnectTech2018'

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
      path: '/WeRise2018',
      name: 'werise2018',
      component: WeRise2018
    },
    {
      path: '/VueUS2018',
      name: 'vueus2018',
      component: VueUS2018
    },
    {
      path: '/ConnectTech2018',
      name: 'connecttech2018',
      component: ConnectTech2018
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
