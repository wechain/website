import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Upcoming from '@/views/Upcoming'
import Credits from '@/views/Credits'
import Sponsors from '@/views/Sponsors'
import Request from '@/views/Request'
import Team from '@/views/Team'
import Event from '@/views/Event'
import Gallery from '@/views/Gallery'
import GalleryItem from '@/views/GalleryItem'
import NotFoundComponent from '@/views/NotFoundComponent'
import Library from '@/views/Library'

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
      path: '/request',
      name: 'request',
      component: Request
    },
    {
      path: '/credits',
      name: 'credits',
      component: Credits
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/sponsors',
      name: 'sponsors',
      component: Sponsors
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    },
    {
      path: '/galleries/:item',
      name: 'galleryItem',
      component: GalleryItem
    },
    {
      path: '/events/:event',
      component: Event,
    },
    {
      path: '/library',
      name: 'library',
      component: Library,
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
