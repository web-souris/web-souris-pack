<template>
  <header class="header" :class="'header_' + getHeaderTheme">
    <div class="container flex flex_content-between">
      <burger></burger>
      <logo></logo>
      <callback></callback>
    </div>
  </header>
</template>
<script>
  import Burger from './Header/Burger.vue'
  import Logo from './svg/logo'
  import Callback from './Header/Callback.vue'
  import {mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'getHeaderTheme'
      ])
    },
    components: {
      Burger,
      Logo,
      Callback
    },
  }
</script>
<style>
</style>
