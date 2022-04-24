export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as SideNav } from '../../components/SideNav.vue'
export { default as SideNavToggle } from '../../components/SideNavToggle.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'
export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'

export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyNuxtLogo = import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => c.default || c)
export const LazySideNav = import('../../components/SideNav.vue' /* webpackChunkName: "components/side-nav" */).then(c => c.default || c)
export const LazySideNavToggle = import('../../components/SideNavToggle.vue' /* webpackChunkName: "components/side-nav-toggle" */).then(c => c.default || c)
export const LazyTutorial = import('../../components/Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => c.default || c)
export const LazyVuetifyLogo = import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => c.default || c)
