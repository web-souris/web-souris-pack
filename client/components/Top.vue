<template>
  <div class="top" @click="scrollTop">
    <svg data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><defs><style>.cls-1{fill:#0baae3;}</style></defs>
      <path class="cls-1"
            d="M30.94,7.61a22.5,22.5,0,1,0,22.5,22.5A22.5,22.5,0,0,0,30.94,7.61Zm7.78,28.51-7.78-7.78-7.78,7.79L21,34l7.78-7.79h0l2.12-2.12L40.84,34Z"
            transform="translate(-8.44 -7.61)"/></svg>
  </div>
</template>

<script>
  export default {
    name: "Top",
    methods: {
      scrollTop() {
        var scroller = window.pageYOffset
        var t = setInterval(function () {
          console.log(scroller)
          window.scrollTo(0, scroller - 150)
          scroller = scroller - 150
          if(scroller <= 0) {
            clearInterval(t)
          }
        }, 20)

        return this
      },
    }
  }
</script>

<style scoped lang="less">
  .top {
    width: 50px;
    height: 50px;
    position: fixed;
    z-index: 1000;
    top: 50%;
    left: 10px;
    cursor: pointer;
    -webkit-border-radius: 10em;
    -moz-border-radius: 10em;
    border-radius: 10em;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-50%);
    i {
      font-size: 35px;
    }
  }
</style>
