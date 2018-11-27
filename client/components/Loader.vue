<template>
  <transition name="loader">
    <div class="loader" v-if="show">
      <div class="container flex flex_items-center loader__wrapper">
        <div class="loader__wrap">
          <div class="loader__svg">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 196 186" style="enable-background:new 0 0 196 186;" xml:space="preserve">
              <g>
                <g>
                  <g>
                    <path class="st0" d="M100.7,11c-45.9,0-83.2,37.2-83.2,83.2c0,45.9,37.2,83.2,83.2,83.2c45.9,0,83.2-37.2,83.2-83.2
                      C183.9,48.2,146.6,11,100.7,11z M100.8,65.7c3.2,0.1,5.8,2.8,5.8,6.1v10.5c0,3.3-2.7,5.9-5.9,5.8c-3.2-0.1-5.8-2.8-5.8-6.1V71.6
                      C94.8,68.3,97.5,65.7,100.8,65.7z M134.3,116.3c0,17.2-16,31.1-33.2,31.1s-34-13.9-34-31.1V71.8c0-15.9,14-29.1,29.7-30.8v12.8
                      c-11.2,1.7-18,11.5-18,23.4V111c0,13.1,9,23.6,22.1,23.6h0c13.1,0,22.1-10.6,22.1-23.6V77.1c0-11.9-8.2-21.7-19.3-23.4V40.9
                      c15.7,1.6,30.6,14.8,30.6,30.9V116.3z"/>
                    <path class="st0" d="M100.6,83.3c1.5,0,2.7-1.5,2.7-3.4v-6c0-1.9-1.2-3.4-2.6-3.5c-1.5,0-2.7,1.5-2.7,3.4v6
                      C98,81.7,99.2,83.3,100.6,83.3z"/>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div class="loader__text" v-if="canSuccess">
            <span>Загрузка</span>
          </div>
          <div class="loader__text" v-else>
            Ошибка при загрузке
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "Loader",
    data() {
      return {
        show: false,
        canSuccess: true
      }
    },
    methods: {
      start() {
        this.show = true
        this.canSuccess = true
        return this
      },
      finish() {
        this.show = false
        return this
      },
      fail() {
        this.canSuccess = false
        return this
      }
    }
  }
</script>

<style scoped lang="less">
  .loader {
    background-color: #0b1015;
    position: fixed;
    z-index: 100000;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all .25s;
  }
  .container {
    min-height: 100vh;
    text-align: center;
    justify-content: center;
  }
  .wrap {
    text-align: center;
  }
  .svg {
    text-align: center;
    margin: 0 auto;
    svg .st0 {
      display: block;
      fill: #0baae3;
    }
    svg {
      max-width: 200px;
    }
  }
  .text {
    color: #fff;
    padding-top: 5px;
    font-size: 20px;
    span {
      position: relative;
      &::after {
        position: absolute;
        bottom: -4px;
        left: 100%;
        content: '....';
        width: 0;
        overflow: hidden;
        animation: dots 1s ease infinite ;
      }
    }
  }
  @keyframes dots {
    0% {
      width: 0;
    }
    25% {
      width: 5px;
    }
    50% {
      width: 10px;
    }
    75% {
      width: 15px;
    }
    100% {
      width: 20px;
    }
  }
  .loader-leave-to {
    opacity: 0
  }
</style>
