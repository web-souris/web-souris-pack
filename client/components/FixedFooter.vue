<template>
  <div class="footer">
    <div class="container flex">
      <social></social>
      <brifs></brifs>
    </div>
  </div>
</template>
<script>
  import Social from './fixed-footer/Social'
  import Brifs from './fixed-footer/Brifs'
  export default {
    components: {
      Social,
      Brifs
    }
  }
</script>
<style lang="less" scoped>
  .footer {
    position: fixed;
    bottom: 4%;
    left: 0;
    right: 0;
    height: 0;
    .container {
      position: relative;
      max-width: 1600px;
    }
  }
  @media screen and (max-height: 700px){
    .footer {
      display: none;
    }
  }
</style>
