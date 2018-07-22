import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _b1123e7e = () => import('../pages/Library.vue' /* webpackChunkName: "pages/Library" */).then(m => m.default || m)
const _6dd766f4 = () => import('../pages/Upcoming.vue' /* webpackChunkName: "pages/Upcoming" */).then(m => m.default || m)
const _125bb647 = () => import('../pages/Team.vue' /* webpackChunkName: "pages/Team" */).then(m => m.default || m)
const _4d06cd83 = () => import('../pages/Sponsors.vue' /* webpackChunkName: "pages/Sponsors" */).then(m => m.default || m)
const _105aa495 = () => import('../pages/Request.vue' /* webpackChunkName: "pages/Request" */).then(m => m.default || m)
const _4bb20fd8 = () => import('../pages/Gallery.vue' /* webpackChunkName: "pages/Gallery" */).then(m => m.default || m)
const _1349ebda = () => import('../pages/About.vue' /* webpackChunkName: "pages/About" */).then(m => m.default || m)
const _8a752dc0 = () => import('../pages/Credits.vue' /* webpackChunkName: "pages/Credits" */).then(m => m.default || m)
const _a7442412 = () => import('../pages/events/_event.vue' /* webpackChunkName: "pages/events/_event" */).then(m => m.default || m)
const _319b8f9c = () => import('../pages/galleries/_gallery.vue' /* webpackChunkName: "pages/galleries/_gallery" */).then(m => m.default || m)
const _c2be7610 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
			path: "/Library",
			component: _b1123e7e,
			name: "Library"
		},
		{
			path: "/Upcoming",
			component: _6dd766f4,
			name: "Upcoming"
		},
		{
			path: "/Team",
			component: _125bb647,
			name: "Team"
		},
		{
			path: "/Sponsors",
			component: _4d06cd83,
			name: "Sponsors"
		},
		{
			path: "/Request",
			component: _105aa495,
			name: "Request"
		},
		{
			path: "/Gallery",
			component: _4bb20fd8,
			name: "Gallery"
		},
		{
			path: "/About",
			component: _1349ebda,
			name: "About"
		},
		{
			path: "/Credits",
			component: _8a752dc0,
			name: "Credits"
		},
		{
			path: "/events/:event?",
			component: _a7442412,
			name: "events-event"
		},
		{
			path: "/galleries/:gallery?",
			component: _319b8f9c,
			name: "galleries-gallery"
		},
		{
			path: "/",
			component: _c2be7610,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
