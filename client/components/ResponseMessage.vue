<template>
    <div class="modal">
      <div class="modal__wrapper">
        <div class="modal__cross" @click="changeResponseMessage(null)"></div>
        <h3>Спасибо!!!</h3>
        <p v-html="getResponseMessage"></p>
      </div>
    </div>
</template>
<script>
  import {mapMutations, mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapGetters(['getResponseMessage'])
    },
    methods: {
      ...mapMutations(['changeResponseMessage'])
    },
    mounted: function() {
      var vm = this
      setTimeout(function () {
        vm.changeResponseMessage(null)
      }, 10000)
    }
  }
</script>
<style scoped lang="less">
  .modal {
    position: fixed;
    z-index: 100000;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(#000, .8);
    display: flex;
    justify-content: center;
    align-items: center;
    &__wrapper {
      background-image: url(/img/modal-bg.jpg);
      -webkit-background-size: cover;
      background-size: cover;
      background-repeat: no-repeat;
      padding: 7vh 5vw;
      position: relative;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
      max-width: 580px;
    }
    &__cross {
      width: 22px;
      height: 22px;
      background-image: url(/img/cross.png);
      background-repeat: no-repeat;
      cursor: pointer;
      position: absolute;
      top: 5%;
      right: 5%;
    }
    h3 {
      text-align: center;
      color: #fff;
      font-size: 24px;
      font-weight: bold;
    }
    p {
      font-size: 16px;
      padding-top: 25px;
      color: #9eabb0;
      b {
        color: #fff;
      }
    }

  }
</style>
