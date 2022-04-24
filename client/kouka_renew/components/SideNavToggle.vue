<!-- Please remove this file from your project -->
<template>
  <!-- ハンバーガーメニュー -->
  <div
    class="drawer-toggle"
    role="button"
    @click="$emit('toggle')">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
</template>

<style scoped>
.drawer-toggle {
  /* display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 25%;
  width: 35px;
  cursor: pointer; */
}

@media (min-width: 1200px) {
  .drawer-toggle {
    display: none;
  }
}

.bar {
  background-color: #000;
  display: block;
  width: 35px;
  height: 3px;
  margin-top: 6px;
  transition: .3s ease-in-out;
}
</style>

<script>
export default {
  name: 'TheSideNavToggle',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>
