<template>
  <div class="about__wrap" ref="mouse">
    <div class="about__dots"></div>
    <div class="about__round"></div>
    <div class="about__mouse" :style="'top:'+mouseTop + 'px'"></div>
  </div>
</template>

<script>
  export default {
    name: "Mouse",
    data() {
      return {
        mouseTop: 0
      }
    },
    methods: {
      changeMouse(top) {
        return this.mouseTop = top
      },
      scrollMouse() {
        const mouse = this.$refs.mouse
        const offset = mouse.offsetTop - window.innerHeight
        const offsetBottom = mouse.offsetTop
        const offsetTop = window.pageYOffset
        if(offsetTop >= offset && offsetTop <= offsetBottom) {
          const change = (offsetTop - offset) / 3
          this.changeMouse(change)
        }
      }
    },
    mounted: function () {
      window.addEventListener('scroll', this.scrollMouse)
    },
    destroyed: function () {
      window.removeEventListener('scroll', this.scrollMouse)
    }
  }
</script>

<style scoped lang="less">
  .wrap {
    text-align: center;
    position: relative;
  }
  .dots {
    background-image: url(/img/dots.png);
    width: 151px;
    min-height: 100vh;
    height: 100%;
    margin: 0 auto;
  }
  .round {
    width: 470px;
    height: 470px;
    -webkit-border-radius: 250px;
    -moz-border-radius: 250px;
    border-radius: 250px;
    background-color: #ffe8d0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    left: 50%;
  }
  .mouse {
    width: 272px;
    height: 497px;
    background-image: url(/img/mouse-hover.png);
    background-repeat: no-repeat;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  @media screen and (max-width: 1170px) {
    .wrap {
      display: none;
    }
  }
</style>
