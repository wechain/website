import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Join from '@/components/Join'
import Sponsor from '@/components/Sponsor'
import Credits from '@/components/Credits'

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
        path: '/join',
        name: 'join',
        component: Join
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
    }
  ],
  mode: 'history'
})
