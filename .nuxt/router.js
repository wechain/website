import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _2846b22c = () => import('../pages/Team.vue' /* webpackChunkName: "pages/Team" */).then(m => m.default || m)
const _a69c3ae0 = () => import('../pages/Request.vue' /* webpackChunkName: "pages/Request" */).then(m => m.default || m)
const _571ca71b = () => import('../pages/Credits.vue' /* webpackChunkName: "pages/Credits" */).then(m => m.default || m)
const _c460ea64 = () => import('../pages/About.vue' /* webpackChunkName: "pages/About" */).then(m => m.default || m)
const _2fed645a = () => import('../pages/Gallery.vue' /* webpackChunkName: "pages/Gallery" */).then(m => m.default || m)
const _43ce1ebc = () => import('../pages/Library.vue' /* webpackChunkName: "pages/Library" */).then(m => m.default || m)
const _3b974ee8 = () => import('../pages/Sponsors.vue' /* webpackChunkName: "pages/Sponsors" */).then(m => m.default || m)
const _287956c1 = () => import('../pages/galleries/_gallery.vue' /* webpackChunkName: "pages/galleries/_gallery" */).then(m => m.default || m)
const _254f83b2 = () => import('../pages/events/_event.vue' /* webpackChunkName: "pages/events/_event" */).then(m => m.default || m)
const _461545b3 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/Team",
			component: _2846b22c,
			name: "Team"
		},
		{
			path: "/Request",
			component: _a69c3ae0,
			name: "Request"
		},
		{
			path: "/Credits",
			component: _571ca71b,
			name: "Credits"
		},
		{
			path: "/About",
			component: _c460ea64,
			name: "About"
		},
		{
			path: "/Gallery",
			component: _2fed645a,
			name: "Gallery"
		},
		{
			path: "/Library",
			component: _43ce1ebc,
			name: "Library"
		},
		{
			path: "/Sponsors",
			component: _3b974ee8,
			name: "Sponsors"
		},
		{
			path: "/galleries/:gallery?",
			component: _287956c1,
			name: "galleries-gallery"
		},
		{
			path: "/events/:event?",
			component: _254f83b2,
			name: "events-event"
		},
		{
			path: "/",
			component: _461545b3,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
