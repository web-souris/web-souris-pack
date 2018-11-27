<template>
  <div class="about-item">
    <div class="about-item__wrap">
      <div class="about-item__image" v-html="item.image"></div>
      <div class="about-item__circle" :style="{top: item.circle.top + '%', left: item.circle.left + '%'}"></div>
    </div>
    <div class="about-item__text">
      {{item.text}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "Item",
    props: ['item']
  }
</script>

<style scoped lang="less">
  .item {
    flex-basis: 24%;
    &__wrap {
      position: relative;
      width: 70px;
      margin: 0 auto;
    }
    &__image {
      height: 70px;
      text-align: center;
      z-index: 2;
      position: relative;
    }
    &__circle {
      z-index: 1;
      width: 33px;
      height: 33px;
      border: solid 8px #0baae3;
      -webkit-border-radius: 10em;
      -moz-border-radius: 10em;
      border-radius: 10em;
      position: absolute;
    }
    &__text {
      text-align: center;
      font-size: 18px;
      font-weight: 500;
      color: #4a4a4a;
      max-width: 180px;
      margin: 0 auto;
      padding-top: 15px;
    }
  }
  @media screen and (max-width: 992px) {
    .item {
      flex-basis: 48%;
      margin-bottom: 20px;
    }
  }
  @media screen and (max-width: 400px) {
    .item {
      flex-basis: 100%;
    }
  }
</style>
