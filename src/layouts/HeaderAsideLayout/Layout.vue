<template>
  <div class="app-wrapper" >

    <div class="main-container">
      <nav-bar></nav-bar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import { NavBar, AppMain } from './components';

export default {
  name: 'layout',
  components: {
    NavBar,
    AppMain,
  },
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}

.main-container {
  min-height: 100vh;
  transition: margin-left 0.28s;
  //margin-left: 256px;
  background-color: #f0f2f5;
}
</style>
