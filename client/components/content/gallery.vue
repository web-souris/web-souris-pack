<template>
  <div class="item">
    <img v-img:gallery :src="image.image" :alt="image.content.title">
  </div>
</template>

<script>
  export default {
    name: "gallery",
    props: ['image']
  }
</script>

<style scoped lang="less">
  .item {
    flex-basis: 32%;
    margin-bottom: 25px;
    max-height: 500px;
    overflow: hidden;
    box-shadow: 0px 3px 7px 0 rgba(0, 0, 0, 0.25);
  }
  @media screen and (max-width: 992px){
    .item {
      flex-basis: 48%;
    }
  }
  @media screen and (max-width: 768px){
    .item {
      flex-basis: 100%;
    }
  }
</style>
