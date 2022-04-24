import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3652be0e = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _080fc884 = () => interopDefault(import('../pages/business.vue' /* webpackChunkName: "pages/business" */))
const _d8f42302 = () => interopDefault(import('../pages/maintenance.vue' /* webpackChunkName: "pages/maintenance" */))
const _11870e77 = () => interopDefault(import('../pages/organization.vue' /* webpackChunkName: "pages/organization" */))
const _9e52774a = () => interopDefault(import('../pages/product.vue' /* webpackChunkName: "pages/product" */))
const _0ec88ce5 = () => interopDefault(import('../pages/product_detail.vue' /* webpackChunkName: "pages/product_detail" */))
const _14569415 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _048e7bbe = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _3652be0e,
    name: "about"
  }, {
    path: "/business",
    component: _080fc884,
    name: "business"
  }, {
    path: "/maintenance",
    component: _d8f42302,
    name: "maintenance"
  }, {
    path: "/organization",
    component: _11870e77,
    name: "organization"
  }, {
    path: "/product",
    component: _9e52774a,
    name: "product"
  }, {
    path: "/product_detail",
    component: _0ec88ce5,
    name: "product_detail"
  }, {
    path: "/profile",
    component: _14569415,
    name: "profile"
  }, {
    path: "/",
    component: _048e7bbe,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
