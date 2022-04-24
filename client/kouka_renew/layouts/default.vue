<template>
  <div>
    <Header @sidenavToggle="displaySidenav = !displaySidenav" />
    <SideNav :show="displaySidenav" @close="displaySidenav = false" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import SideNav from '@/components/SideNav'
import Footer from '@/components/Footer'
export default {
  name: 'DefaultLayout',
  data () {
    return {
      displaySidenav: false
    }
  },
  components: {
    Header,
    SideNav,
    Footer
  }
}
</script>
